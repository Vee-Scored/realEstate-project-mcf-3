import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../../components/Container";
import { blogs } from "../../../../components/blog/constant";
import BlogCard from "../../../../components/blog/BlogCard";
const BlogDetailCardGroup = () => {
  const options = {
    delay: 3000,
    disableOnInteraction: false,
  };
  const breakPoint = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };
  return (
    <section className="  min-h-dvh py-16">
      <div className=" flex flex-col gap-10">
        <div className="flex justify-center items-center gap-5 flex-col">
          <div className=" px-4 py-2 bg-neutral-100 shadow-sm inline-block">
            <h3 className=" text-neutral-900 font-heading text-4xl font-semibold">
              Similar Blog
            </h3>
          </div>
          <p className=" text-base text-neutral-700 max-w-[659px] text-center">
            Explore more topics tailored to your interests! From expert tips to
            helpful insights, these posts are handpicked to keep you informed
            and inspired.
          </p>
        </div>
        <div>
          <Container className={"!px-0"}>
            <div className=" gap-5 ">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                autoplay={options}
                loop={true}
                breakpoints={breakPoint}
              >
                {blogs.map((blog) => (
                  <SwiperSlide key={blog.id}>
                    <BlogCard blog={blog} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailCardGroup;
