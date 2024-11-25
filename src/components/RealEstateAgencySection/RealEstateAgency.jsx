import React from "react";
import RealEstateAgencyImg from "../../assets/RealEstateAgencyImg.png";
import RealEstateAgencyAboveImg from "../../assets/RealEstateAgencyAboveImg.png";
import RealEstateAgencySmallButton from "./RealEstateAgencySmallButton";
import RealEstateAgencyBigButton from "./RealEstateAgencyBigButton";
import SectionTitleComponent from "../SectionTitleComponent";
const RealEstateAgency = () => {
  return (
    // <div className="w-[1440px] p-6">
    <section className=" my-5">
      <div className=" relative flex justify-evenly items-center">
        {/* Left */}
        <div className=" w-[625px] h-[624px] flex justify-between  flex-col gap-3">
          <SectionTitleComponent name={"RealEstateAgency"} />
          <div>
            <p className=" text-[60px] leading-[65px] font-[600]  text-neutral-700">
              Find Your Dream Property Today!
            </p>
          </div>
          <div>
            <span className=" text-lg text-neutral-500">
              Discover a wide range of properties tailored to your needs, from
              cozy apartments to luxurious homes. Whether you're looking to rent
              or buy we provide the tools to explore top locations, compare
              options, and make confident decisions.{" "}
            </span>
          </div>
          <div className=" w-[518px] flex flex-col gap-6">
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

            <div className=" text-neutral-500 flex justify-between items-center">
              <RealEstateAgencySmallButton name={"Property"} />
              <RealEstateAgencySmallButton name={"Buy"} />
            </div>

            <RealEstateAgencyBigButton styleClass={" bg-neutral-700 shadow-sm"}>
              <span className=" font-notoSansLao text-lg text-neutral-50 font-[500]">
                Search Resut
              </span>
            </RealEstateAgencyBigButton>
          </div>
        </div>
        <div className="w-[628px] h-[624px]">
          <img
            className=" w-full h-full object-fill "
            src={RealEstateAgencyImg}
            alt=""
          />
        </div>
        {/* Right */}
        <div className=" absolute w-[194px]  h-[78px] left-[44%] top-[11%] ">
          <img
            className=" rounded-md w-full h-full object-cover"
            src={RealEstateAgencyAboveImg}
            alt=""
          />
        </div>
      </div>
    </section>
    // </div>
  );
};

export default RealEstateAgency;
