import React from "react";
import { Link } from "react-router-dom";

const ViewAllBtn = ({ className, children, path }) => {
  return (
    <Link
      to={path}
      className={`${className} px-2 py-1 rounded text-neutral-500 text-center border  border-neutral-500 text-[10px] font-normal`}
    >
      {children}
    </Link>
  );
};

export default ViewAllBtn;
