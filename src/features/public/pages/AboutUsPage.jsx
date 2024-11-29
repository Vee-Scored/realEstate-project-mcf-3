import React, { useEffect, useRef, useState } from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";

import FirstSectionWhoWeAre from "../components/AboutUsComponent/FirstSectionWhoWeAre";
import SecondSectionThePath from "../components/AboutUsComponent/SecondSectionThePath";
import ThirdSectionChallengesInto from "../components/AboutUsComponent/ThirdSectionChallengesInto";
import SecBreadCrumb from "../../../components/SecBreadCrumb";
const AboutUsPage = () => {
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
  const AboutUsPropertiesArray = [
    {
      header: "The Roots of Our Passion",
      text: "Founded with a deep passion for property industry, we’ve spent years perfecting our craft, overcoming challenges, and staying true to our core values. Every milestone in our journey reflects our dedication to delivering the best to those we serve.",
    },
    {
      header: "Growing Together with Our Community",
      text: "We believe our success is intertwined with the communities we serve. Since day one, we’ve made it our mission to not only provide exceptional [services/products] but also to give back and grow alongside those who trust us",
    },
  ];
  return ( 
    <section className="flex flex-col mb-20 gap-24">
      <BreadCrumb className={'hidden md:block'} currentPage={"about-us"} />
      <Container>
      <SecBreadCrumb currentPageTitle={'about-us'}  className={'md:hidden'} />
        <div className=" flex flex-col justify-between gap-40">
          {/* first section */}
          <FirstSectionWhoWeAre show={show} pBarRef={pBarRef} />

          {/* second section */}
          <SecondSectionThePath
            AboutUsPropertiesArray={AboutUsPropertiesArray}
          />
          {/* third section */}
          <ThirdSectionChallengesInto />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsPage;
