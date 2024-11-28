import React from "react";

const ContactAdminInputLable = ({
  name,
  textType,
  placeholder,
  classNameInput,
  register,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="first-letter:uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <input
        type={textType}
        {...register(`${name}`)}
        id={name}
        className={` ${classNameInput} resize-none font-normal  text-sm rounded-sm px-3 py-1 border border-neutral-200 bg-neutral-50 w-full h-9 `}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default ContactAdminInputLable;
