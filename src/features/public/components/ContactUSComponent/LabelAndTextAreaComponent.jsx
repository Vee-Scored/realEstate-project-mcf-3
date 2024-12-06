import React from "react";

const LabelAndTextAreaComponent = ({
  name,
  textType,
  textPlaceholder,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className ? className : ""}`}>
      <label
        htmlFor={name}
        className=" font-heading font-normal text-base text-neutral-700 first-letter:uppercase"
      >
        {name}
      </label>
      <textarea
        id={name}
        className=" rounded-sm  resize-none border py-3 px-3  border-neutral-200 text-sm font-normal font-heading"
        type={textType}
        placeholder={textPlaceholder}
        rows={5}
      />
    </div>
  );
};

export default LabelAndTextAreaComponent;
