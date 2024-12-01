import React from "react";
import PrivacyHeading from "./PrivacyHeading";
import PrivacyPolicyListGroup from "./PrivacyPolicyListGroup";
import MeetOurTeam from "../MeetOurTeam";

const PrivacyPolicy = () => {
  return (
    <section className=" my-5 lg:my-14 flex flex-col gap-5 lg:gap-16">
      <PrivacyHeading />
      <PrivacyPolicyListGroup />
      <MeetOurTeam />
    </section>
  );
};

export default PrivacyPolicy;
