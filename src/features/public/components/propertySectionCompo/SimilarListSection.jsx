import { Link } from "react-router-dom";
import ProperDetailTitle from "./ProperDetailTitle";
import SimilarListCardSection from "./SimilarListCardSection";
import data from "../../../../../data.json";

export const SimilarListSection = () => {
  return (
    <>
      <div className=" flex flex-col gap-8 py-16">
        <div className=" flex justify-between items-center ">
          <ProperDetailTitle text="Similar Listings " />
          <Link className=" md:inline-block hidden">
            <button className="  p-2.5 font-heading text-xs text-white bg-black ">
              See More
            </button>
          </Link>
        </div>
        <div className=" w-full rounded-sm overflow-hidden">
          <SimilarListCardSection data={data} />
        </div>
        <div>
          <Link className=" md:hidden inline-block">
            <button className="  p-2.5 font-heading text-xs text-white bg-black ">
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
