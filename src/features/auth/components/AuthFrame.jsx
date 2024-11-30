import React from "react";
import AuthPhoto from "../../../assets/AuthAsset/AuthPhoto.jpg";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
const AuthFrame = ({ children, className }) => {
  return (
    <section className="min-h-dvh flex items-center justify-center p-2 lg:px-0">
      <div className=" grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2  justify-center items-center bg-white  rounded relative h-full">
        <div className="col-span-1  h-full">
          <img
            src={AuthPhoto}
            className="object-cover aspect-auto object-center w-full h-full  rounded"
            alt="authPhoto"
          />
          <Link to={"/"} className="absolute top-2 right-4">
            <HiX />
          </Link>
        </div>
        <div className="col-span-1 w-full  px-0 lg:px-10">{children}</div>
      </div>
    </section>
  );
};

export default AuthFrame;
