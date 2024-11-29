import React from "react";
import useBlogCategoriesStore from "../../../../stores/useBlogCategoriesStore";

const BlogCategoryBtn = ({ category, children, className, ...rest }) => {
  const { categoryActive } = useBlogCategoriesStore();
  const handleClick = () => {
    categoryActive(category?.id);
  };
  return (
    <button
      onClick={handleClick}
      {...rest}
      className={`${
        category?.isActive
          ? "bg-neutral-700 text-white"
          : "hover:bg-neutral-700 hover:text-white border-neutral-700 border text-neutral-700 bg-transparent"
      } text-nowrap px-6 py-2.5 rounded  duration-200   active:bg-neutral-600 active:text-white  ${className}`}
    >
      {children}
    </button>
  );
};

export default BlogCategoryBtn;
