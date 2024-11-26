import React from "react";
import blogDetail from "../../../../assets/blogAssets/BlogDetailImage.png";
const BlogDetailHeroSection = () => {
  return (
    <section className=" min-h-dvh  py-16">
      <div className="flex flex-col gap-10 items-start">
        <h3 className=" text-5xl leading-[53px] font-semibold text-neutral-700 font-heading">
          14,000 homes planned for Sembawang and <br /> Woodlands North by 2035
        </h3>
        <span className="text-xs text-neutral-500 font-normal">
          Listed date 23/11/2024
        </span>
        <div className="flex flex-col gap-8 items-start">
          <img
            src={blogDetail}
            alt="blogDetail"
            className=" w-full h-auto object-contain object-center"
          />
          <p className=" text-base font-normal text-neutral-700">
            As the October BTO exercise draws to a close, the government
            has unveiled plans for the upcoming February launch, which includes
            a major project in Woodlands. This project will be the largest among
            the February 2025 BTO launches, signalling a significant expansion
            of housing options in the northern region. Here’s what you can look
            forward to in Sembawang North and Woodlands North.
          </p>
          <p className=" text-base font-normal text-neutral-700">
            If you’re waiting for new HDB BTO projects, you’ll be glad to know
            that Sembawang North and Woodlands North Coast will see their first
            BTO launches in 2025. The very first project for Woodlands North
            Coast is scheduled to be part of the February 2025 BTO launch. This
            will be one of the key highlights in the BTO projects slated for
            that period.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHeroSection;
