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
          className={`relative w-full mx-auto items-start bg-no-repeat bg-contain bg-center bg-error-pattern `}
        >
          <div className=" flex  justify-between items-center w-[1280px] gap-8">
            <div>
              <img src={errorImg} alt="" />
            </div>
            <div className=" flex flex-col justify-between gap-8 items-start">
              <div className=" flex flex-col  gap-6 ">
                <h1 className="text-5xl text-neutral-700 font-bold font-notoSansLao  tracking-wider leading-10  ">
                  Oops! That page can’t be found.
                </h1>
                <p className="  font-medium text-base text-neutral-500 tracking-wider leading-6">
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
