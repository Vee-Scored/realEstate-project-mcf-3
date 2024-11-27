import React from "react";

const PrivacyPolicyList = ({ policy }) => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-1 items-start">
        <h4 className=" text-2xl font-semibold text-neutral-700 font-heading">
          {policy.title}
        </h4>
        <h4 className=" text-2xl font-semibold text-neutral-700 font-heading">
          {policy?.description}
        </h4>
      </div>
      <ol className=" text-[22px] text-neutral-700 font-normal flex flex-col gap-3">
        {policy.list.map((el, i) => (
          <li className="flex items-center">
            {" "}
            <span>{i + 1} .</span> <span>{el}</span>
          </li>
        ))}
      </ol>
      <div className="w-full h-[1px] border border-neutral-100" />
    </div>
  );
};

export default PrivacyPolicyList;
