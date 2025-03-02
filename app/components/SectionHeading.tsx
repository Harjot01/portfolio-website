import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <h1 className="text-primary text-base font-bold group w-full ">
      {" "}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        ❯
      </span>{" "}
      {title}
    </h1>
  );
};

export default SectionHeading;
