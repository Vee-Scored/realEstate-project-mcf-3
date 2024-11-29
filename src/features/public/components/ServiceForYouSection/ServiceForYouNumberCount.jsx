import React, { useEffect, useState } from "react";

const ServiceForYouNumberCount = ({ num, Text }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < num) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 125);
    }
    // return () => {
    //   console.log("Unmount");
    // };
  });

  return (
    <div className=" w-1/3">
      <h1 className=" lg:text-[40px] text-[27px] leading-[45px] lg:leading-[65.8px] font-[600] text-primary-500 font-notoSansLao">
        {progress}K+
      </h1>
      <span className=" lg:p-0 text-neutral-500 text-nowrap text-xs md:text-xs xl:text-lg   font-normal font-inter">
        {Text}
      </span>
    </div>
  );
};

export default ServiceForYouNumberCount;
