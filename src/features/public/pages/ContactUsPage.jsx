import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { SlLocationPin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import ContactUSFirstSection from "../components/ContactUSComponent/ContactUSFirstSection";
import ContactUsSecondSection from "../components/ContactUSComponent/ContactUsSecondSection";
import ContactUSThirdSection from "../components/ContactUSComponent/ContactUSThirdSection";
import SecBreadCrumb from "../../../components/SecBreadCrumb";

const ContactUsPage = () => {
  const contactBox = [
    {
      icon: <SlLocationPin className=" text-4xl text-neutral-700" />,
      header: "Address",
      text: "1234 Maple Avenue, Suite 567 Sunnyville, CA 90210",
    },

    {
      icon: <MdMailOutline className=" text-4xl text-neutral-700" />,
      header: "Mail",
      text: "contact@estatela.com",
    },
    {
      icon: <BsTelephone className=" text-4xl text-neutral-700" />,
      header: "Phone",
      text: "(555) 123-4567",
    },
  ];
  return (
    <section className="flex flex-col  mb-20 gap-24">
       <BreadCrumb className={'hidden md:block'} currentPage={"Contact-us"} />
      <SecBreadCrumb currentPageTitle={'contact-us'}  className={'md:hidden'} />
    <Container>
        <div className=" flex flex-col gap-20">
          {/* first section */}
          <ContactUSFirstSection />
          {/* second section */}
          <ContactUsSecondSection contactBox={contactBox} />
          {/* third section */}
          <ContactUSThirdSection  />
        </div>
      </Container>
    </section>
  );
};

export default ContactUsPage;
