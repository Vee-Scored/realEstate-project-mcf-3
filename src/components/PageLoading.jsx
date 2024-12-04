import React from "react";
import Lottie from "lottie-react";
import LoadingLottie from "../lotties/PageLoading.json";
const PageLoading = () => {
  return (
    <div className="  bg-[white]  !opacity-100  flex justify-center items-center flex-col  ">
      <Lottie className=" w-1/2" animationData={LoadingLottie} loop />
      <p className=" animate-bounce text-primary-500 text-3xl font-bold">
        Loading...
      </p>
    </div>
  );
};

export default PageLoading;
