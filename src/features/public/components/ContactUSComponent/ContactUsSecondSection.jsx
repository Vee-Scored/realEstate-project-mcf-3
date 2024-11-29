import React from "react";
import ContactUsAddressBox from "./ContactUsAddressBox";

const ContactUsSecondSection = ({ contactBox }) => {
  return (
    <section>
      <div className=" gap-12 flex flex-col">
        {/*header div */}
        <div className=" w-[625px] hidden xl:block">
          <div>
            <h1 className=" text-[40px] leading-[60.5px] font-heading font-semibold text-neutral-700">
              Get in Touch with Us
            </h1>
          </div>
          <div className="w-full">
            <div className=" font-normal text-base text-neutral-700 font-sans flex flex-col">
              <span>
                Have questions or need assistance? We're here to help! Reach
              </span>
              <span>
                out to us anytime, and our friendly team will get back to you as
                soon as possible
              </span>
            </div>
          </div>
        </div>
        {/* footer div */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xl:grid-cols-3">
          {contactBox.map(({ icon, header, text }, index) => (
            <ContactUsAddressBox
              key={index}
              icon={icon}
              header={header}
              text={text}
            />
          ))}

            <ContactUsAddressBox           
              header={"Get in touch"}
              text={"Have questions or need assistance? We're here to help!"}
            />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSecondSection;
