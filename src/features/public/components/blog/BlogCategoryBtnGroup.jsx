import React from "react";
import useBlogCategoriesStore from "../../../../stores/useBlogCategoriesStore";
import BlogCategoryBtn from "./BlogCategoryBtn";

const BlogCategoryBtnGroup = () => {
  const { categories } = useBlogCategoriesStore();
  return (
    <div className="flex flex-col gap-6 ">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading text-neutral-700">
        You Can Choose Your Category
      </h3>
      <div className=" flex gap-3 items-center overflow-x-hidden category-buttons-group ">
        {categories.map((category) => (
          <BlogCategoryBtn key={category.id} category={category}>
            {category.name}
          </BlogCategoryBtn>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryBtnGroup;
