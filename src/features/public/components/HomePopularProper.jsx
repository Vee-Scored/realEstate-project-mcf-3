import React from "react";
import Container from "../../../components/Container";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import ViewAllBtn from "../../../components/ViewAllBtn";
import PopularProperCard from "./propertySectionCompo/PopularProperCard";
import data from "../../../../data.json";
import { useEffect, useState } from "react";

const HomePopularProper = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(data.slice(0, 6));
  }, []);

  return (
    <section>
      <Container className={" flex flex-col gap-14"}>
        <div className=" flex flex-col gap-5 lg:gap-8">
          <SectionTitleComponent name={"Properties"} />
          <div className=" flex justify-between items-center">
            <h1 className="text-[35px]  lg:text-[50px] leading-[38px] xl:text-[60px] lg:leading-[50px] xl:leading-[65px] font-[600] col-span-4  md:leading-[37px]  text-neutral-700 font-notoSansLao">
              Popular Properties
            </h1>
            <ViewAllBtn className={"hidden md:block py-1 px-2"}>
              View all
            </ViewAllBtn>
          </div>
        </div>
        {/* Card Section  */}
        <section className=" flex flex-col gap-5">
          <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4  justify-between items-center">
            {properties.map((property) => (
              <PopularProperCard key={property.id} property={property} />
            ))}
          </div>
          <div className=" my-2 flex justify-center items-center ">
            <ViewAllBtn path={"/properties"}>View all</ViewAllBtn>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default HomePopularProper;
