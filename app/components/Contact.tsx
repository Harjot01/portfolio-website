import React from "react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import Reveal from "./Reveal";
import { getContact } from "@/lib/fetchContact";

const Contact = async () => {
  const contactData = await getContact();
  return (
    <div className="flex flex-col gap-y-4">
      <Reveal delay={1.1}>
        <SectionHeading title="Let's Connect" />
      </Reveal>{" "}
      <div className="mx-auto">
        <Reveal delay={1.2}>
          <Link
            href={contactData?.githubProfile || "#"}
            target="_blank"
            className="text-primary hover:bg-primary hover:text-textLight  cursor-pointer"
          >
            Github
          </Link>
          <span className="text-primary"> · </span>
          <Link
            href={contactData?.linkedinProfile || "#"}
            target="_blank"
            className="text-primary hover:bg-primary hover:text-textLight  cursor-pointer"
          >
            Linkedin
          </Link>
          <span className="text-primary"> · </span>
          <Link
            href={contactData?.instagramProfile || "#"}
            target="_blank"
            className="text-primary hover:bg-primary hover:text-textLight  cursor-pointer"
          >
            Instagram
          </Link>
          <span className="text-primary"> · </span>
          <Link
            href={contactData?.gmailLink || "#"}
            target="_blank"
            className="text-primary hover:bg-primary hover:text-textLight  cursor-pointer"
          >
            Gmail{" "}
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
