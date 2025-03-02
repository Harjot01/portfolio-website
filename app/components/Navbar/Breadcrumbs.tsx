"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Breadcrumbs = () => {
  const pathname = usePathname(); // Get the current path
  const segments = pathname.split("/").filter((seg) => seg);

  return (
    segments.length > 0 && (
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
    )
  );
};

export default Breadcrumbs;
