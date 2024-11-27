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
          : "hover:bg-neutral-100 border-neutral-400 border text-neutral-500 bg-transparent"
      } text-nowrap px-6 py-2.5 rounded  duration-200 hover:scale-95  active:bg-neutral-500 active:text-white  ${className}`}
    >
      {children}
    </button>
  );
};

export default BlogCategoryBtn;
