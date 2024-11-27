import React from "react";
import blogHero from "../../../../assets/blogAssets/blogHero.png";
import SectionTitleComponent from "../../../../components/SectionTitleComponent";
import ViewAllBtn from "../../../../components/ViewAllBtn";
const BlogHeroSection = () => {
  return (
    <section className=" min-h-dvh   grid grid-cols-2 items-center gap-6">
      <div className=" col-span-1">
        <img src={blogHero} alt="blogHeroImage" className="w-full" />
      </div>
      <div className=" col-span-1">
        <div className="flex flex-col items-start gap-6">
          <SectionTitleComponent name={"Blog"} />
          <h2 className="text-[40px] leading-[65px] font-semibold text-neutral-700 font-heading">
            14,000 homes planned for September 2026
          </h2>
          <p className="font-normal text-base text-neutral-500">
            Listed date : 23 Nov 2024
          </p>
          <p className="font-normal text-base text-neutral-700">
            As the October BTO exercise draws to a close, the government
            has unveiled plans for the upcoming February launch, which includes
            a major project in Woodlands. This project will be the largest among
            the February As the October BTO exercise draws to a close, the
            government has unveiled plans for the upcoming February
            launch, which includes a major project in Woodlands. This project
            will be the largest among the February .....
          </p>
          <ViewAllBtn
            className={"bg-neutral-700 text-white !px-12 !py-4 !text-base"}
            path={"/blogs/estate/home-condo"}
          >
            See More
          </ViewAllBtn>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
