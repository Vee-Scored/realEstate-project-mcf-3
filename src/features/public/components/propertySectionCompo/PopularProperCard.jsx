import { BsArrowsMove } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import PropertyBtn from "./PropertyBtn";
import { Link } from "react-router-dom";

const PopularProperCard = ({
  property: {
    id,
    name,
    available,
    type,
    propertyImg,
    shortDescription,
    pricePerMonth,
    bedrooms,
    bathrooms,
    sizeSqft,
    listedDate,
    slug,
  },
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };
  return (
    <div className=" flex relative overflow-hidden  flex-col rounded-sm border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* img section */}
      <div className="relative w-full ">
        <img src={propertyImg} alt={name} />
        <button
          className={`absolute top-0 right-0 z-30 py-0.5  px-2.5  rounded-sm ${
            available === true ? "bg-[#22C55E]" : "bg-[#EAB308]"
          } ] text-xs  text-white mx-2 my-2`}
        >
          {type === "rent" ? "For Rent" : "For Sale"}
        </button>
      </div>
      <div className=" h-[330px] flex flex-col justify-between   px-3 py-8 border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800  ">
        <div className="  flex flex-col gap-3 ">
          <div>
            <div
              className={`inline-block px-4 rounded-sm ${
                available === true
                  ? "bg-[#22C55E] text-white"
                  : "bg-[#EAB308] text-gray-100"
              }`}
            >
              {available === true ? "Available" : " Unavailable"}
            </div>
          </div>
          <p className=" text-blue-500 leading-normal font-bold text-2xl">
            {name}
          </p>
          <div className=" flex gap-2 text-sm  text-neutral-700 dark:text-neutral-400 font-normal">
            <p>Unit ID : </p>
            <p>{id}</p>
          </div>
          <p className=" text-xs min-h-9  text-neutral-500">
            {shortDescription}
          </p>
          <p
            className={`flex items-center
                ${
                  available === false
                    ? "line-through decoration-[1.5px]  text-neutral-500"
                    : ""
                }
              `}
          >
            <span className=" text-sm font-semibold text-neutral-700">
              ${pricePerMonth}
            </span>{" "}
            <span className="text-sm font-semibold text-neutral-500 ">
              / month
            </span>
          </p>
          <div className=" flex gap-2 text-neutral-700 items-center">
            <div className=" flex items-center gap-2 text-nowrap justify-center text-xs text-neutral-500 dark:text-neutral-400">
              <IoBedOutline />

              <span> {bedrooms} Bedrooms</span>
            </div>{" "}
            |
            <div className=" flex items-center gap-2 text-nowrap justify-center text-xs text-neutral-500 dark:text-neutral-400">
              <LuBath />

              <span> {bathrooms} Bathrooms</span>
            </div>{" "}
            |
            <div className=" flex items-center gap-2 text-nowrap justify-center text-xs text-neutral-500 dark:text-neutral-400">
              <BsArrowsMove />
              <span> {sizeSqft} Sqft</span>
            </div>
          </div>
        </div>
        <hr className=" dark:border-gray-600" />
        <div className=" flex justify-between items-center mt-4  ">
          <div className=" text-xs text-black dark:text-slate-300 flex gap-2 items-center">
            <span>
              <FaRegCalendarAlt className=" text-blue-500" />
            </span>
            <span>Listed date : </span>
            <span>{listedDate}</span>
          </div>
          <Link to={`/properties/${type}/${slug}`}>
            <PropertyBtn onClick={scrollToTop} text={"View detail"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PopularProperCard;
