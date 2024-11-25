import React, { useEffect, useState } from "react";

const ServiceForYouNumberCount = ({ num, Text }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < num) {
      setTimeout(() => {
        setProgress(progress + 0.5);
      }, 150);
    }
    // return () => {
    //   console.log("Unmount");
    // };
  });

  return (
    <div className=" w-[139px]">
      <h1 className=" text-[40px] leading-[65.8px] font-[600] text-primary-500 font-notoSansLao">
        {progress}K+
      </h1>
      <span className=" text-neutral-500 text-base font-normal font-inter">
        {Text}
      </span>
    </div>
  );
};

export default ServiceForYouNumberCount;
