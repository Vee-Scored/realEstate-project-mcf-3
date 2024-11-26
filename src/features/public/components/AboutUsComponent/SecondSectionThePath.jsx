import React from "react";
import SectionTitleComponent from "../../../../components/SectionTitleComponent";
import AboutUs_Properties from "./AboutUs_Properties";

const SecondSectionThePath = ({ AboutUsPropertiesArray }) => {
  return (
    <section className=" flex flex-col gap-20 justify-between ">
      {/* first */}
      <div className=" flex  justify-between items-center">
        {/* left */}
        <div className=" w-[30%]">
          <h1 className=" text-neutral-700 text-[40px] leading-[65.8px] font-sans font-semibold">
            The Path to Where We Are Today
          </h1>
        </div>
        {/* right */}
        <div className=" text-base flex flex-col  text-neutral-500 w-[44%] mr-[2%]">
          <span>
            From humble beginnings to a trusted name in the industry, our
            journey reflects our dedication to innovation, quality, and customer
            satisfaction.
          </span>
          <span>
            Our story began with a simple idea: to make a meaningful difference
            in the lives of our customers. What started as a small venture has
            grown into a trusted name, built on hard work, innovation, and an
            unwavering commitment to excellence.
          </span>
        </div>
      </div>
      {/* second */}
      <div className="gap-8 flex flex-col">
        <SectionTitleComponent name={"Properties"} />
        <div className=" flex flex-wrap justify-between items-center ">
          {/* left */}
          {AboutUsPropertiesArray.map(({ header, text }, index) => (
            <AboutUs_Properties key={index} header={header} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSectionThePath;
