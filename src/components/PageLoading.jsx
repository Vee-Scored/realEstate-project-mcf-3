import React from "react";
import Lottie from "lottie-react";
import LoadingLottie from "../lotties/PageLoading.json";
const PageLoading = () => {
  return (
    <div className="  bg-[white] my-[5%]     !opacity-100  flex justify-center items-center flex-col  ">
      <div className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] flex flex-col justify-center items-center gap-3 ">
        <Lottie className="  " animationData={LoadingLottie} loop />
        <p className="  animate-bounce text-primary-500 text-3xl font-bold">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default PageLoading;
