import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeading title="Whoami" />
      <div className="flex flex-col gap-y-6 lg:flex-row gap-x-4">
        <Image
          src="/author.jpg"
          alt="authorImg"
          width={100}
          height={100}
          className="w-64 h-32 rounded-lg"
        />
        <p className="flex flex-col gap-y-2 text-gray-300 text-pretty">
          <span className="text-tertiary"> Hi, I am Harjot Singh </span> A
          Computer Science undergraduate student at Chandigarh University, with
          a keen interest in web & game development. I have undertaken several
          projects in these domains, showcasing my enthusiasm for building
          innovative solutions. Currently, my main emphasis is on solving Data
          Structures & Algorithms problems on platforms like Leetcode and
          Codeforces.
        </p>
      </div>
    </div>
  );
};

export default About;
