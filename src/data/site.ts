export type PracticeSession = {
  label: string;
  day: string;
  time: string;
  location: string;
  note: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  repositoryUrl: string;
  hero: {
    heading: string;
    description: string;
    imagePath?: string;
    imageAlt?: string;
  };
  practiceSchedule: PracticeSession[];
  contact: {
    email?: string;
    instagramUrl?: string;
    youtubeChannelUrl?: string;
    groupMeUrl?: string;
    groupMeLabel?: string;
    interestFormUrl?: string;
  };
  locationGuidance: string;
  arrivalGuidance: string;
  cancellationPolicy: string;
  whatToBring: string[];
  clubPolicies: {
    loanerRacketsAvailable: boolean;
    shuttlecocksProvided: boolean;
  };
  disclaimer: string;
};

const optionalUrl = (value?: string): string | undefined => {
  if (!value) return undefined;
  const parsed = new URL(value);
  if (!["https:", "http:"].includes(parsed.protocol)) {
    throw new Error(`Unsupported public URL protocol: ${parsed.protocol}`);
  }
  return parsed.toString();
};

export const site: SiteConfig = {
  name: "URI Badminton Club",
  description:
    "URI Badminton Club is a student-run community at the University of Rhode Island, welcoming students of all experience levels.",
  url: "https://uri-badminton.github.io",
  repositoryUrl: "https://github.com/uri-badminton/uri-badminton.github.io",
  hero: {
    heading: "Play. Improve. Connect.",
    description:
      "Meet fellow students, build your game, and enjoy time on court. Beginners, experienced players, and everyone in between are welcome.",
    imagePath: "/og.png",
    imageAlt: "URI Badminton Club — Play. Improve. Connect.",
  },
  practiceSchedule: [
    {
      label: "Weekly Practice",
      day: "Wednesdays (starting 7/29)",
      time: "18:00–19:30",
      location: "Mackal Field House",
      note: "Summer break schedule: every Wednesday at the same time.",
    },
  ],
  contact: {
    email: undefined,
    instagramUrl: optionalUrl("https://www.instagram.com/uri_badminton/"),
    youtubeChannelUrl: optionalUrl("https://www.youtube.com/@uribadminton"),
    groupMeUrl: optionalUrl("https://groupme.com/join_group/116278232/4L4vFwKx"),
    groupMeLabel: "2026–2027 GroupMe",
    interestFormUrl: optionalUrl(),
  },
  locationGuidance: "Practices are currently held at Mackal Field House.",
  arrivalGuidance:
    "Please arrive a few minutes early once practice details are posted so the group can organize courts efficiently.",
  cancellationPolicy:
    "Cancellations and schedule changes will be posted in Announcements. Check the site before traveling to practice.",
  whatToBring: [
    "Comfortable athletic clothing",
    "Comfortable, non-marking indoor court shoes",
  ],
  clubPolicies: {
    loanerRacketsAvailable: true,
    shuttlecocksProvided: true,
  },
  disclaimer:
    "URI Badminton Club is a student-run badminton community at the University of Rhode Island. This website is independently maintained by student organizers.",
};
