import React from "react";
import { Link, useLocation } from "react-router-dom";
import CheckCircle from "../../../../assets/propertyDetail/check-circle.png";
import AvatarOne from "../../../../assets/propertyDetail/AvatarOne.png";
import AvatarTwo from "../../../../assets/propertyDetail/AvatarTwo.png";
import AvatarThree from "../../../../assets/propertyDetail/AvatarThree.png";
import AvatarFour from "../../../../assets/propertyDetail/AvatarFour.png";
import Vector from "../../../../assets/propertyDetail/Vector.png";
// import calendar from "../../../../assets/propertyDetail/calendar-days.png";
// import PropertyDetailRoomInfoSmall from "./PropertyDetailRoomInfoSmall";
import { FaRegCalendarAlt } from "react-icons/fa";
// import PropertyBtn from "./PropertyBtn";
import { BsArrowsMove } from "react-icons/bs";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import useCardList from "../../../../stores/useCardList";

const avatars = [AvatarOne, AvatarTwo, AvatarThree, AvatarFour];

const PropertyDetailAvailableSection = ({ slug }) => {
  const { cards } = useCardList();
  const currentData = cards.find((d) => d.slug == slug);
  // console.log(currentData);

  // const {
  //   id,
  //   name,
  //   available,
  //   type,
  //   propertyImg,
  //   shortDescription,
  //   pricePerMonth,
  //   bedrooms,
  //   bathrooms,
  //   sizeSqft,
  //   listedDate,
  //   slug,
  // } = currentData;

  return (
    <section>
      <div className="  py-5  md:py-16 flex xl:flex-row flex-col  gap-[134px] justify-between xl:items-center">
        {/* left */}
        {/* <div className=" w-[735px] gap-20 flex flex-col justify-between ">
          <div className=" flex flex-col gap-4 justify-between">
           
            <div className=" flex flex-col gap-4">
              <div className="  flex justify-center items-center bg-[#22C55E] w-[128px] h-[32px] py-[2px] px-[10px] rounded-sm">
                <span className=" text-neutral-50 text-base font-medium font-heading">
                  {currentData.details.propertyDetails.status}
                </span>
              </div>
              <div>
                <h1 className=" text-primary-500 text-[40px] leading-[65.8px] font-semibold font-heading">
                  {currentData.name}
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-1 text-neutral-700 text-base font-medium font-sans">
              <span>Unit ID :</span>
              <span>{currentData.id}</span>
            </div>
            <div className=" text-neutral-700 font-normal text-base font-sans">
              <p>{currentData.details.description}</p>
            </div>
            <div className=" flex items-center gap-[5px]">
              <span className=" text-2xl font-semibold font-heading text-neutral-700">
                ${currentData.pricePerMonth}
              </span>
              <span className=" text-neutral-500 text-lg font-normal font-sans">
                /month
              </span>
            </div>
            <div className=" flex items-center gap-4">
              <PropertyDetailRoomInfoSmall
                image={BedSingle}
                bathrooms={currentData.bathrooms}
                unt={"Bedrooms"}
              />
              <div className=" bg-neutral-700 py-3 px-[1px]"></div>

              <PropertyDetailRoomInfoSmall
                image={Bath}
                unt={"Bathrooms"}
                bathrooms={currentData.bedrooms}
              />
              <div className=" bg-neutral-700 py-3 px-[1px]"></div>

              <PropertyDetailRoomInfoSmall
                image={Move}
                bathrooms={currentData.sizeSqft}
                unt={"sqft"}
              />
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <div>
              <img src={calendar} alt="" />
            </div>
            <div className=" text-base font-sans font-normal  text-neutral-700">
              <span>Listed date :</span>
              <span>{currentData.listedDate}</span>
            </div>
          </div>
        </div> */}
        <div className=" flex flex-col justify-between    xl:py-8  bg-white   dark:border-gray-700 dark:bg-gray-800  ">
          <div className="  flex flex-col gap-3  dark:border-gray-700 ">
            <div>
              <div
                className={`inline-block px-4 rounded-sm text-neutral-50 text-base font-medium font-heading ${
                  currentData.available === true
                    ? "bg-[#22C55E] text-white"
                    : "bg-[#EAB308]"
                }`}
              >
                {currentData.available === true ? "Available" : "Unavailable"}
              </div>
            </div>
            <p className="text-primary-500 text-lg md:text-[40px]   font-heading  leading-normal font-bold ">
              {currentData.name}
            </p>
            <div className=" flex gap-2 text-sm  text-neutral-700 dark:text-neutral-400 font-normal">
              <p>Unit ID : </p>
              <p>{currentData.id}</p>
            </div>
            <p className=" text-base  text-neutral-500">
              {currentData.details.description}
            </p>

            <p
              className={`flex items-center
                ${
                  currentData.available === false
                    ? "line-through decoration-[1.5px] text-2xl font-heading  text-neutral-500"
                    : ""
                }
              `}
            >
              <span className=" text-2xl font-heading text-center  font-semibold text-neutral-700">
                ${currentData.pricePerMonth}
              </span>{" "}
              <span className="text-2xl font-heading text-center  font-semibold text-neutral-500 ">
                / month
              </span>
            </p>
            <div className=" flex gap-2 text-[12px] sm:text-base text-neutral-700 items-center">
              <div className=" flex items-center gap-2 text-nowrap justify-center  text-neutral-500 dark:text-neutral-400">
                <IoBedOutline />

                <span> {currentData.bedrooms} Bedrooms</span>
              </div>{" "}
              |
              <div className=" flex items-center gap-2 text-nowrap justify-center  text-neutral-500 dark:text-neutral-400 ">
                <LuBath />

                <span> {currentData.bathrooms} Bathrooms</span>
              </div>{" "}
              |
              <div className=" flex items-center gap-2 text-nowrap justify-center  text-neutral-500 dark:text-neutral-400">
                <BsArrowsMove />
                <span> {currentData.sizeSqft} Sqft</span>
              </div>
            </div>
          </div>
          <hr className=" dark:border-gray-600 mt-10" />

          <div className=" flex justify-between items-center mt-4 pt-10  ">
            <div className="   dark:text-slate-300 flex gap-2 items-center text-base font-sans font-normal  text-neutral-700">
              <span>
                <FaRegCalendarAlt className=" text-blue-500" />
              </span>
              <span>Listed date : </span>
              <span>{currentData.listedDate}</span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className=" xl:w-[411px] w-full p-6 flex flex-col gap-8 rounded-xl bg-neutral-50 shadow-xl ">
          <div className=" flex gap-5  flex-col">
            {/* header img */}
            <div className=" flex justify-between items-center">
              <div className=" flex justify-center items-center w-[48px] h-[48px] border-spacing-2  rounded-[28px] bg-[#D1FADF] border-[#ECFDF3]">
                <img src={CheckCircle} alt="" />
              </div>
              <div className=" flex items-center  gap-1">
                {/* DRY ( Don't Repeat Yourself ) */}
                {avatars.map((avatar, index) => (
                  <img key={index} src={avatar} alt="" />
                ))}
              </div>
              <div>
                <img src={Vector} alt="" />
              </div>
            </div>
            {/* Body text */}
            <div className=" flex flex-col gap-2">
              <h1 className=" text-lg  font-medium font-sans text-[#101828]">
                Contact the Admin
              </h1>
              <span className=" text-sm  text-[#667085] font-normal">
                We are here to help you with any inquiries
              </span>
            </div>
          </div>
          <Link to={"/contact-admin"}>
            <div className=" w-full cursor-pointer bg-[#3B82F6] rounded flex justify-center items-center">
              <button className="w-full py-[10px] px-[18px] text-white">
                Get In Touch
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailAvailableSection;
