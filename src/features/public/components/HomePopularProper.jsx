import React from "react";
import Container from "../../../components/Container";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import ViewAllBtn from "../../../components/ViewAllBtn";
import PopularProperCard from "./propertySectionCompo/PopularProperCard";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import SeeMoreBtn from "./SeeMoreBtn";
// import data from "../../../../data.json";

import useCardList from "../../../stores/useCardList";

const HomePopularProper = () => {
  const { cards } = useCardList();

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(cards.slice(0, 6));
  }, []);

  return (
    <section>
      <Container className={" flex flex-col gap-14"}>
        <div className=" flex flex-col gap-5 lg:gap-8">
          <SectionTitleComponent name={"Properties"} />
          <div className=" flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[35px]  lg:text-[50px] leading-[38px] xl:text-[60px] lg:leading-[50px] xl:leading-[65px] font-[600] col-span-4  md:leading-[37px]  text-neutral-700 font-notoSansLao"
            >
              Popular Properties
            </motion.h1>
            <ViewAllBtn className={"hidden md:block py-1 px-2"}>
              View all
            </ViewAllBtn>
          </div>
        </div>
        {/* Card Section  */}
        <section className=" flex flex-col gap-5">
          <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4  justify-between items-center">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <PopularProperCard property={property} />
              </motion.div>
            ))}

            <SeeMoreBtn className={"rounded-md md:hidden"} />
          </div>

          <div className="hidden md:flex my-2 justify-center items-center ">
            <ViewAllBtn path={"/properties"}>View all</ViewAllBtn>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default HomePopularProper;
