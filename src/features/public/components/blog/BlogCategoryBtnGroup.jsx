import React from "react";
import useBlogCategoriesStore from "../../../../stores/useBlogCategoriesStore";
import BlogCategoryBtn from "./BlogCategoryBtn";
import { motion } from "framer-motion";

const BlogCategoryBtnGroup = () => {
  const { categories } = useBlogCategoriesStore();

  return (
    <div className="flex flex-col gap-6 ">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading text-neutral-700">
        You Can Choose Your Category
      </h3>
      <div className=" flex gap-3 items-center overflow-x-hidden category-buttons-group ">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <BlogCategoryBtn category={category}>
              {category.name}
            </BlogCategoryBtn>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryBtnGroup;
