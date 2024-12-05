import { HiX } from "react-icons/hi";
import AuthPhoto from "../../../assets/AuthAsset/AuthPhoto.jpg";
import AvatarOne from "../../../assets/AuthAsset/AvatarOne.png";
import AvatarTwo from "../../../assets/AuthAsset/AvatarTwo.png";
import AvatarThree from "../../../assets/AuthAsset/AvatarThree.png";
import AvatarFour from "../../../assets/AuthAsset/AvatarFour.png";
import Container from "../../../components/Container";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import { LucideX } from "lucide-react";
const RegisterModal = ({ isOpen, setIsOpen }) => {
  const avatars = [AvatarOne, AvatarTwo, AvatarThree, AvatarFour];
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`${
        isOpen ? "fixed" : "hidden"
      } overflow-y-auto overflow-x-hidden  top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0  max-h-full bg-neutral-900 bg-opacity-50 py-4  flex`}
    >
      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-2   bg-white flex  rounded-lg shadow dark:bg-gray-700"
      >
        {/* Modal body */}
        <div className=" grid md:grid-cols-2 grid-cols-1 xl:w-[1200px] xl:h-[700px] justify-between   ">
          {/* img  */}
          <div className=" md:inline-block hidden bg-auth-bg bg-cover bg-center bg-no-repeat ">
            <div className=" h-full flex flex-col p-8  ">
              <div className=" mt-auto py-8 flex flex-col gap-8 ">
                <div className=" flex flex-col gap-8">
                  <h1 className=" text-4xl font-bold font-heading leading-[59.22px] text-white  ">
                    Let’s Create <br /> Our Dream And Future
                  </h1>
                  <p className=" text-neutral-50 leading-6 text-sm pe-48">
                    Join us today to access exclusive features, personalize your
                    experience, and stay connected. Signing up is quick and
                    easy!
                  </p>
                </div>
                <div className=" flex gap-8 items-center">
                  <div className=" flex items-center -space-x-3">
                    {/* DRY ( Don't Repeat Yourself ) */}
                    {avatars.map((avatar, index) => (
                      <img
                        className=" size-[60px]"
                        key={index}
                        src={avatar}
                        alt=""
                      />
                    ))}
                  </div>
                  <p className=" text-neutral-50 font-medium tracking-wide text-xl">
                    1.5K+ Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <div>
            <div className="  flex flex-col justify-between relative  ">
              <button
                className=" ms-auto my-2 mx-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm"
                onClick={() => setIsOpen(false)}
              >
                <LucideX />
              </button>
              <div className=" flex justify-center bg-white items-center rounded-lg  ">
                <RegisterForm />
              </div>
            </div>
          </div>
          {/* form  */}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
