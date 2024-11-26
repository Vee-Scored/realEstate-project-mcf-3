import React, { useEffect, useRef, useState } from "react";
import ServiceForYouImg from "../../../../assets/HomeAssets/ServiceForYouImg.png";
import ServiceForYouStickerImg from "../../../../assets/HomeAssets/ServiceForYouStickerImg.png";
import ServiceForYouNumberCount from "./ServiceForYouNumberCount.jsx";
import SectionTitleComponent from "../../../../components/SectionTitleComponent.jsx";
import Container from "../../../../components/Container.jsx";
const ServiceForYou = () => {
  const [show, setShow] = useState(false);
  const pBarRef = useRef();
  // console.log(show);

  const updateScrollPosition = () => {
    const sectionPos = pBarRef.current.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  return (
    // <div className="w-[1440px] p-6">
    <section>
      <Container>
        <div className=" relative  flex gap-5 items-center">
          {/* Left */}
          <div className=" w-1/2 h-[510px]">
            <img
              className=" rounded-sm w-full h-full object-cover"
              src={ServiceForYouImg}
              alt=""
            />
          </div>
          {/* Right */}
          <div className=" w-1/2 h-[510px] flex flex-col gap-8">
            <SectionTitleComponent name={"Service For You"} />
            <div className=" w-[406px]">
              <h1 className=" text-[43px] text-neutral-700 font-notoSansLao leading-[53px] font-[600]">
                Your Trusted Property Partner
              </h1>
            </div>
            <div>
              <span className=" text-base font-[400] font-inter text-neutral-500">
                With years of experience and a commitment to excellence, we
                connect you with the best properties on the market. Our platform
                is designed to provide transparency, reliability, and
                personalized support every step of the way.
              </span>
            </div>
            <div
              ref={pBarRef}
              className=" gap-[25px] flex items-center justify-between"
            >
              {show && (
                <>
                  <ServiceForYouNumberCount
                    num={8}
                    Text={"Available Property"}
                  />
                  <ServiceForYouNumberCount num={6} Text={"Sold Property"} />
                  <ServiceForYouNumberCount num={2} Text={"Trusted Clients"} />
                </>
              )}
            </div>
          </div>
          <div className="absolute left-[52%] -bottom-7">
            <img className=" " src={ServiceForYouStickerImg} alt="" />
          </div>
        </div>
      </Container>
    </section>
    // </div>
  );
};

export default ServiceForYou;
