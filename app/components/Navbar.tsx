import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex md:flex-row gap-y-4 flex-col justify-between py-6 ">
      <div className="flex gap-x-2 items-center ">
        <h1 className="font-bold">
          <a
            href="/"
            className="text-primary hover:bg-primary hover:text-white transition duration-300"
          >
            harjotsingh
          </a>
          <span className="text-tertiary">:~#</span>
        </h1>

        <h1 className="font-bold">
          <a
            href="/projects"
            className="text-primary hover:bg-primary hover:text-white transition duration-300"
          >
            projects/
          </a>
        </h1>
        <span className="w-2 h-4 bg-primary inline-block animate-blink"></span>
      </div>
      <div className="flex flex-row gap-8 text-gray-300 ">
        <Link
          className="hover:text-tertiary transition duration-300 "
          href="/projects"
        >
          ./projects
        </Link>
        <Link
          className="hover:text-tertiary transition duration-300 "
          href="/timeline"
        >
          ./timeline
        </Link>

        <Link
          className="hover:text-tertiary transition duration-300 "
          href="/blog"
        >
          ./blog
        </Link>
        <Link
          className="hover:text-tertiary transition duration-300 "
          href="./resume.pdf"
        >
          ./resume.pdf
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
