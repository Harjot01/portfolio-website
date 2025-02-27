import React from "react";
import { FaArrowRight } from "react-icons/fa";
interface ProjectItemProps {
  title: string;
  description: string;
}
const ProjectItem: React.FC<ProjectItemProps> = ({ title, description }) => {
  return (
    <div className="flex justify-between items-center rounded-md py-2 px-4 w-full min-h-20 text-white transition duration-300 hover:opacity-70 border border-1 group">
      <div className="flex flex-col gap-y-2 justify-center">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <span className="inline-block transition-transform duration-300 group-hover:-rotate-45">
        <FaArrowRight />
      </span>
    </div>
  );
};

export default ProjectItem;
