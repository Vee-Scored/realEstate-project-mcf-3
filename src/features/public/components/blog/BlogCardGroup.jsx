import React from "react";
import BlogCategoryBtnGroup from "./BlogCategoryBtnGroup";
import { blogs } from "../../../../components/blog/constant";
import BlogCard from "../../../../components/blog/BlogCard";

const BlogCardGroup = () => {
  const pageLimits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className=" min-h-dvh mb-10">
      <BlogCategoryBtnGroup />
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 mb-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className=" flex items-center gap-2 w-full justify-center">
        <label
          htmlFor="countries"
          className="block text-neutral-700 text-sm text-nowrap dark:text-white"
        >
          Page
        </label>
        <select className="flex items-center justify-center h-10 text-sm font-medium border-y border rounded-lg border-neutral-200  dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none">
          {pageLimits.map((limit, index) => (
            <option key={index} value={limit}>
              {limit}
            </option>
          ))}
        </select>
        <label
          htmlFor="countries"
          className="block text-neutral-700 text-sm text-nowrap dark:text-white"
        >
          of 10
        </label>
      </div>
    </section>
  );
};

export default BlogCardGroup;
