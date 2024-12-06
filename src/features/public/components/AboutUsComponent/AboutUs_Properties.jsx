import React from "react";
import { motion } from "framer-motion";

const AboutUs_Properties = ({ header, text }) => {
  return (
    <div className=" md:w-[44%] md:h-[240px] w-[617px] gap-8  flex flex-col ">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-2xl font-semibold font-sans text-neutral-700"
        >
          {header}
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" text-base font-normal text-neutral-500 font-heading"
      >
        <span>{text}</span>
      </motion.div>
    </div>
  );
};

export default AboutUs_Properties;
