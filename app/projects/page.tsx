import React from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectItem from "../components/Projects/ProjectItem";
const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-y-4 h-screen">
      <SectionHeading title="All Projects" />
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

export default ProjectsPage;
