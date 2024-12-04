import React from "react";
import pexelsFauxelsAboutUsTwo from "../../../../assets/About us/pexels-fauxels-about-us-two.png";

const ThirdSectionChallengesInto = () => {
  return (
    <section>
      <div className=" gap-12 flex flex-col">
        <div>
          <h1 className="text-[37px] leading-[53px] xl:leading-[0px] xl:text-5xl font-sans font-semibold text-neutral-700">
            Turning Challenges into Opportunities
          </h1>
        </div>
        <div className=" w-full xl:h-[500px] overflow-hidden  rounded-sm">
          <img
            className=" object-[0%_5%] xl:object-cover w-full h-full"
            src={pexelsFauxelsAboutUsTwo}
            alt=""
          />
        </div>
        <div className=" flex-col lg:flex-row flex justify-between items-center gap-5">
          <span className=" text-base font-normal text-neutral-700 font-heading ">
            Our story is one of perseverance and growth. We’ve faced obstacles,
            embraced change, and used every challenge as an opportunity to learn
            and improve. This resilience is what makes us who we are today. Our
            story began with a simple idea: to make a meaningful difference in
            the lives of our customers. What started as a small venture has
            grown into a trusted name, built on hard work, innovation, and an
            unwavering commitment to excellence.
          </span>
          <span className=" text-base font-normal text-neutral-700 font-heading ">
            Our story is one of perseverance and growth. We’ve faced obstacles,
            embraced change, and used every challenge as an opportunity to learn
            and improve. This resilience is what makes us who we are today. Our
            story began with a simple idea: to make a meaningful difference in
            the lives of our customers. What started as a small venture has
            grown into a trusted name, built on hard work, innovation, and an
            unwavering commitment to excellence.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ThirdSectionChallengesInto;
