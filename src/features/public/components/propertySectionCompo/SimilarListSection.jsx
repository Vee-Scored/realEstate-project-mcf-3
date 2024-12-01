import { Link } from "react-router-dom";
import ProperDetailTitle from "./ProperDetailTitle";
import SimilarListCardSection from "./SimilarListCardSection";

export const SimilarListSection = () => {
  return (
    <>
      <div className=" flex flex-col gap-8 py-16">
        <div className=" flex justify-between items-center ">
          <ProperDetailTitle text="Similar Listings " />
          <Link to="/properties" className=" md:inline-block hidden">
            <button className="  p-2.5 font-heading text-xs  border border-gray-200 rounded-md bg-white text-neutral-700 ">
              See More
            </button>
          </Link>
        </div>
        <div className=" w-full rounded-sm overflow-hidden">
          <SimilarListCardSection />
        </div>
        <div>
          <Link to="/properties" className=" md:hidden inline-block">
            <button className="  p-2.5 font-heading text-xs  border border-gray-200 rounded-md bg-white text-neutral-700 ">
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
