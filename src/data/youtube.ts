import rawVideos from "./youtube-videos.json";

export type YouTubeVideo = {
  title: string;
  published: Date;
  youtubeId: string;
};

type RawYouTubeVideo = {
  title: string;
  published: string;
  youtubeId: string;
};

const safeVideoId = /^[A-Za-z0-9_-]{11}$/;

export const youtubeVideos: YouTubeVideo[] = (rawVideos as RawYouTubeVideo[]).map((video) => {
  if (!video.title || !safeVideoId.test(video.youtubeId)) {
    throw new Error("Invalid video data in the YouTube sync cache.");
  }

  const published = new Date(video.published);
  if (Number.isNaN(published.getTime())) {
    throw new Error(`Invalid YouTube publication date for ${video.youtubeId}.`);
  }

  return {
    title: video.title,
    published,
    youtubeId: video.youtubeId,
  };
});
