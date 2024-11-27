import React from "react";

const AboutUs_Properties = ({ header, text }) => {
  return (
    <div className=" w-[617px] gap-8  flex flex-col ">
      <div>
        <h1 className=" text-2xl font-semibold font-sans text-neutral-700">
          {header}
        </h1>
      </div>
      <div className=" text-base font-normal text-neutral-500 font-heading">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default AboutUs_Properties;
