import React from "react";
import avatarImage1 from "../../../assets/Avatars/AvatarImage-1.png";
import avatarImage2 from "../../../assets/Avatars/AvatarImage-2.png";
import avatarImage3 from "../../../assets/Avatars/AvatarImage-3.png";
import avatarImage4 from "../../../assets/Avatars/AvatarImage-4.png";
import avatarImage5 from "../../../assets/Avatars/AvatarImage-5.png";
import bgImg from "../../../assets/meetOurTeam/meetOurTeamBg.jpg";
import { Link } from "react-router-dom";
const avatars = [
  avatarImage5,
  avatarImage4,
  avatarImage1,
  avatarImage2,
  avatarImage3,
];

const MeetOurTeam = () => {
  return (
    <section className=" bg-[url('/src/assets/meetOurTeam/meetOurTeamBg.jpg')] bg-no-repeat bg-cover  py-10 my-16 lg:py-16">
      {/* Content Container */}
      <div className=" flex flex-col gap-12 max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center ">
          <h2 className="text-2xl lg:text-4xl font-bold text-blue-600 mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm lg:text-base font-heading font-medium text-black mt-2">
            Let me know if you'd like specific questions
          </p>
        </div>

        {/* Team Section */}
        <div className="flex flex-col items-center gap-5">
          <div className=" top-1/2 transform -translate-y-1/2 z-10">
            <Link
              to="/contact-us"
              className="bg-[#18181B] text-white px-6 py-2 rounded-md hover:opacity-90 shadow-lg"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex justify-center items-center">
            {avatars.map((src, index) => (
              <div
                key={index}
                className={`${
                  index === 2
                    ? "w-[96px] h-[96px] lg:w-[150px] lg:h-[150px]"
                    : "w-[72px] h-[72px] lg:w-[100px] lg:h-[100px]"
                }  rounded-full overflow-hidden border-2 border-white -mx-2`}
              >
                <img
                  src={src}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
