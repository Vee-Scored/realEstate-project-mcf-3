import React from "react";
import PrivacyPolicyList from "./PrivacyPolicyList";
import { policies } from ".";

const PrivacyPolicyListGroup = () => {
  return (
    <section className="flex flex-col items-start gap-10 mb-10">
      <div className="text-start">
        <h4 className=" text-xl lg:text-2xl font-semibold text-neutral-700 font-heading mb-3">
          1. Information We Collect
        </h4>
        <p className="text-base lg:text-[22px] font-normal text-neutral-700">
          We collect the following types of information:
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {policies.map((policy) => (
          <PrivacyPolicyList key={policy.id} policy={policy} />
        ))}
      </div>
      <h4 className=" font-heading text-xl lg:text-2xl font-semibold text-neutral-700">
        To exercise these rights, contact us at Estatela@gmail.com.
      </h4>
    </section>
  );
};

export default PrivacyPolicyListGroup;
