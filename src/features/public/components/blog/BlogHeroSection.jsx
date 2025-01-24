import React from "react";
import blogHero from "../../../../assets/blogAssets/blogHero.png";
import SectionTitleComponent from "../../../../components/SectionTitleComponent";
import ViewAllBtn from "../../../../components/ViewAllBtn";
import { motion } from "framer-motion";
const BlogHeroSection = () => {
  return (
    <section className=" grid  lg:grid-cols-2  lg:grid-flow-col  items-center gap-10 py-10  mb-10 lg:mb-20 ">
      <div className="order-2 lg:order-1  ">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={blogHero}
          alt="blogHeroImage"
          className="w-full object-cover object-center h-full"
        />
      </div>
      <div className=" order-1 lg:order-2 ">
        <div className="flex flex-col items-start gap-6">
          <SectionTitleComponent name={"Blog"} />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl leading-[42px] md:leading-[53px] font-semibold text-neutral-700 font-heading"
          >
            14,000 homes planned for September 2026
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-normal text-base text-neutral-500"
          >
            Listed date : 23 Nov 2024
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="font-normal text-base text-neutral-700"
          >
            As the October BTO exercise draws to a close, the government
            has unveiled plans for the upcoming February launch, which includes
            a major project in Woodlands. This project will be the largest among
            the February As the October BTO exercise draws to a close, the
            government has unveiled plans for the upcoming February
            launch, which includes a major project in Woodlands. This project
            will be the largest among the February .....
          </motion.p>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <ViewAllBtn
              className={"bg-neutral-700 text-white !px-12 !py-4 !text-base"}
              path={"/blogs/estate/home-condo"}
            >
              See More
            </ViewAllBtn>
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
