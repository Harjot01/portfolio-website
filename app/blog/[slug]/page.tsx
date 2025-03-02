import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { RichTextComponents } from "@/app/components/RichTextComponents";
import { urlFor } from "@/lib/sanity";
import { getSingleBlog } from "@/lib/fetchBlogs";
import Reveal from "@/app/components/Reveal";

const Page = async ({ params }: any) => {
  const blog = await getSingleBlog(params.slug);
  const date = blog?.publishDate ? new Date(blog.publishDate) : null;

  const formattedDate = date?.toLocaleDateString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 py-12">
      {/* Article Header */}
      <header className="flex flex-col gap-y-4 mb-8">
        <Reveal delay={0.1}>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {formattedDate} <span className="mx-2">•</span>{" "}
            {blog?.estimatedRead} read
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          {" "}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {blog?.title}
          </h1>
        </Reveal>
      </header>

      {/* Article Image */}
      <Reveal delay={0.3}>
        {" "}
        <div className="relative w-full h-auto my-8">
          {blog?.blogImg && (
            <Image
              className="rounded-lg object-cover"
              src={urlFor(blog?.blogImg).url()}
              alt={blog?.title || "Project Thumbnail Image"}
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </div>
        {/* Article Content */}
        <article className="prose prose-lg text-textDark dark:text-textLight dark:prose-invert max-w-none">
          {blog?.content ? (
            <PortableText
              value={blog.content}
              components={RichTextComponents}
            />
          ) : (
            <p>No content available</p>
          )}
        </article>{" "}
      </Reveal>
    </main>
  );
};

export default Page;
