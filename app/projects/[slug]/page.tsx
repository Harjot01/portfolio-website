import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { getSingleProject } from "@/lib/fetchProjects";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { RichTextComponents } from "@/app/components/RichTextComponents";
import { urlFor } from "@/lib/sanity";
import Reveal from "@/app/components/Reveal";
import { Inter } from "next/font/google"; // Import Inter and Lora

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: Define a CSS variable
});

export const revalidate = 30;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const projectData = await getSingleProject(params.slug);

  return {
    title: projectData?.title || "Project Post",
    description: projectData?.metaDesc || "A projec post on my website",
    openGraph: {
      title: projectData?.title || "Project Post",
      description: projectData?.metaDesc || "A project post on my website",
      images: [
        {
          url: projectData?.projectImg
            ? urlFor(projectData.projectImg).url()
            : "/default-image.png",
          width: 1200,
          height: 800,
          alt: projectData?.title || "Project Thumbnail Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: projectData?.title || "Project Post",
      description: projectData?.metaDesc || "A project post on my website",
      images: [
        {
          url: projectData?.projectImg
            ? urlFor(projectData.projectImg).url()
            : "/default-image.png",
          width: 1200,
          height: 800,
          alt: projectData?.title || "Project Thumbnail Image",
        },
      ],
    },
  };
}

const Page = async ({ params }: any) => {
  const projectData = await getSingleProject(params.slug);
  const date = projectData?.publishDate
    ? new Date(projectData.publishDate)
    : null;

  const formattedDate = date?.toLocaleDateString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className={`${inter.className} max-w-4xl mx-auto px-2 mt-12 py-12`}>
      {/* Article Header */}
      <header className="flex flex-col gap-y-4 mb-8">
        <Reveal delay={0.1}>
          {" "}
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {formattedDate} <span className="mx-2">•</span>{" "}
            {projectData?.estimatedRead} read
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          {" "}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {projectData?.title}
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          {" "}
          <div className="flex gap-x-2">
            <Link
              href={projectData?.liveLink || "#"}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 underline underline-offset-4"
            >
              Demo
            </Link>
            <span className="text-gray-500 dark:text-gray-400">/</span>
            <Link
              href={projectData?.githubLink || "#"}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 underline underline-offset-4"
            >
              Repo
            </Link>
          </div>
        </Reveal>
      </header>

      {/* Article Image */}
      <Reveal delay={0.4}>
        {" "}
        <div className="relative w-full h-auto my-8">
          {projectData?.projectImg && (
            <Image
              className="rounded-lg object-cover"
              src={urlFor(projectData?.projectImg).url()}
              alt={projectData?.title || "Project Thumbnail Image"}
              width={1200}
              height={800}
              layout="responsive"
            />
          )}
        </div>
        {/* Article Content */}
        <article className="prose prose-lg text-textDark dark:text-textLight dark:prose-invert max-w-none">
          {projectData?.content ? (
            <PortableText
              value={projectData.content}
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
