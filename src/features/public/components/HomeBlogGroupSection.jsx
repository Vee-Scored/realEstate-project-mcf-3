import React from "react";
import ViewAllBtn from "../../../components/ViewAllBtn";
import Container from "../../../components/Container";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useBlogStore from "../../../stores/useBlogStore";
import BlogCard from "./blog/BlogCard";
import SeeMoreBtn from "./SeeMoreBtn";

import { motion } from "framer-motion";

const HomeBlogGroupSection = () => {
  const { blogs } = useBlogStore();
  const options = {
    delay: 3000,
    disableOnInteraction: false,
  };
  const breakPoint = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };
  return (
    <Container>
      <section className="flex flex-col items-start  gap-14 ">
        <div className=" flex flex-col items-start gap-8  w-full ">
          {/* <div className="flex items-center gap-3">
          <img src={Line101} alt="line" />
          <span className="text-sm font-medium text-blue-500">Blog</span>
        </div> */}

          <SectionTitleComponent name={"Blog"} />
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl leading-10 font-semibold text-neutral-700 font-heading"
          >
            Read Our Sight
          </motion.h1>
          <div className="flex justify-between items-center w-full">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="font-normal text-lg text-neutral-500"
            >
              Explore expert tips, market trends, and home-buying guides in our
              blog <br />
              section. Start reading today.
            </motion.p>
            <ViewAllBtn
              path={"/blogs"}
              className={
                "!text-neutral-500 bg-white border   border-neutral-500 hover:bg-neutral-500 hover:!text-white"
              }
            >
              View all
            </ViewAllBtn>
          </div>
        </div>
        <Container className={"!px-0"}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className=" gap-5 "
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              autoplay={options}
              loop={true}
              breakpoints={breakPoint}
            >
              {blogs?.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <BlogCard blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <SeeMoreBtn className={"my-2 rounded-md md:hidden"} />
        </Container>
      </section>
    </Container>
  );
};

export default HomeBlogGroupSection;
