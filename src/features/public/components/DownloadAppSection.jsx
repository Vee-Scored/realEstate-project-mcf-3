import React from "react";
import Container from "../../../components/Container";
import image from "../../../assets/HomeAssets/download-image.jpg";
import Home from "../../../assets/FooterIcons/Home.svg";
import googleplay from "../../../assets/HomeAssets/googleplay.svg";
import appstore from "../../../assets/HomeAssets/appstore.svg";
import { motion } from "framer-motion";

const DownloadAppSection = () => {
  return (
    <Container className={"w-full"}>
      <section className="sm:flex items-center justify-between gap-10">
        <div className="lg:w-[439px] w-full flex flex-col gap-5 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl  text-blue-500 flex items-center gap-1"
          >
            <img src={Home} className="size-8" />
            <p className="font-semibold font-sans">Estatela</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-sans text-3xl text-neutral-700 font-semibold"
          >
            Start your journey now!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="font-sans text-sm md:text-lg text-neutral-500 leading-6"
          >
            Browse verified listings, schedule viewings, and connect with
            agents—all from your phone. Download now and start your journey
            today!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="bg-neutral-700 rounded-lg text-white p-4 hover:bg-neutral-600 duration-150"
          >
            Download Our App
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            className="flex gap-[25px] items-center justify-between"
          >
            <button>
              <img src={googleplay} />
            </button>

            <button>
              <img src={appstore} />
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={image} className="lg:w-[687px] hidden sm:block" />
        </motion.div>
      </section>
    </Container>
  );
};

export default DownloadAppSection;
