import React from "react";
import LabelAndInputComponent from "./LabelAndInputComponent";
import ContactUsImg from "../../../../assets/Contact-us/contact-us-image.png";

const ContactUSFirstSection = () => {
  return (
    <section>
      <div className=" flex justify-between items-center">
        {/* left */}
        <div className="w-[627px] flex flex-wrap  gap-[25px] ">
          <LabelAndInputComponent
            name={"name"}
            textType={"text"}
            textPlaceholder={"User Name"}
          />
          <LabelAndInputComponent
            name={"email"}
            textPlaceholder={"User@gmail.com"}
            textType={"email"}
          />
          <LabelAndInputComponent
            name={"phone number"}
            textPlaceholder={"User Phone number"}
            textType={"number"}
          />
          <LabelAndInputComponent
            name={"message"}
            textPlaceholder={"User Message"}
            textType={"text"}
            className={"w-4/5"}
          />
          <button className=" text-neutral-50 text-sm font-medium font-sans  bg-neutral-700 rounded-lg w-[114px] h-[32px] border">
            Send
          </button>
        </div>
        {/* right */}
        <div>
          <div>
            {" "}
            <img src={ContactUsImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUSFirstSection;
