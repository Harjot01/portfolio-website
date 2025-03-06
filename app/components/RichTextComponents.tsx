import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableTextComponents } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-auto my-6">
          <Image
            className="object-cover rounded-lg"
            src={urlFor(value).url()}
            alt={value.alt || "Project Thumbnail Image"}
            width={1200} // Set a default width
            height={800} // Set a default height
            layout="responsive"
          />
        </div>
      );
    },
    code: ({ value }) => {
      return (
        <SyntaxHighlighter
          language={value.language || "javascript"}
          style={gruvboxDark}
          wrapLongLines
          className="rounded-lg my-4"
        >
          {value.code}
        </SyntaxHighlighter>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-6 py-3 list-disc space-y-3 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="ml-6 py-3 list-decimal space-y-3 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl md:text-3xl font-bold my-6 dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-semibold my-5 dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-bold my-4 dark:text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base md:text-lg font-bold my-3 dark:text-white">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-sm md:text-base my-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-8 italic text-gray-600 dark:text-gray-400 text-sm md:text-base">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "";
      const rel = !href.startsWith("/") ? "noreferrer noopener" : undefined;

      return (
        <Link
          href={href}
          rel={rel}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 underline"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold dark:text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic dark:text-white">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded-md font-mono text-sm dark:text-gray-200">
        {children}
      </code>
    ),
  },
};
