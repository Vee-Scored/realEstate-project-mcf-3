import React from "react";
import ContactAdminComponent from "../components/ContactUSComponent/ContactAdminComponent";
import { Toaster } from "react-hot-toast";

const ContactAdminPage = () => {
  return (
    <section className=" flex justify-center items-center ">
      <Toaster position="top-right" />
      <div className=" p-6 w-[412px] flex flex-col justify-between gap-8 rounded-md border">
        <div className=" flex flex-col justify-between  gap-6 ">
          <h1 className=" font-sans  text-[16px] leading-[19.36px] font-medium">
            Let’s Connect – We’re Here to Help!
          </h1>
          <span className="font-heading font-normal text-base text-neutral-500">
            Please fill out the form below, and a member of our team will get
            back to you shortly
          </span>
        </div>
        <ContactAdminComponent />
      </div>
    </section>
  );
};

export default ContactAdminPage;
