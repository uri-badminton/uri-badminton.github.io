# URI Badminton website

The public website for URI Badminton, a student-run badminton community at the University of Rhode Island. It provides maintainable pages for practice information, automatically synced YouTube videos, and participation details without a backend or runtime services.

The intended public URL is <https://uri-badminton.github.io>.

## Technology

- Astro 7 with TypeScript
- Fully static HTML output
- Markdown content collections with validated frontmatter
- Plain CSS
- GitHub Actions and GitHub Pages

All npm dependencies are pinned in `package.json` and `package-lock.json`.

## Requirements

- Node.js 24
- npm

## Local development

```bash
npm install
npm run dev
```

Astro prints the local address. Open it in a browser; changes to source files are reflected while the server runs.

## Checks and production build

```bash
npm run check
npm run build
npm run preview
```

- `npm run check` validates Astro components, TypeScript, and content.
- `npm run build` checks the project and creates the static site in `dist/`.
- `npm run preview` serves the completed build locally.

CI uses `npm ci` for a clean, lockfile-based install.

## Repository structure

```text
src/
  components/            Shared header, footer, and cards
  content/
    announcements/       Inactive announcement archive
    videos/              Optional curated video Markdown files
  data/site.ts           Schedule, links, contact details, and shared copy
  data/youtube-videos.json  Build-time YouTube feed cache
  layouts/               Reusable page metadata and site shell
  pages/                 Public routes
  styles/global.css      Site-wide responsive design
public/                  Static images, favicon, and robots.txt
.github/workflows/       GitHub Pages deployment
```

## Updating common club information

Edit `src/data/site.ts`. This is the single source for:

- Practice day, time, location, and notes
- Contact email
- Instagram, YouTube, GroupMe, and interest form links
- Arrival and location guidance
- What-to-bring list
- Shared description and disclaimer
- Optional homepage club photo

Unconfigured URLs must remain `undefined`; the site hides their links automatically. Never use `"#"` as a placeholder and never invent club details.

The active GroupMe URL and its academic-year label are stored together in `site.contact`. Update both when a new annual group replaces the current `2025–2026 GroupMe`.

To add a real homepage photograph later, save it in `public/images/` and set `hero.imagePath` to its root-relative path, such as `"/images/club-practice.jpg"`.

## Inactive announcements

The announcement system remains in the repository for possible future use, but it is currently removed from navigation, excluded from the sitemap, and marked `noindex`. Do not expect new announcement files to appear in the public navigation.

## Adding an announcement

Create a dated Markdown file in `src/content/announcements/`:

```md
---
title: "Practice Schedule Update"
date: 2026-08-15
summary: "A short description shown on announcement cards."
pinned: false
draft: false
expiresAt:
---

Write the full announcement here.
```

Use a filename such as `2026-08-15-practice-update.md`. Dates are parsed consistently and announcements are sorted newest first.

- The current homepage does not display pinned announcements.
- Set `draft: true` to keep it out of the built site.
- Add `expiresAt: 2026-08-22` to stop a pinned announcement from appearing prominently after that date. The detail page remains available.

## YouTube video synchronization

The public URI Badminton channel is configured as <https://www.youtube.com/@uribadminton>. GitHub Actions reads its public YouTube RSS feed during every deployment and every six hours. Up to the 15 most recent uploads are rendered statically; the complete archive remains available on YouTube.

No API key is required. Run the synchronization locally with:

```bash
npm run sync:youtube
```

If YouTube is temporarily unavailable, the script keeps the existing checked-in cache so the website can still build.

## Adding a curated YouTube training video

Create a dated Markdown file in `src/content/videos/`:

```md
---
title: "Doubles Rotation Practice"
date: 2026-08-15
youtubeId: "REAL_ID_HERE"
summary: "What the group covered in this session."
featured: false
draft: false
topics:
  - doubles
  - positioning
---
```

Use the 11-character YouTube ID only, not a full URL or iframe. For a YouTube URL like `https://www.youtube.com/watch?v=abcdefghijk`, the ID is `abcdefghijk`. Invalid IDs fail the content check.

- Set `featured: true` to show the video on the homepage.
- Set `draft: true` to keep it out of the built site.
- Use a filename such as `2026-08-15-doubles-training.md`.

The site links to YouTube instead of loading an iframe automatically, reducing tracking and page weight.

## GitHub Pages deployment

`.github/workflows/deploy.yml` runs on pushes to `main` and can be started manually. It:

1. Installs exact dependencies with `npm ci`.
2. Runs the content and type check.
3. Builds the static site into `dist/`.
4. Uploads and deploys the Pages artifact with least-privilege permissions.

In the repository on GitHub, open **Settings → Pages** and select **GitHub Actions** as the publishing source. No base path is configured because this is intended to be an organization site at the domain root.

Do not commit `dist/`.

## Common troubleshooting

### A content check reports an invalid date

Use `YYYY-MM-DD`, and keep the date in the filename consistent with the frontmatter date.

### A video ID is rejected

Use only the 11-character ID from the YouTube URL. Do not paste the full URL, HTML, or an embed snippet.

### A social or contact button is missing

Buttons are intentionally hidden when their value in `src/data/site.ts` is `undefined`. Add a complete, valid URL or confirmed email.

### A page works locally but not on GitHub Pages

Use root-relative internal paths beginning with `/`, confirm `site` remains `https://uri-badminton.github.io` in `astro.config.mjs`, and do not add a repository-name base path.

### Deployment does not start

Confirm GitHub Pages uses **GitHub Actions** as its source, Actions are enabled, and the workflow is running from `main`.

For a browser-oriented editing walkthrough, see [CONTENT_GUIDE.md](CONTENT_GUIDE.md).
