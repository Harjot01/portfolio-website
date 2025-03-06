"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

interface NavbarProps {
  resumeLink: string;
}

const Navbar: React.FC<NavbarProps> = ({ resumeLink }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 right-0 w-full z-50 bg-white dark:bg-background transition-shadow ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="flex  max-w-[70.5rem] mx-auto text-sm md:text-base md:flex-row gap-y-3 flex-col justify-between py-3 md:py-6 px-4 ">
          <div className="flex gap-x-1 items-center">
            <h1 className="font-bold">
              <Link
                href="/"
                className="text-primary hover:bg-primary hover:text-textLight"
              >
                harjotsingh
              </Link>
              <span className="text-textDark dark:text-textLight font-medium">
                :~#
              </span>
            </h1>

            {/* Dynamic Breadcrumb Links */}
            <Breadcrumbs />

            <span className="w-2 h-4 bg-primary inline-block animate-blink"></span>
          </div>
          <div className="flex flex-row gap-8 text-gray-500 dark:text-gray-300">
            <Link
              className="hover:text-textDark dark:hover:text-textLight transition duration-300"
              href="/projects"
            >
              ./projects
            </Link>

            <Link
              className="hover:text-textDark dark:hover:text-textLight transition duration-300"
              href="/blog"
            >
              ./blog
            </Link>
            <Link
              className="hover:text-textDark dark:hover:text-textLight transition duration-300"
              href={resumeLink}
            >
              ./resume.pdf
            </Link>
          </div>
        </div>
      </nav>
      {/* Prevent content from being hidden under navbar */}
      <div className="pt-[80px]"></div>
    </>
  );
};

export default Navbar;
