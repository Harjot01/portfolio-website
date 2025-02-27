import React from "react";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeading title="Let's connect" />
      <div className="flex flex-col gap-y-12 items-center">
        <p className="text-white">
          If you want to get in touch with me about something or just to say hi,
          reach out on social media or send me an email.{" "}
        </p>
        <div>
          <span className="text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
            Github
          </span>
          <span className="text-primary"> · </span>
          <span className="text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
            Linkedin
          </span>
          <span className="text-primary"> · </span>
          <span className="text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
            Twitter{" "}
          </span>
          <span className="text-primary"> · </span>
          <span className="text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
            Instagram
          </span>
          <span className="text-primary"> · </span>
          <span className="text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
            Gmail{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
