import React from "react";
import blogDetail from "../../../../assets/blogAssets/BlogDetailImage.png";
import { useParams } from "react-router-dom";
import useBlogStore from "../../../../stores/useBlogStore";

const BlogDetailHeroSection = () => {
  const { slug } = useParams();
  const { blogs } = useBlogStore();
  const blog = blogs.find((blog) => blog.slug === slug);
  return (
    <section className="min-h-dvh  py-10 lg:py-16">
      <div className="flex flex-col gap-8 lg:gap-10 items-start">
        <h3 className=" text-3xl md:text-4xl lg:text-5xl leading-[42px] lg:leading-[53px] font-semibold text-neutral-700 font-heading">
          {blog?.title ? (
            blog?.title
          ) : (
            <p>
              14,000 homes planned for Sembawang and <br /> Woodlands North by
              2035
            </p>
          )}
        </h3>
        <span className="text-xs text-neutral-500 font-normal">
          Listed date {blog?.date ? blog.date : "23/11/2024"}
        </span>
        <div className="flex flex-col gap-8 items-start">
          <img
            src={blog?.blog_image ? blog.blog_image : blogDetail}
            alt="blogDetail"
            className=" w-full h-auto object-contain object-center aspect-auto"
          />
          <p className=" text-base font-normal text-neutral-700">
            {blog?.content
              ? blog.content
              : `As the October BTO exercise draws to a close, the government
            has unveiled plans for the upcoming February launch, which includes
            a major project in Woodlands. This project will be the largest among
            the February 2025 BTO launches, signalling a significant expansion
            of housing options in the northern region. Here’s what you can look
            forward to in Sembawang North and Woodlands North.`}
          </p>
          <p className=" text-base font-normal text-neutral-700">
            {blog?.description
              ? blog.description
              : ` If you’re waiting for new HDB BTO projects, you’ll be glad to know
            that Sembawang North and Woodlands North Coast will see their first
            BTO launches in 2025. The very first project for Woodlands North
            Coast is scheduled to be part of the February 2025 BTO launch. This
            will be one of the key highlights in the BTO projects slated for
            that period.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHeroSection;
