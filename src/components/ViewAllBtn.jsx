import React from "react";

const ViewAllBtn = ({ className, children }) => {
  return (
    <button
      className={`${className} px-2 py-1 rounded text-neutral-500 text-center border  border-neutral-500 text-[10px] font-normal`}
    >
      {children}
    </button>
  );
};

export default ViewAllBtn;
