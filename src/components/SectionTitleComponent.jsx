import React from "react";
import { motion } from "framer-motion";
import Line101 from "../assets/HomeAssets/Line101.png";

const SectionTitleComponent = ({ name }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <motion.img
          src={Line101}
          alt="line"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          className="text-[16px] leading-[19.36px] text-primary-500"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {name}
        </motion.p>
      </div>
    </>
  );
};

export default SectionTitleComponent;
