import React from "react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeading title="Let's Connect" />
      <div className="mx-auto">
        <Link
          href="https://github.com/Harjot01/"
          target="_blank"
          className="text-primary hover:bg-primary hover:text-tertiary  cursor-pointer"
        >
          Github
        </Link>
        <span className="text-primary"> · </span>
        <Link
          href="https://www.linkedin.com/in/harjot01/"
          target="_blank"
          className="text-primary hover:bg-primary hover:text-tertiary  cursor-pointer"
        >
          Linkedin
        </Link>
        <span className="text-primary"> · </span>
        <Link
          href="https://www.instagram.com/harjot_s_r/"
          target="_blank"
          className="text-primary hover:bg-primary hover:text-tertiary  cursor-pointer"
        >
          Instagram
        </Link>
        <span className="text-primary"> · </span>
        <Link
          href="mailto:harjotsingh.5125@gmail.com"
          target="_blank"
          className="text-primary hover:bg-primary hover:text-tertiary  cursor-pointer"
        >
          Gmail{" "}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
