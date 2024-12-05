import React from "react";
import BlogCategoryBtnGroup from "./BlogCategoryBtnGroup";
import BlogCard from "./BlogCard";
import ViewAllBtn from "../../../../components/ViewAllBtn";
import useBlogStore from "../../../../stores/useBlogStore";
import useBlogCategoriesStore from "../../../../stores/useBlogCategoriesStore";
import { motion } from "framer-motion";

const BlogCardGroup = () => {
  const pageLimits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { blogs } = useBlogStore();
  const { categories } = useBlogCategoriesStore();
  const currentActive = categories.find(
    (category) => category.isActive === true
  );
  return (
    <section className=" min-h-dvh flex flex-col gap-10 mb-10">
      <BlogCategoryBtnGroup />
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 ">
        {blogs
          .filter(
            (blog) =>
              blog.category === currentActive.name ||
              currentActive.name === "All"
          )
          .map((blog, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
              key={blog.id}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
      </div>
      <div className=" flex items-center gap-2 w-full justify-center ">
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
      <div className="text-start inline-block md:hidden">
        <ViewAllBtn
          className={
            "bg-neutral-700 text-white !px-12 !py-4 !text-base w-auto "
          }
          path={"/blogs/estate/home-condo"}
        >
          See More
        </ViewAllBtn>
      </div>
    </section>
  );
};

export default BlogCardGroup;
