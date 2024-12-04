import React, { useEffect, useRef, useState } from "react";
import ServiceForYouImg from "../../../../assets/HomeAssets/ServiceForYouImg.png";
import ServiceForYouStickerImg from "../../../../assets/HomeAssets/ServiceForYouStickerImg.png";
import ServiceForYouNumberCount from "./ServiceForYouNumberCount.jsx";
import SectionTitleComponent from "../../../../components/SectionTitleComponent.jsx";
import Container from "../../../../components/Container.jsx";
import { motion } from "framer-motion";

const ServiceForYou = () => {
  const [show, setShow] = useState(false);
  const pBarRef = useRef();

  useEffect(() => {
    const updateScrollPosition = () => {
      const sectionPos = pBarRef.current.getBoundingClientRect().top;
      const screenPos = window.innerHeight;
      if (sectionPos < screenPos) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <section>
      <Container>
        <div className=" relative  md:flex gap-5 items-stretch">
          {/* Left */}
          <div className=" w-full my-2  md:m-0 md:w-1/2 ">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className=" rounded-sm w-full h-full object-cover"
              src={ServiceForYouImg}
              alt=""
            />
          </div>
          {/* Right */}
          <div className="w-full md:w-1/2  flex flex-col gap-5 lg:gap-8">
            <SectionTitleComponent name={"Service For You"} />
            <div className=" grid grid-cols-5">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-[35px]  lg:text-[50px] leading-[38px] xl:text-[60px] lg:leading-[50px] xl:leading-[65px] font-[600] col-span-4  md:leading-[37px]  text-neutral-700 font-notoSansLao "
              >
                Your Trusted Property Partner
              </motion.h1>
              <div className="hidden md:block col-span-1">
                <img className="" src={ServiceForYouStickerImg} alt="" />
              </div>
            </div>
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="  font-[400] leading-2 text-[11px] lg:text-lg font-inter text-neutral-500"
              >
                With years of experience and a commitment to excellence, we
                connect you with the best properties on the market. Our platform
                is designed to provide transparency, reliability, and
                personalized support every step of the way.
                <br />
                <br />
                At estatela, we understand that buying, selling, or renting a
                property is one of the most significant decisions you’ll make.
                That’s why trust is the cornerstone of our service . we’re here
                to turn your real estate goals into a reality—built on trust and
                integrity.
              </motion.span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              ref={pBarRef}
              className=" gap-[25px] flex items-center justify-between"
            >
              {show && (
                <>
                  <div>
                    <ServiceForYouNumberCount
                      num={8}
                      Text={"Available Property"}
                    />
                  </div>
                  <div>
                    <ServiceForYouNumberCount num={6} Text={"Sold Property"} />
                  </div>
                  <div>
                    <ServiceForYouNumberCount
                      num={2}
                      Text={"Trusted Clients"}
                    />
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceForYou;
