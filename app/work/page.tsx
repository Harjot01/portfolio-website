import React from "react";
import SectionHeading from "../components/SectionHeading";
import Link from "next/link";
const WorkPage = () => {
  return (
    <div className="flex flex-col gap-y-4 h-screen">
      <SectionHeading title="Work experience" />

      <div className="flex flex-col ">
        <span className="text-sm text-gray-300">Jan 2023 — May 2023 </span>
        <h1 className="font-bold text-white">Pixis Media Solutions</h1>
        <span className="text-sm text-gray-300">Frontend Intern </span>
      </div>
      <div>
        <p className="text-white">
          This role required expertise in Next.js, Tailwind CSS, Node.js, and
          Sanity.io CMS. I collaborated with cross-functional teams to design
          and implement user interfaces while maintaining Pixis Media’s web
          presence.
        </p>
      </div>
    </div>
  );
};

export default WorkPage;
