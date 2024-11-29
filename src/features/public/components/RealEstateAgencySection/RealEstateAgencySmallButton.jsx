import React from "react";

const RealEstateAgencySmallButton = ({ name }) => {
  return (
    <button className=" w-1/2 h-[50px]  lg:h-[70px] border gap-[10px] border-neutral-300  rounded-md flex items-center justify-around py-2 px-3">
      <span className=" text-[14px] leading-[23px]">{name}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
};

export default RealEstateAgencySmallButton;