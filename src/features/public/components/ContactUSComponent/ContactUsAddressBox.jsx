import React from "react";

const ContactUsAddressBox = ({ icon = null, header, text }) => {
  return (
    <div className=" gap-6 flex justify-center items-center flex-col w-full border rounded-[19.47px] p-[51.92px] bg-neutral-50 border-neutral-300 h-[288px]">
      <div>{icon && icon}</div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <div>
          <h3 className=" font-semibold text-[32px] leading-[42px] font-heading text-neutral-700">
            {header}
          </h3>
        </div>
        <div className=" flex justify-center items-center">
          <span className=" text-base font-normal font-sans text-center text-neutral-700">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAddressBox;
