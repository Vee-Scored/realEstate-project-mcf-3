import React, { useRef } from "react";
import Container from "../../../components/Container";
import Carousel from "react-multi-carousel";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import leftArrow from "../../../assets/HomeAssets/leftArrow.png";
import rightArrow from "../../../assets/HomeAssets/rightArrow.png";
import openQuote from "../../../assets/HomeAssets/openQuote.png";
import star from "../../../assets/HomeAssets/star.png";
import steadyGirl from "../../../assets/HomeAssets/steady-girl.jpg";
import manYellowBg from "../../../assets/HomeAssets/man-yellow-bg.jpg";
import redGirl from "../../../assets/HomeAssets/red-girl.jpg";
import whiteGirl from "../../../assets/HomeAssets/white-girl.jpg";

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
  
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
  },
};

const TestimonialData = [
  {
    id : 1,
    image : manYellowBg,
    name : "Alexander Jameson",
    badge : "Happy Homeowner",
    comment : `"Working with Estatela Property was a game-changer! The platform was
          easy to use, and their team guided me every step of the way. I found
          my dream condo in no time. Highly recommended!"`
  },
  {
    id : 2,
    image : steadyGirl,
    name : "Alexander Jameson",
    badge : "Happy Homeowner",
    comment : `"Working with Estatela Property was a game-changer! The platform was
          easy to use, and their team guided me every step of the way. I found
          my dream condo in no time. Highly recommended!"`
  },
  {
    id : 3,
    image : whiteGirl,
    name : "Alexander Jameson",
    badge : "Happy Homeowner",
    comment : `"Working with Estatela Property was a game-changer! The platform was
          easy to use, and their team guided me every step of the way. I found
          my dream condo in no time. Highly recommended!"`
  },
  {
    id : 4,
    image : redGirl,
    name : "Alexander Jameson",
    badge : "Happy Homeowner",
    comment : `"Working with Estatela Property was a game-changer! The platform was
          easy to use, and their team guided me every step of the way. I found
          my dream condo in no time. Highly recommended!"`
  },
  {
    id : 5,
    image : manYellowBg,
    name : "Alexander Jameson",
    badge : "Happy Homeowner",
    comment : `"Working with Estatela Property was a game-changer! The platform was
          easy to use, and their team guided me every step of the way. I found
          my dream condo in no time. Highly recommended!"`
  }

]
const TestimonialCard = ({name,image,comment,badge}) => {
  return (
    <div className='w-full rounded-lg font-heading flex flex-col justify-between p-5 h-[304px] border-2 border-gray-200 '>
      <div>
        <img className="w-[51px] h-[37px]" src={openQuote} alt="" />
      </div>
      <div className="h-[84px]">
        <p className=" text-[12px] leading-5 lg:text-lg font-sans text-neutral-500 ">
          {comment}
        </p>
      </div>
      <div className="h-[79px] gap-5 flex">
        <div>
          <img className="size-[79px] rounded-[8px]" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg  leading-[28px]">{name}</h3>
          <p className="text-primary-500 text-[10px] leading-[12px]">
            {badge}
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
      <Container className={"flex flex-col gap-5 lg:gap-8 mb-16"}>
        <SectionTitleComponent name={"Testimonials"} />
        <h1 className="text-[35px]  lg:text-[50px] leading-[38px] xl:text-[60px] lg:leading-[50px] xl:leading-[65px] font-[600] col-span-4  md:leading-[37px]  text-neutral-700 font-notoSansLao">
          What Our Clients Say
        </h1>

        <div className="flex">
          <div className="lg:w-1/2 w-full ">
            <p className="font-[400]  text-[11px] md:text-lg font-sans text-neutral-500">
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

      <Container   className={"lg:!p-0"}>
        <Carousel
          sliderClass='md:gap-5'
          arrows={false}
          infinite={true}
          ref={carouselRef}
          responsive={responsive}
        >
          {
            TestimonialData.map(t => <TestimonialCard name={t.name} image={t.image} comment={t.comment} badge={t.badge} />)
          }
        </Carousel>
      </Container>
    </div>
  );
};

export default HomeTestimonial;
