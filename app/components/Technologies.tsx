"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

interface TechnologiesProps {
  techData: string[];
}

const Technologies: React.FC<TechnologiesProps> = ({ techData }) => {
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
      className="max-w-contentContainer flex flex-col gap-y-4 mx-auto"
    >
      <SectionHeading title="I Know" />
      <ul className="flex flex-wrap justify-center gap-4 ">
        {techData.map((tech) => (
          <li
            className={`borderBlack rounded-full text-md px-5 py-1 ${
              tech === highlightedSkill
                ? "bg-primary text-textLight dark:bg-primary duration-700"
                : "bg-primary/10 dark:bg-white/10 text-textDark/80 dark:text-white/80"
            }`}
            key={tech}
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
