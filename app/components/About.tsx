import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeading title="Whoami" />
      <div className="flex flex-col gap-y-6 sm:flex-row gap-x-6">
        <Image
          src="/author.jpg"
          alt="authorImg"
          width={100}
          height={100}
          className="w-40 h-40 rounded-lg hidden sm:flex"
        />
        <div className="flex flex-col text-textDark dark:text-textLight justify-between">
          <h1 className="">
            Hi, I am <span className="font-bold">Harjot Singh,</span>
          </h1>
          <div className="flex flex-col gap-y-3">
            <p>
              Systems Engineer @{" "}
              <span className="text-primary hover:bg-primary hover:text-white cursor-pointer">
                IBM
              </span>{" "}
            </p>
            <p>
              Ex-Frontend Developer @{" "}
              <span className="text-primary hover:bg-primary hover:text-white cursor-pointer">
                Pixis Media Solutions
              </span>{" "}
            </p>
            <p>
              CSE Graduate @{" "}
              <span className="text-primary hover:bg-primary hover:text-white cursor-pointer">
                Chandigarh University
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
