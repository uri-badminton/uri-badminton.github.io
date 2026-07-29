import { site } from "./site";

export interface FaqSource {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "first-visit" | "fitness" | "equipment" | "social";
  sources?: FaqSource[];
}

const equipmentAnswer =
  site.clubPolicies.loanerRacketsAvailable && site.clubPolicies.shuttlecocksProvided
    ? "No. We provide rackets and shuttlecocks. Wear comfortable athletic clothes and non-marking indoor court shoes—that’s enough to get started. Try the sport before buying anything."
    : "Wear comfortable athletic clothes and non-marking indoor court shoes. Check with the club before practice if you need to borrow equipment.";

export const beginnerFaqs: FaqItem[] = [
  {
    question: "I’ve never played. Will I slow everyone down?",
    answer:
      "No. Everyone starts by missing a shuttle that looked suspiciously easy to hit. Your first goal is simply to send it over the net; rules, footwork, and technique can come one rally at a time.",
    category: "first-visit",
  },
  {
    question: "Do I need to be athletic or in great shape?",
    answer:
      "Not at all. Start with relaxed rallies or doubles and move at a pace that feels comfortable. Badminton can be light and social or fast and intense—sometimes within the same five minutes. Your cardio can catch up later.",
    category: "fitness",
  },
  {
    question: "Can I come by myself?",
    answer:
      "Absolutely. Doubles makes badminton naturally social, and showing up solo is completely normal. You do not need to bring a partner or assemble a team first. The shuttle is small; the social commitment is also small.",
    category: "social",
  },
  {
    question: "Do I need my own racket or shuttlecocks?",
    answer: equipmentAnswer,
    category: "equipment",
  },
  {
    question: "Is badminton actually a good workout?",
    answer:
      "Yes—casual badminton takes about as much effort as a very brisk treadmill walk. Fast competitive play can feel more like running around 5.5 mph. For a 154-pound player, that works out to roughly 400–650 calories an hour, depending on pace and breaks. Cardio, but with rallies instead of a belt.",
    category: "fitness",
    sources: [
      { label: "Badminton estimates", href: "https://pacompendium.com/sports/" },
      { label: "Walking comparison", href: "https://pacompendium.com/walking/" },
      { label: "Running comparison", href: "https://pacompendium.com/running/" },
    ],
  },
];
