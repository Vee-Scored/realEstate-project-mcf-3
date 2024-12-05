import React from "react";
import pexelsFauxelsAboutUsTwo from "../../../../assets/About us/pexels-fauxels-about-us-two.png";

import { motion } from "framer-motion";

const ThirdSectionChallengesInto = () => {
  return (
    <section>
      <div className=" gap-12 flex flex-col">
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[37px] leading-[53px] xl:leading-[0px] xl:text-5xl font-sans font-semibold text-neutral-700"
          >
            Turning Challenges into Opportunities
          </motion.h1>
        </div>
        <div className=" w-full xl:h-[500px] overflow-hidden  rounded-sm">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className=" object-[0%_5%] xl:object-cover w-full h-full"
            src={pexelsFauxelsAboutUsTwo}
            alt=""
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" flex-col lg:flex-row flex justify-between items-center gap-5"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default ThirdSectionChallengesInto;
