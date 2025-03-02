import React from "react";
import SectionHeading from "../components/SectionHeading";
import BlogItem from "../components/Blog/BlogItem";
import { BlogsInterface } from "@/lib/interface";
import { getBlogs } from "@/lib/fetchBlogs";
import Reveal from "../components/Reveal";
const BlogPage = async () => {
  const blogs: BlogsInterface[] = await getBlogs();
  return (
    <div className="flex flex-col gap-y-4 mt-12 h-screen">
      <Reveal delay={0.1}>
        <SectionHeading title="All Blogs" />
      </Reveal>
      <Reveal delay={0.2}>
        {" "}
        <div className="flex flex-col gap-y-6">
          {" "}
          {blogs.map((blog) => {
            return (
              <div key={blog._id}>
                <BlogItem
                  title={blog?.title}
                  description={blog?.metaDesc}
                  slug={blog.slug.current}
                  publishDate={blog?.publishDate || ""}
                />
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
};

export default BlogPage;
