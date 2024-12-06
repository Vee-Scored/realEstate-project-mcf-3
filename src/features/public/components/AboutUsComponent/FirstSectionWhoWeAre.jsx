import ServiceForYouNumberCount from "../ServiceForYouSection/ServiceForYouNumberCount";
import pexelsFauxels from "../../../../assets/About us/pexels-fauxels.png";
import { motion } from "framer-motion";

const FirstSectionWhoWeAre = ({ show, pBarRef }) => {
  return (
    <section>
      <div className=" flex justify-between gap-6 xl:gap-0 flex-col xl:flex-row md:flex-row items-center ">
        {/* left */}
        <div className=" w-full md:w-[414px] xl:w-[628px] flex flex-col gap-5">
          <div className=" w-full xl:w-[520px]  flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=" flex flex-col font-semibold  font-sans text-[30px] leading-[42px] xl:text-[48px] xl:leading-[53px] text-neutral-700"
            >
              <h1 className=" ">Who We Are</h1>
              <h1>and What Drives Us</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className=" text-base text-neutral-500 font-normal font-heading">
                A team of passionate professionals committed to delivering
                exceptional services and making a positive impact in the
                community.We believe our success is intertwined with the
                communities we serve.{" "}
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            ref={pBarRef}
            className=" gap-[25px] flex items-center justify-between"
          >
            {show && (
              <>
                <ServiceForYouNumberCount num={8} Text={"Available Property"} />
                <ServiceForYouNumberCount num={6} Text={"Sold Property"} />
                <ServiceForYouNumberCount num={2} Text={"Trusted Clients"} />
              </>
            )}
          </motion.div>
        </div>
        {/* right */}
        <div className="  md:w-1/2 ">
          <div className=" md:w-full">
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-full md:object-cover rounded-sm"
              src={pexelsFauxels}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSectionWhoWeAre;
