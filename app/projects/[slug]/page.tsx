import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <main className="flex flex-col gap-y-12">
      <div className="flex flex-col gap-y-3 text-textDark dark:text-textLight">
        <p className="text-gray-500 text-sm dark:text-gray-300">
          March 1, 2025 <span>• 1 min read</span>
        </p>
        <h1 className="font-bold text-xl">Online Compiler using React.js</h1>
        <p className="flex gap-x-2">
          <Link href="" className="underline underline-offset-4">
            demo
          </Link>
          <span>/</span>

          <Link href="" className="underline underline-offset-4">
            repo
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-12 text-textDark dark:text-textLight">
        <p className="text-pretty leading-7">
          I’ve always wanted to build a minimal portfolio, which has all the
          basic details about me, such as my projects, work experience, a little
          bio, social links, etc. But since aeons, I’ve felt it was too much of
          a hassle to build such functionality, because I’d either have to use a
          CMS or build a backend myself, and I am always inclined towards the
          idea of building a custom API because it gives me the freedom to do
          whatever the hell I want! But, but, but, the problem with that is,
          I’ll need to roll out a complete authentication system, set up a
          database, along with an admin portal on the frontend with support for
          a RTE, etc. And it is hard to find time for a project which you’ll get
          bored of eventually. I once built this portfolio during the second
          year of my college, but eventually got bored of its design too,
          because at that time, I liked to have my portfolio all colorful and
          popping, but now I don’t fancy it anymore. Plus it was just statiic
          frontend!
        </p>
        <img src="/author.jpg" alt="" className="w-1/2" />
      </div>
    </main>
  );
};

export default page;
