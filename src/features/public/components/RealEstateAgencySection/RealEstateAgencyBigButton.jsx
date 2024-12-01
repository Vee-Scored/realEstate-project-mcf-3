import React, { useState } from "react";

const RealEstateAgencyBigButton = ({ children, styleClass }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative col-span-2 md:col-span-3">
      <input
        type="search"
        id="default-search"
        className="block w-full h-16 rounded-sm group p-4  text-sm text-gray-900 border border-gray-300   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:text-center dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        placeholder={`${isFocused ? " " : "Search Location"}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
      />
      <div
        className={` ${
          styleClass ? styleClass : ""
        } absolute inset-y-0 md:-left-2 lg:left-5 xl:left-24 translate-x-16 flex items-center pointer-events-none transition-opacity duration-200 ${
          isFocused ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default RealEstateAgencyBigButton;
