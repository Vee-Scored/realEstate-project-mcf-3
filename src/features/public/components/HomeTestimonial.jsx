import React, { useRef } from "react";
import Container from "../../../components/Container";
import Carousel from "react-multi-carousel";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import leftArrow from "../../../assets/HomeAssets/leftArrow.png";
import rightArrow from "../../../assets/HomeAssets/rightArrow.png";
import openQuote from "../../../assets/HomeAssets/openQuote.png";
import star from "../../../assets/HomeAssets/star.png";
import manYellowBg from "../../../assets/HomeAssets/man-yellow-bg.jpg";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
    breakpoint: { max: 800, min: 0 },
    items: 1
  }
};

const TestimonialCard = () => {
  return (

    <div className="w-[628px] rounded-lg font-heading flex flex-col justify-between p-5 h-[304px] border-2 border-gray-200 ">

    <div className='w-full  rounded-lg font-heading flex flex-col justify-between p-5 h-[304px] border-2 border-gray-200 '>

      <div>
        <img className="w-[51px] h-[37px]" src={openQuote} alt="" />
      </div>
      <div className="h-[84px]">
        <p className=" text-lg text-neutral-500 leading-7">
          "Working with Estatela Property was a game-changer! The platform was
          easy to use, and their team guided me every step of the way. I found
          my dream condo in no time. Highly recommended!"
        </p>
      </div>
      <div className="h-[79px] gap-5 flex">
        <div>
          <img className="size-[79px] rounded-[8px]" src={manYellowBg} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg  leading-[28px]">Alexander Jameson</h3>
          <p className="text-primary-500 text-[10px] leading-[12px]">
            Happy Homeowner
          </p>
          <div className="flex gap-3">
            <img className="size-[24px]" src={star} alt="star" />
            <img className="size-[24px]" src={star} alt="star" />
            <img className="size-[24px]" src={star} alt="star" />
            <img className="size-[24px]" src={star} alt="star" />
            <img className="size-[24px]" src={star} alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeTestimonial = () => {
  const carouselRef = useRef(null);
  return (
    <div className="overflow-hidden ">
      <Container className={"flex flex-col gap-8 mb-16"}>
        <SectionTitleComponent name={"Testimonials"} />
        <h1 className="text-5xl leading-10 font-semibold text-neutral-700 font-heading">
          What Our Clients Say
        </h1>

        <div className="flex">
          <div className="w-1/2 ">
            <p>
              Hear from our satisfied clients who found their dream homes with
              us. Their success stories are a testament to our dedication,
              trust, and exceptional service.
            </p>
          </div>
          <div className="w-1/2 flex justify-end gap-8 items-end ">
            <button onClick={() => carouselRef.current.previous()}>
              <img src={leftArrow} alt="left" />
            </button>
            <button onClick={() => carouselRef.current.next()}>
              <img src={rightArrow} alt="right" />
            </button>
          </div>
        </div>
      </Container>


      <Container className={"!p-0"}>
        <Carousel
          arrows={false}
          infinite={true}
          ref={carouselRef}
          responsive={responsive}
        >

        
        <Container className={"lg:!p-0"}>
        <Carousel sliderClass='lg:gap-5'    arrows={false} infinite={true} ref={carouselRef} responsive={responsive} >

          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Carousel>
      </Container>
    </div>
  );
};

export default HomeTestimonial;
