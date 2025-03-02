import React from "react";
import Link from "next/link";
import { getSingleProject } from "@/lib/fetchProjects";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { RichTextComponents } from "@/app/components/RichTextComponents";
import { urlFor } from "@/lib/sanity";
import Reveal from "@/app/components/Reveal";

const Page = async ({ params }: any) => {
  const project = await getSingleProject(params.slug);
  const date = project?.publishDate ? new Date(project.publishDate) : null;

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
          {" "}
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {formattedDate} <span className="mx-2">•</span>{" "}
            {project?.estimatedRead} read
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          {" "}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {project?.title}
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          {" "}
          <div className="flex gap-x-2">
            <Link
              href={project?.liveLink || "#"}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 underline underline-offset-4"
            >
              Demo
            </Link>
            <span className="text-gray-500 dark:text-gray-400">/</span>
            <Link
              href={project?.githubLink || "#"}
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
          {project?.projectImg && (
            <Image
              className="rounded-lg object-cover"
              src={urlFor(project?.projectImg).url()}
              alt={project?.title || "Project Thumbnail Image"}
              width={1200}
              height={800}
              layout="responsive"
            />
          )}
        </div>
        {/* Article Content */}
        <article className="prose prose-lg text-textDark dark:text-textLight dark:prose-invert max-w-none">
          {project?.content ? (
            <PortableText
              value={project.content}
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
