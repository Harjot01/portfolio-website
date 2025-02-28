"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
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
      <SectionHeading title="I Know" />
      <ul className="flex flex-wrap justify-center gap-4 text-gray-800">
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
