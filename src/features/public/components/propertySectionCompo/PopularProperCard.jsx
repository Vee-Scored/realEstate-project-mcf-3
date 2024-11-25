import { BsArrowsMove } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import PropertyBtn from "./PropertyBtn";

const PopularProperCard = ({ property }) => {
  const { id, img, state, title, description, price, listedDate, unitId } =
    property;
  return (
    <div className=" flex relative overflow-hidden  flex-col rounded-sm border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* img section */}
      <div className="relative w-full ">
        <img
          src="https://s3-alpha-sig.figma.com/img/f016/88d8/ac7807346b5826c1ea3598446e7d2a55?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdpGkSR9BV-YYPXW6EZnuvWn70vxLCZmmLfz4bN84cEvJRvBhdrrR-WxuadwahoclygtdgjbAKl8ctAXWbJN7n35~no3dAH3Wxor85J4~379WBiEywP~s3FokbxM9BlHS5ufApe5Gq89o3m40T4XhzPkzqfIDQNTIB~EPnOCE0MQxxKw9BG55GqGwh6oOW17yp0wLB3YPUql2bXA2juVqe9MNSDGDxzRPZ4~eBDGHrLcIQPtITL0zHITHVteAKDzwGQGh0UOfiu~PV1L3p1yT0tW~yEH9CreONYYXTJuXm9mUBNyF19k2A8ZFW08BK3Zs5MFcWlab2ycyIEOlIziYg__"
          alt=""
        />
        <button
          className={`absolute top-0 right-0 z-30 py-0.5  px-2.5  rounded-sm ${
            state === true ? "bg-[#22C55E]" : "bg-[#EAB308]"
          } ] text-xs  text-white mx-2 my-2`}
        >
          {state !== true ? "For Sale" : "For Rent"}
        </button>
      </div>
      <div className=" h-[330px] flex flex-col justify-between   px-3 py-8 border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800  ">
        <div className="  flex flex-col gap-3 ">
          <div>
            <div className=" bg-[#22C55E] inline-block px-4  text-white rounded-sm ">
              Available
            </div>
          </div>
          <p className=" text-blue-500 leading-normal font-bold text-2xl">
            Golden Pearl Condo
          </p>
          <div className=" flex gap-2 text-sm  text-neutral-700 dark:text-neutral-400 font-normal">
            <p>Unit ID : </p>
            <p>AA123456</p>
          </div>
          <p className=" text-xs  text-neutral-500">
            Prime condo located in downtown, just 10 minutes to mall. Surrounded
            by lush parks, trendy cafes .....
          </p>
          <p>
            <span className=" text-sm font-semibold text-neutral-700">
              $1200
            </span>{" "}
            <span className="text-sm font-semibold text-neutral-500 ">
              / month
            </span>
          </p>
          <div className=" flex gap-2 text-neutral-700 items-center">
            <div className=" flex items-center gap-2 text-nowrap justify-center text-xs text-neutral-500 dark:text-neutral-400">
              <IoBedOutline />

              <span> 2 Bedrooms</span>
            </div>{" "}
            |
            <div className=" flex items-center gap-2 text-nowrap justify-center text-xs text-neutral-500 dark:text-neutral-400">
              <LuBath />

              <span> 2 Bathrooms</span>
            </div>{" "}
            |
            <div className=" flex items-center gap-2 text-nowrap justify-center text-xs text-neutral-500 dark:text-neutral-400">
              <BsArrowsMove />
              <span> 50 Sqft</span>
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
            <span>23 Nov 20024</span>
          </div>
          <PropertyBtn text={"View detail"} />
        </div>
      </div>
    </div>
  );
};
export default PopularProperCard;
