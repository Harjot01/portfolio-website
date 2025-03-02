import React from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectItem from "../components/Projects/ProjectItem";
import { getProjects } from "@/lib/fetchProjects";
import { ProjectsInterface } from "@/lib/interface";
import Reveal from "../components/Reveal";
const ProjectsPage = async () => {
  const projects: ProjectsInterface[] = await getProjects();
  return (
    <div className="flex flex-col mt-12 gap-y-4 h-screen">
      <Reveal delay={0.1}>
        <SectionHeading title="All Projects" />
      </Reveal>
      <Reveal delay={0.2}>
        {" "}
        <div className="flex flex-col gap-y-6">
          {" "}
          {projects.map((project) => {
            return (
              <div key={project._id}>
                <ProjectItem
                  title={project.title}
                  description={project.metaDesc}
                  slug={project.slug.current}
                />
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
};

export default ProjectsPage;
