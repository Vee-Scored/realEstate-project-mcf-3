import { useState } from "react";

const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <form action="" className=" grid grid-cols-2 md:grid-cols-7   gap-5">
        {/* search input  */}
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
            className={`absolute inset-y-0 md:-left-2 lg:left-5 xl:left-24 translate-x-16 flex items-center pointer-events-none transition-opacity duration-200 ${
              isFocused ? "opacity-0" : "opacity-100"
            }`}
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="grid md:grid-cols-3 col-span-2 grid-cols-2   gap-5  md:col-span-4">
          {/* select buy  */}
        <div >
          <select
            id="countries"
            className=" border w-full  border-gray-300 text-gray-900 text-sm  p-4  focus:ring-neutral-300 focus:border-neutral-300 text-center  block h-16 rounded-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
          >
            <option selected>Buy</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        {/* select property  */}
        <div >
          <select
            id="countries"
            className=" border w-full border-gray-300 text-gray-900 text-sm focus:ring-neutral-300 focus:border-neutral-300 text-center    block h-16 rounded-sm p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-0"
          >
            <option selected>property</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="w-full col-span-2 md:col-span-1">
          <button className=" bg-neutral-700 h-16 w-full text-sm   rounded-sm text-white   text-center ">
            Search Result
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
