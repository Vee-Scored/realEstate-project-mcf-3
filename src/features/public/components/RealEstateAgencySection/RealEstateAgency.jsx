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
            <SectionTitleComponent name={"RealEstateAgency"} />
            <div>
              <p className="text-[35px] sm:w-[350px] md:w-full md:text-[40px] lg:text-[50px] leading-[38px] xl:text-[60px] lg:leading-[50px] xl:leading-[65px] font-[600]  text-neutral-700">
                Find Your Dream Property Today!
              </p>
            </div>
            <div>
              <span className=" text-sm  leading-2  lg:text-lg text-neutral-500">
                Discover a wide range of properties tailored to your needs, from
                cozy apartments to luxurious homes. Whether you're looking to
                rent or buy we provide the tools to explore top locations,
                compare options, and make confident decisions.{" "}
              </span>
            </div>
            <div className="sm:w-[350px] lg:w-full xl:w-[518px] flex flex-col gap-3 lg:gap-6">
              <RealEstateAgencyBigButton>
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    // stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                {/* <span className="">Search location</span>  */}
              </RealEstateAgencyBigButton>

              <div className=" text-neutral-500 flex gap-3 w-full items-center">
                <RealEstateAgencySmallButton className={" w-1/2"}>
                  {
                    <>
                      {" "}
                      <option selected>property</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </>
                  }
                </RealEstateAgencySmallButton>
                <RealEstateAgencySmallButton className={" w-1/2"}>
                  {
                    <>
                      {" "}
                      <option selected>Buy</option>
                      <option value="Rent">Rent</option>
                    </>
                  }
                </RealEstateAgencySmallButton>
              </div>

              <div className="w-full col-span-2 md:col-span-1">
                <button className=" bg-neutral-700 h-16 w-full text-sm   rounded-sm text-white   text-center ">
                  Search Result
                </button>
              </div>
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
