import React from "react";

const RealEstateAgencyBigButton = ({ children, styleClass }) => {
  return (
    <button
      className={` ${
        styleClass ? styleClass : ""
      } text-neutral-500 flex    gap-[10px] justify-center items-center h-[70px] w-full p-3 border rounded-sm border-neutral-300`}
    >
      {children}
    </button>
  );
};

export default RealEstateAgencyBigButton;