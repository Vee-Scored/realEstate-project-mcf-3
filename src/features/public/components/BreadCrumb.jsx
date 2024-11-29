import React from "react";
import { LuHome } from "react-icons/lu";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = ({ currentPage }) => {
  return (
    <Container className={"w-full"}>
      <div className="  ps-10 py-10 w-full  bg-neutral-100  flex flex-col items-start justify-center gap-3 border-y ">
        <div className=" ">
          <h1 className=" first-letter:uppercase font-sans text-neutral-700 text-[40px] leading-[65.8px] font-semibold">
            {currentPage}
          </h1>
        </div>
        <ol className=" font-heading inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex  items-center">
            <Link
              to="/"
              className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <LuHome className=" text-primary-500" />
              Home
            </Link>
          </li>
          <div>
            <IoIosArrowForward />
          </div>
          <li className="inline-flex  items-center">
            <span
              to={`${currentPage}`}
              className=" cursor-pointer inline-flex gap-1 items-center text-sm font-medium text-neutral-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              {currentPage}
            </span>
          </li>
        </ol>
      </div>
    </Container>
  );
};

export default BreadCrumb;
