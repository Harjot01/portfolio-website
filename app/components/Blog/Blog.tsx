import React from "react";
import Link from "next/link";
import BlogItem from "./BlogItem";
import SectionHeading from "../SectionHeading";
import { getBlogs } from "@/lib/fetchBlogs";
import { BlogsInterface } from "@/lib/interface";
import Reveal from "../Reveal";
const Blog = async () => {
  const blogsData: BlogsInterface[] = await getBlogs();
  return (
    <div className="flex flex-col gap-y-4">
      <Reveal delay={0.9}>
        <div className="flex justify-between">
          <SectionHeading title="Recent Blogs" />
          <Link
            href="/blog"
            className="text-gray-500 dark:text-gray-300 hover:text-textDark dark:hover:text-textLight transition duration-300 underline underline-offset-4"
          >
            {" "}
            (All){" "}
          </Link>
        </div>
      </Reveal>
      <Reveal delay={1}>
        <div className="flex flex-col gap-y-6">
          {" "}
          {blogsData.map((blog) => {
            return (
              blog.isFeaturedBlog && (
                <div key={blog._id}>
                  <BlogItem
                    title={blog?.title}
                    description={blog?.metaDesc}
                    slug={blog.slug.current}
                    publishDate={blog?.publishDate || ""}
                  />
                </div>
              )
            );
          })}
        </div>
      </Reveal>
    </div>
  );
};

export default Blog;
