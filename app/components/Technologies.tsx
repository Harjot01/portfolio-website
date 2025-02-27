"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Technologies = ({ techData }: any) => {
  const [highlightedSkill, setHighlightedSkill] = useState<string>("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        const randomSkill =
          techData[Math.floor(Math.random() * techData.length)];
        setHighlightedSkill(randomSkill);
      }, 1500);

      return () => clearInterval(interval);
    });

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="tech"
      className="max-w-contentContainer flex flex-col gap-y-4  mx-auto"
    >
      <SectionHeading title="I KNOW" />
      <ul className="flex flex-wrap justify-center gap-4 text-lg  text-gray-800">
        {techData.map((tech: string) => {
          return (
            <li
              className={`  borderBlack rounded-full text-md px-5 py-1  ${tech === highlightedSkill ? "bg-primary text-white dark:bg-textDarkGreen duration-700" : "dark:bg-white/10 dark:text-white/80 bg-lightMode"}`}
              key={tech}
            >
              {tech}
            </li>
          );
        })}
      </ul>{" "}
    </section>
  );
};

export default Technologies;
