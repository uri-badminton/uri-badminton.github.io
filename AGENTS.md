# Repository rules

- Keep the site fully static with Astro static output.
- Do not add a backend, database, authentication, secrets, runtime API calls, or paid services without explicit approval.
- Store practice, contact, and social information in `src/data/site.ts`.
- Store announcements in `src/content/announcements/` and videos in `src/content/videos/`.
- Never invent club dates, times, locations, contact addresses, social usernames, or YouTube IDs.
- Do not use the official University of Rhode Island logo without explicit approval and a supplied, authorized asset.
- Treat the supplied URI Badminton club mark as a distinct student-community asset; do not present it as an official university identifier.
- Preserve semantic HTML, keyboard support, visible focus states, contrast, reduced-motion support, and responsive behavior.
- Run `npm run check` and `npm run build` before committing.
- Avoid unnecessary dependencies and client-side JavaScript.
- Keep content updates straightforward for future student organizers.
- Never expose personal information in the public repository.
- Preserve the root-domain Astro configuration for `https://uri-badminton.github.io`; do not add a project base path.

## Code review rules

Reviewers should flag:

- Broken root-relative links or GitHub Pages paths
- Invented club information
- Accessibility regressions
- External links rendered when their configuration is empty
- Draft content appearing in production
- Expired announcements remaining in the prominent homepage position
- YouTube embeds or links using malformed or unsafe IDs
- Full YouTube URLs or raw iframe markup stored in frontmatter
- Unnecessary runtime services, scripts, or dependencies
