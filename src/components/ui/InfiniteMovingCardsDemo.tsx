import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinity-card-scroll";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-[#030917] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
    "Realistic AI, insightful feedback. Boosted my confidence for interviews!",
    name: "Dhruv",
    title: "A Tale of Two Cities",
  },
  {
    quote:
    "Incredible tool! The AI interviewer feels real, and the feedback is spot-on. Highly recommend!Improved my skills immensely, I also got a lot of confidense through them, must have in a students phone.",
    name: "Mitocondria",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Gautam",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Game-changer! Lifelike AI interviewer, detailed feedback. Must-have for interview prep!.Just a need of the hour i feel i have is amazing",
    name: "Arpit",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Wow! Lifesaver for interviews. Realistic AI, detailed feedback. Highly recommend!. ",
    name: "Exception73",
    title: "Moby-Dick",
  },
  {
    quote:
    "The AI interviewer is extremely helpful and provides great feedback. It's been a game changer for my interview prep!",
    name: "Samantha",
    title: "The Great Gatsby",
  },
  {
    quote:
    "This tool has been a lifesaver for my interview prep. The AI interviewer is so realistic and provides excellent feedback.",
    name: "Lola",
    title: "Bram Stoker's Dracula",
  },
  {
    quote: "All that we see or seem is just a dream within a dream.",
    name: "Jasleen",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "The AI interviewer is so realistic and provides detailed feedback. It's a must-have for any student preparing for interviews.",
    name: "Rauna",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "This tool has been a game changer for my interview prep. The AI interviewer is so realistic and provides excellent feedback.",
    name: "Jayesh",
    title: "Moby-Dick",
  },
];
