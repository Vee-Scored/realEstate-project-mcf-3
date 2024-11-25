import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";

const AboutUsPage = () => {
  return (
    <section className="flex flex-col mb-20 gap-20">
      <BreadCrumb currentPage={"about-as"} />
    </section>
  );
};

export default AboutUsPage;
