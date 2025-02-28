import React from "react";
import Link from "next/link";
import BlogItem from "./BlogItem";
import SectionHeading from "../SectionHeading";
const Blog = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <SectionHeading title="Recent Blogs" />
        <Link
          href="/blog"
          className="text-gray-300 hover:text-tertiary transition duration-300 underline underline-offset-4"
        >
          {" "}
          (All){" "}
        </Link>
      </div>
      <div className="flex flex-col gap-y-6">
        {" "}
        <BlogItem
          title="Basic Linux Commands"
          description="Linux is the most important skill in 2025..."
        />
      </div>
    </div>
  );
};

export default Blog;
