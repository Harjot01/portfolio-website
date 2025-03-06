import React from "react";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { RichTextComponents } from "@/app/components/RichTextComponents";
import { urlFor } from "@/lib/sanity";
import { getSingleBlog } from "@/lib/fetchBlogs";
import Reveal from "@/app/components/Reveal";
import { Inter } from "next/font/google"; // Import Inter and Lora

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: Define a CSS variable
});

export const revalidate = 30;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blogData = await getSingleBlog(params.slug);

  return {
    title: blogData?.title || "Blog Post",
    description: blogData?.metaDesc || "A blog post on my website",
    openGraph: {
      title: blogData?.title || "Blog Post",
      description: blogData?.metaDesc || "A blog post on my website",
      images: [
        {
          url: blogData?.blogImg
            ? urlFor(blogData.blogImg).url()
            : "/default-image.png",
          width: 1200,
          height: 800,
          alt: blogData?.title || "Blog Thumbnail Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogData?.title || "Blog Post",
      description: blogData?.metaDesc || "A blog post on my website",
      images: [
        {
          url: blogData?.blogImg
            ? urlFor(blogData.blogImg).url()
            : "/default-image.png",
          width: 1200,
          height: 800,
          alt: blogData?.title || "Blog Thumbnail Image",
        },
      ],
    },
  };
}

const Page = async ({ params }: any) => {
  const blogData = await getSingleBlog(params.slug);
  const date = blogData?.publishDate ? new Date(blogData.publishDate) : null;

  const formattedDate = date?.toLocaleDateString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className={`${inter.className} max-w-4xl mx-auto mt-12 py-12`}>
      {/* Article Header */}
      <header className="flex flex-col gap-y-4 mb-8">
        <Reveal delay={0.1}>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {formattedDate} <span className="mx-2">•</span>{" "}
            {blogData?.estimatedRead} read
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          {" "}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {blogData?.title}
          </h1>
        </Reveal>
      </header>

      {/* Article Image */}
      <Reveal delay={0.3}>
        {" "}
        <div className="relative w-full h-auto my-8">
          {blogData?.blogImg && (
            <Image
              className="rounded-lg object-cover"
              src={urlFor(blogData?.blogImg).url()}
              alt={blogData?.title || "Project Thumbnail Image"}
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </div>
        {/* Article Content */}
        <article className="prose prose-lg text-textDark dark:text-textLight dark:prose-invert max-w-none">
          {blogData?.content ? (
            <PortableText
              value={blogData.content}
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
