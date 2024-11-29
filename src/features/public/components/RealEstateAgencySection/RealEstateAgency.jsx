import React from "react";
import RealEstateAgencyImg from "../../../../assets/HomeAssets/home-couple.png";
import RealEstateAgencyAboveImg from "../../../../assets/HomeAssets/RealEstateAgencyAboveImg.png";
import SectionTitleComponent from "../../../../components/SectionTitleComponent";
import RealEstateAgencySmallButton from "./RealEstateAgencySmallButton";
import RealEstateAgencyBigButton from "./RealEstateAgencyBigButton";
import Container from "../../../../components/Container";
const RealEstateAgency = () => {
  return (
    // <div className="w-[1440px] p-6">
    <section className=" my-5">
      <Container>
      <div className=" relative md:flex gap-5 items-stretch">
        {/* Left */}
        <div className="w-full md:hidden my-2 h-[624px]">
          <img
            className=" w-full h-full object-cover "
            src={RealEstateAgencyImg}
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 lg:h-[624px] flex justify-between  flex-col gap-5 lg:gap-8">
          <SectionTitleComponent name={"RealEstateAgency"}  />
          <div>
            <p className="text-[35px] sm:w-[350px] md:w-full md:text-[40px] lg:text-[50px] leading-[38px] xl:text-[60px] lg:leading-[50px] xl:leading-[65px] font-[600]  text-neutral-700">
            Find Your Dream Property Today!
            </p>
         </div>
          <div>
            <span className=" text-sm  leading-2  lg:text-lg text-neutral-500">
              Discover a wide range of properties tailored to your needs, from
              cozy apartments to luxurious homes. Whether you're looking to rent
              or buy we provide the tools to explore top locations, compare
              options, and make confident decisions.{" "}
            </span>
          </div>
          <div className="sm:w-[350px] lg:w-full xl:w-[518px] flex flex-col gap-3 lg:gap-6">
            <RealEstateAgencyBigButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>{" "}
              <span className="">Search location</span>
            </RealEstateAgencyBigButton>

            <div className=" text-neutral-500 flex gap-3 items-center">
              <RealEstateAgencySmallButton name={"Property"} />
              <RealEstateAgencySmallButton name={"Buy"} />
            </div>

            <RealEstateAgencyBigButton styleClass={" bg-neutral-700 shadow-sm"}>
              <span className=" font-notoSansLao text-lg text-neutral-50 font-[500]">
                Search Result
              </span>
            </RealEstateAgencyBigButton>
          </div>
        </div>
        <div className="w-1/2 hidden md:block lg:h-[624px]">
          <img
            className=" w-full h-full object-cover "
            src={RealEstateAgencyImg}
            alt=""
          />
        </div>
        {/* Right */}
        <div className="hidden lg:absolute w-[194px]  h-[78px] left-[44%] top-[11%] ">
          <img
            className=" rounded-md w-full h-full object-cover"
            src={RealEstateAgencyAboveImg}
            alt=""
          />
        </div>
      </div>
      </Container>
    </section>
    // </div>
  );
};

export default RealEstateAgency;