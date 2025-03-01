import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
interface BlogItemProps {
  title: string;
  description: string;
}
const BlogItem: React.FC<BlogItemProps> = ({ title, description }) => {
  return (
    <Link href="">
      <div className="flex justify-between items-center rounded-md py-2 px-4 w-full min-h-20 bg-primary/5 dark:bg-white/5 text-textDark dark:text-textLight transition duration-300 hover:opacity-70 border border-1 group">
        <div className="flex flex-col gap-y-2 justify-center">
          <div className="flex items-center gap-x-2">
            <h1 className="font-bold">{title}</h1>
            <span>·</span>
            <span className="text-xs md:text-sm font-bold text-secondary">
              March 1, 2025
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>
        <span className="inline-block transition-transform duration-300 group-hover:-rotate-45">
          <FaArrowRight />
        </span>
      </div>
    </Link>
  );
};

export default BlogItem;
