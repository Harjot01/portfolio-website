import React from "react";
import SectionHeading from "../components/SectionHeading";
import BlogItem from "../components/Blog/BlogItem";
const BlogPage = () => {
  return (
    <div className="flex flex-col gap-y-4 h-screen">
      <SectionHeading title="All Blogs" />

      <div className="flex flex-col gap-y-6">
        {" "}
        <BlogItem
          title="Basic Linux Commands"
          description="Linux is the most important skill in 2025..."
        />
        <BlogItem
          title="Finally, a complete portfolio"
          description="This is the kind of portfolio I've always wanted to build..."
        />
      </div>
    </div>
  );
};

export default BlogPage;
