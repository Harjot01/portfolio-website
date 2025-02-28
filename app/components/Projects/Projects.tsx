import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import SectionHeading from "../SectionHeading";
const Projects = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-2 items-center justify-between">
        <SectionHeading title="Featured Projects" />
        <Link
          href="/projects"
          className="text-gray-300 hover:text-tertiary transition duration-300 underline underline-offset-4"
        >
          {" "}
          (All)
        </Link>{" "}
      </div>
      <div className="flex flex-col gap-y-6">
        {" "}
        <ProjectItem
          title="Online Compiler"
          description="Built an online compiler using react and pison api"
        />
        <ProjectItem
          title="harjot.tech"
          description="Next.js personal portfolio website"
        />
        <ProjectItem
          title="Anicode"
          description="Learn coding with the help of animations"
        />
      </div>
    </div>
  );
};

export default Projects;
