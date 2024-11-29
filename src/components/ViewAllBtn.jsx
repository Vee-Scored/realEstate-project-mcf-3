import React from "react";
import { Link } from "react-router-dom";

const ViewAllBtn = ({ className, children, path }) => {
  return (
    <Link
      to={path}
      className={`${className} px-3 py-1.5 rounded  text-center    text-[10px] font-normal bg-neutral-700 text-white hover:bg-neutral-800 active:bg-neutral-900 active:text-white dark:bg-neutral-400 dark:hover:bg-neutral-500 dark:active:bg-neutral-400 dark:active:text-white dark:text-black`}
    >
      {children}
    </Link>
  );
};

export default ViewAllBtn;
