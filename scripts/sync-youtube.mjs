import { writeFile } from "node:fs/promises";

const CHANNEL_ID = "UC8j6UGaUzh-y2SwRDHUWgig";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const OUTPUT_PATH = new URL("../src/data/youtube-videos.json", import.meta.url);
const SAFE_VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;

const decodeXml = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

const getTag = (entry, tag) => {
  const match = entry.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`));
  return match ? decodeXml(match[1].trim()) : "";
};

try {
  const response = await fetch(FEED_URL, {
    headers: { "user-agent": "URI-Badminton-Website/1.0" },
  });

  if (!response.ok) {
    throw new Error(`YouTube feed returned ${response.status}`);
  }

  const xml = await response.text();
  const videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
    .map((match) => {
      const entry = match[1];
      return {
        title: getTag(entry, "title"),
        published: getTag(entry, "published"),
        youtubeId: getTag(entry, "yt:videoId"),
      };
    })
    .filter(
      (video) =>
        video.title &&
        SAFE_VIDEO_ID.test(video.youtubeId) &&
        !Number.isNaN(Date.parse(video.published)),
    )
    .slice(0, 15);

  await writeFile(OUTPUT_PATH, `${JSON.stringify(videos, null, 2)}\n`, "utf8");
  console.log(`Synced ${videos.length} URI Badminton YouTube video(s).`);
} catch (error) {
  console.warn(`YouTube sync skipped; keeping the existing cache. ${error.message}`);
}
