import React from "react";

const SectionTitleComponent = ({ name }) => {
  return (
    <div className=" flex gap-2">
      <div className=" bg-primary-500 w-1 h-full"></div>
      <p className=" text-[16px]  leading-[19.36px]  text-primary-500">
        {name}
      </p>
    </div>
  );
};

export default SectionTitleComponent;
