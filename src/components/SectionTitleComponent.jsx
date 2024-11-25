import React from "react";
import Line101 from "../assets/HomeAssets/Line101.png"
const SectionTitleComponent = ({ name }) => {
  return (
    <div className=" flex items-center gap-2">
      <img src={Line101} alt="line" />
      <p className=" text-[16px]  leading-[19.36px]  text-primary-500">
        {name}
      </p>
    </div>
  );
};

export default SectionTitleComponent;
