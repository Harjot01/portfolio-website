import React from "react";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { getAbout } from "@/lib/fetchAbout";
import { AboutInterface } from "@/lib/interface";

const Navbar = async () => {
  const aboutData: AboutInterface = await getAbout();
  const [_file, id, extension] = aboutData?.resume.asset._ref.split("-");
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
        <Breadcrumbs />

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
          href={`https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`}
        >
          ./resume.pdf
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
