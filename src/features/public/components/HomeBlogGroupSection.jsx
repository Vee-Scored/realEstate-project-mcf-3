import React from "react";
import { blogs } from "../../../components/blog/constant";
import BlogCard from "../../../components/blog/BlogCard";
import Line101 from "../../../assets/HomeAssets/Line101.png";
import ViewAllBtn from "../../../components/ViewAllBtn";
const HomeBlogGroupSection = () => {
  return (
    <section className="flex flex-col items-start  gap-14 ">
      <div className=" flex flex-col items-start gap-8  w-full ">
        <div className="flex items-center gap-3">
          <img src={Line101} alt="line" />
          <span className="text-sm font-medium text-blue-500">Blog</span>
        </div>
        <h1 className="text-5xl font-semibold text-neutral-700 font-heading">
          Read Our Sight
        </h1>
        <div className="flex justify-between items-center w-full">
          <p className="font-normal text-lg text-neutral-500">
            Explore expert tips, market trends, and home-buying guides in our
            blog <br />
            section. Start reading today.
          </p>
          <ViewAllBtn>View all</ViewAllBtn>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default HomeBlogGroupSection;
