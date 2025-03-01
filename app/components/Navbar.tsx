"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const segments = pathname.split("/").filter((seg) => seg);

  return (
    <nav className="flex md:flex-row gap-y-4 flex-col justify-between py-6 ">
      <div className="flex gap-x-1 items-center ">
        <h1 className="font-bold">
          <Link
            href="/"
            className="text-primary hover:bg-primary hover:text-textLight "
          >
            harjotsingh
          </Link>
          <span className="text-textDark dark:text-textLight font-medium">
            :~#
          </span>
        </h1>

        {/* Dynamic Breadcrumb Links */}
        {segments.length > 0 && (
          <h1 className="flex gap-x-0.5">
            {segments.map((segment, index) => {
              const href = "/" + segments.slice(0, index + 1).join("/"); // Construct URL
              return (
                <React.Fragment key={href}>
                  <Link
                    href={href}
                    className="text-primary hover:bg-primary hover:text-textLight"
                  >
                    {segment}
                  </Link>
                  <span className="text-textDark dark:text-textLight">/</span>
                </React.Fragment>
              );
            })}
          </h1>
        )}

        <span className="w-2 h-4 bg-primary inline-block animate-blink"></span>
      </div>
      <div className="flex flex-row gap-8 text-gray-500 dark:text-gray-300 ">
        <Link
          className="hover:text-textDark dark:hover:text-textLight transition duration-300 "
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
          href="./resume.pdf"
        >
          ./resume.pdf
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
