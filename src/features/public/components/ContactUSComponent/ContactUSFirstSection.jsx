import React from "react";
import LabelAndInputComponent from "./LabelAndInputComponent";
import ContactUsImg from "../../../../assets/Contact-us/contact-us-image.png";
import LabelAndTextAreaComponent from "./LabelAndTextAreaComponent";

const ContactUSFirstSection = () => {
  return (
    <section>
      <div className=" flex flex-col md:flex-row justify-between items-center">
        {/* left */}
        <div className="lg:w-[627px] grid grid-cols-4  gap-5 w-full ">
          <LabelAndInputComponent
            className={"col-span-2"}
            name={"name"}
            textType={"text"}
            textPlaceholder={"Please fill your name"}
          />
          <LabelAndInputComponent
            className={"col-span-2"}
            name={"email"}
            textPlaceholder={"User@gmail.com"}
            textType={"email"}
          />
          <LabelAndInputComponent
            className={"col-span-4"}
            name={"phone number"}
            textPlaceholder={"Please fill your phone number"}
            textType={"number"}
          />
          <LabelAndTextAreaComponent
            name={"message"}
            textPlaceholder={"User Message"}
            textType={"text"}
            className={" col-span-4 "}
          />
          <button className=" text-neutral-50 text-sm font-medium font-sans  bg-neutral-700 rounded-lg w-[114px] h-[32px] border">
            Send
          </button>
        </div>
        {/* right */}
        <div>
          <img src={ContactUsImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactUSFirstSection;
