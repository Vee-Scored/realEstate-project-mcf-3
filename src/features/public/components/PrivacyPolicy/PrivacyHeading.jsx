import React from "react";

const PrivacyHeading = () => {
  return (
    <div className="flex flex-col gap-12 items-start">
      <h2 className="text-[32px] lg:text-[40px] font-heading font-semibold text-neutral-700">
        Privacy Policy
      </h2>
      <div className="flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-4 items-start">
          <h4 className="text-xl lg:text-2xl font-semibold text-neutral-700 font-heading">
            Effective Date: 27 Nov 2024
          </h4>
          <h4 className="text-xl lg:text-2xl font-semibold text-neutral-700 font-heading">
            Last Updated: 27 Nov 2044
          </h4>
        </div>

        <p className="text-base lg:text-[22px] font-normal  text-neutral-700 ">
          We values your privacy. This Privacy Policy explains how we collect,
          use, disclose, and protect your information when you visit our
          website, and interact with our services.
        </p>
      </div>
    </div>
  );
};

export default PrivacyHeading;
