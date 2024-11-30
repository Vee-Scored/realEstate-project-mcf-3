import React, { Suspense, lazy } from "react";

const Header = lazy(() => import("../features/public/components/Header"));
const PageLoading = lazy(() => import("./PageLoading"));
const Footer = lazy(() => import("../features/public/components/Footer"));
const Container = lazy(() => import("./Container"));
import errorImg from "../assets/errorImg.png";
import { Link } from "react-router-dom";
import BreadCrumb from "../features/public/components/BreadCrumb";

const NotFound = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<PageLoading />}>
        <div className=" flex justify-center">
          <BreadCrumb currentPage={"404"} />
        </div>
        {/* 404 state  */}
        <Container
          className={`relative w-full mx-auto items-start bg-no-repeat bg-contain bg-center xl:bg-error-pattern `}
        >
          <div className=" flex xl:flex-row flex-col-reverse  justify-between items-center xl:w-[1280px] gap-8 py-16">
            <div className=" w-full bg-error-pattern bg-no-repeat bg-contain bg-center">
              <img src={errorImg} alt="" />
            </div>
            <div className=" flex flex-col xl:justify-between justify-center items-center gap-8 xl:items-start">
              <div className=" flex flex-col  gap-6 text-start ">
                <h1 className="xl:text-6xl md:text-4xl text-3xl text-neutral-700 font-bold font-notoSansLao   font-heading  leading-10  ">
                  Oops! That page can’t be found.
                </h1>
                <p className="  font-medium text-base text-neutral-500 xl:tracking-wider xl:leading-6 ">
                  The page you’re looking for might have been moved, deleted, or
                  doesn’t exist. Try heading back to the homepage or using the
                  menu to find what you need.
                </p>
              </div>
              <Link
                to={"/"}
                className=" border bg-neutral-700 rounded-md px-4 py-2 text-white "
              >
                Back To Home
              </Link>
            </div>
          </div>
        </Container>
      </Suspense>
      <Footer />
    </>
  );
};

export default NotFound;
