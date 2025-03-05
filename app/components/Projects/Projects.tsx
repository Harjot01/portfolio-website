import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import SectionHeading from "../SectionHeading";
import { getProjects } from "@/lib/fetchProjects";
import { ProjectsInterface } from "@/lib/interface";
import Reveal from "../Reveal";
const Projects = async () => {
  const projectsData: ProjectsInterface[] = await getProjects();
  return (
    <div className="flex flex-col gap-y-4">
      <Reveal delay={0.6}>
        <div className="flex gap-x-2 items-center justify-between">
          <SectionHeading title="Featured Projects" />
          <Link
            href="/projects"
            className="text-gray-500 hover:text-textDark dark:text-gray-300 dark:hover:text-textLight transition duration-300 underline underline-offset-4"
          >
            {" "}
            (All)
          </Link>{" "}
        </div>
      </Reveal>
      <Reveal delay={0.7}>
        {" "}
        <div className="flex flex-col gap-y-6">
          {" "}
          {projectsData.map((project) => {
            return (
              project.isFeaturedProject && (
                <div key={project._id}>
                  <ProjectItem
                    title={project.title}
                    description={project.metaDesc}
                    slug={project.slug.current}
                  />
                </div>
              )
            );
          })}
        </div>
      </Reveal>
    </div>
  );
};

export default Projects;
