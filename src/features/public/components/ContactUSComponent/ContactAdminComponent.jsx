import React from "react";
import ContactAdminInputLable from "./ContactAdminInputLable";
import useContactAdminSend from "../../hooks/useContactAdminSend";
import { Link, useNavigate } from "react-router-dom";

const ContactAdminComponent = () => {
  const { handleSend, handleSubmit, register, isSubmitting } =
    useContactAdminSend();
  const nav = useNavigate();

  return (
    <form
      className=" flex flex-col justify-between gap-[10px]"
      onSubmit={handleSubmit(handleSend)}
    >
      <ContactAdminInputLable
        textType={"email"}
        name={"email"}
        register={register}
        placeholder={"user@gamil.com"}
      />

      <ContactAdminInputLable
        name={"Phone Number"}
        register={register}
        textType={"tel"}
        placeholder={"**********"}
      />

      <ContactAdminInputLable
        register={register}
        name={"Rome Code"}
        textType={"text"}
        placeholder={"ID1234567"}
      />
      <ContactAdminInputLable
        register={register}
        name={"Description"}
        textType={"text"}
        placeholder={"Please include all information relevant to your issue."}
        classNameInput={"py-2 px-3 h-[63px]"}
      />

      <div className=" flex justify-between items-center">
        <button
          // disabled={isSubmitting}
          onClick={() => nav(-1)}
          className=" font-heading bg-white py-2 px-3 rounded-sm text-sm text-neutral-700 flex disabled:pointer-events-none disabled:opacity-80 justify-center items-center gap-3 "
        >
          Cancle
          {/* {isSubmitting && <ButtonSpinner />} */}
        </button>
        {/*  */}
        <button
          type="submit"
          //   disabled={isSubmitting}
          className=" font-heading bg-neutral-700 py-2 px-3 rounded-md text-sm text-neutral-50 flex disabled:pointer-events-none disabled:opacity-80 justify-center items-center gap-3 "
        >
          Submit
          {/* {isSubmitting && <ButtonSpinner />} */}
        </button>
      </div>
    </form>
  );
};

export default ContactAdminComponent;
