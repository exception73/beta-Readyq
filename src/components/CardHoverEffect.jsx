import { HoverEffect } from "../components/Card-hover-effect.tsx";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Tailored to Perfection",
    description:
      "Ensuring a personalized experience that reflects your unique skills and aspirations. Get ready to shine like never before!",
  },
  {
    title: "Report Cards",
    description:
      "Dive deep into your performance with our insightful report cards after each interview. Understand your strengths, pinpoint areas for improvement.",
  
  },
  {
    title: "24/7 Availability",
    description:
      "Don't let time zones or schedules limit your potential. With our platform we've got you covered.",
  },
  {
    title: "Total Customizability",
    description:
      "Take control of your interview , Adjust the difficulty level, even tailor the interview format to match your preferences. ",
  },
];
