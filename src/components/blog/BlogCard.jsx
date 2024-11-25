import React from "react";
import { userCircle, calender } from "../../assets/HomeAssets/index";
import ViewAllBtn from "../ViewAllBtn";
const BlogCard = ({ blog: { blog_image, title, content, date } }) => {
  return (
    <div className=" rounded-lg border border-neutral-200">
      <img
        src={blog_image}
        alt="images"
        className="h-64 w-full object-cover object-center rounded-lg"
      />
      <div className="py-8 px-5 flex flex-col items-start gap-4">
        <p className="flex justify-start items-center gap-3">
          <img src={userCircle} alt="user" className="size-5" />
          <span className="text-sm text-neutral-500">By admin</span>
          <div className="h-5 w-[1px] bg-neutral-500" />
          <span className="text-sm text-neutral-500">Estate</span>
        </p>
        <h1 className="text-2xl font-semibold font-heading line-clamp-2">
          {title}
        </h1>
        <p className="text-sm text-neutral-500 font-normal line-clamp-3">
          {content}
        </p>
        <div className="h-[1px] w-full bg-neutral-200" />
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <img src={calender} alt="calender" className="size-5" />
            <p className="text-sm text-neutral-500">{date}</p>
          </div>
          <ViewAllBtn className={`bg-neutral-700 text-white`}>
            View detail
          </ViewAllBtn>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
