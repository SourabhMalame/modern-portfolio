"use client";
import { TypewriterEffect } from "./ui/Typewriter-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "awesome",
    },
    {
      text: " Web_apps",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with",
    },
    {
      text: "Me",
    },
    {
      text: "and",
    },
    {
      text: "transform",
    },
    {
      text: "your",
    },
    {
      text: "ideas_into_reality_!",
      className: "text-green-500 dark:text-green-500",
    },
    // Build awesome apps with me and transform your ideas into reality!
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <a href="mailto:sourabhmalame@gmail.com">
          <MagicButton
            title="Connect With Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
}
