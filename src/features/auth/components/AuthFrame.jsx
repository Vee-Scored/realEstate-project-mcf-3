import React from "react";
import AuthPhoto from "../../../assets/AuthAsset/AuthPhoto.png";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
const AuthFrame = ({ children, className }) => {
  return (
    <section className="min-h-dvh flex items-center justify-center  ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white  rounded-sm relative">
        <div className=" col-span-1 w-full ">
          <img
            src={AuthPhoto}
            className=" object-contain object-center"
            alt="authPhoto"
          />
          <Link to={"/"} className="absolute top-4 right-4">
            <HiX />
          </Link>
        </div>
        <div className=" col-span-1  p-6 w-full ">{children}</div>
      </div>
    </section>
  );
};

export default AuthFrame;
