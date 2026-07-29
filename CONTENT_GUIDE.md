# URI Badminton content guide

This guide is for student organizers who want to update the website using only GitHub in a browser.

## Before editing

- Publish only confirmed information.
- Never add personal information without clear permission.
- Keep the filename date and the date inside the file consistent.
- Use a new branch and pull request so another organizer can review the update.

## Inactive announcement archive

Announcements are currently hidden from the website navigation and search engines. Keep the existing files for possible future use, but routine updates should focus on the schedule, Join Us information, and the YouTube channel.

## Add an announcement in your browser

1. Open `src/content/announcements` in the GitHub repository.
2. Select **Add file**.
3. Select **Create new file**.
4. Open an existing announcement in another tab and copy its frontmatter structure.
5. Change the title, date, summary, flags, and body.
6. Name the file with a date and short lowercase description, for example `2026-08-15-practice-update.md`.
7. In the commit area, choose to commit through a **new branch**.
8. Open a pull request into `main`.
9. Merge only after reviewing the changes and passing checks.
10. Verify the deployed website after the Pages workflow finishes.

Example:

```md
---
title: "Practice Schedule Update"
date: 2026-08-15
summary: "A concise summary for the announcement list."
pinned: false
draft: false
expiresAt:
---

Add the complete, confirmed update here.
```

The current homepage does not show pinned announcements. This field is retained only for possible future use.

Set `draft: true` while preparing content. Drafts do not appear on the published site.

## Publish a training video

Upload the video to <https://www.youtube.com/@uribadminton>. The website checks the channel feed during deployment and every six hours, so no website file normally needs to be edited. YouTube’s public feed supplies the latest 15 uploads; visitors can use the channel link for the full archive.

## Add a curated training video file

1. Open `src/content/videos` in the GitHub repository.
2. Select **Add file**.
3. Select **Create new file**.
4. Copy the structure below.
5. Replace the details with information from a real club video.
6. Use a filename such as `2026-08-15-doubles-training.md`.
7. Commit through a new branch.
8. Open a pull request.
9. Merge after the checks pass.
10. Verify the Training Videos page after deployment.

```md
---
title: "Doubles Training"
date: 2026-08-15
youtubeId: "abcdefghijk"
summary: "A concise explanation of the session."
featured: false
draft: false
topics:
  - doubles
  - positioning
---
```

The YouTube ID is the 11-character value after `v=` in a normal YouTube link. Do not paste a full link, iframe, or HTML.

Set `featured: true` to include the video on the homepage. Set `draft: true` to keep it unpublished.

## Update practice or contact information

Open `src/data/site.ts` and edit only the relevant values:

- `practiceSchedule` for days, times, locations, and notes
- `contact` for email, Instagram, YouTube, and an interest form
- `locationGuidance` and `arrivalGuidance`
- `whatToBring`

More than one weekly session can be added by copying the object inside `practiceSchedule`. Do not edit page components to update schedule details.

Leave unavailable links as `undefined`. Do not enter `#`, made-up usernames, placeholder emails, or unconfirmed locations.

## After every update

Review spelling, dates, links, and whether the information is safe to publish. Confirm automated checks pass in the pull request, merge it, and then verify the public page at <https://uri-badminton.github.io>.
