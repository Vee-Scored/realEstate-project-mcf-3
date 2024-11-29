import React from "react";

const RealEstateAgencySmallButton = ({ children, className }) => {
  return (
    <div className={`${className ? className : ""} `}>
      <select
        id="countries"
        className={` border w-full  border-gray-300 text-gray-900 text-sm  p-4  focus:ring-neutral-300 focus:border-neutral-300 text-center  block h-16 rounded-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
      >
        {children}
      </select>
    </div>
  );
};

export default RealEstateAgencySmallButton;
