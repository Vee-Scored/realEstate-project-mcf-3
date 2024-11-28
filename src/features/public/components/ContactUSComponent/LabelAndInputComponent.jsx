import React from "react";

const LabelAndInputComponent = ({
  name,
  textType,
  textPlaceholder,
  className,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 w-[301px] ${className ? className : ""}`}
    >
      <label
        htmlFor={name}
        className=" font-heading font-normal text-base text-neutral-700 first-letter:uppercase"
      >
        {name}
      </label>
      <input
        id={name}
        className=" rounded-sm border py-2 px-3  border-neutral-200 text-sm font-normal font-heading"
        type={textType}
        placeholder={textPlaceholder}
      />
    </div>
  );
};

export default LabelAndInputComponent;
