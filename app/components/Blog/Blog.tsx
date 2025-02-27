import React from "react";
import Link from "next/link";
import BlogItem from "./BlogItem";
import SectionHeading from "../SectionHeading";
const Blog = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <SectionHeading title="Recent blogs" />
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
          title="Finally, a complete portfolio"
          description="This is the kind of portfolio that I've always wanted to build"
        />
      </div>
    </div>
  );
};

export default Blog;
