import React from "react";
import PrivacyHeading from "./PrivacyHeading";
import PrivacyPolicyListGroup from "./PrivacyPolicyListGroup";
import MeetOurTeam from "../MeetOurTeam";

const PrivacyPolicy = () => {
  return (
    <section className=" min-h-dvh my-14 flex flex-col gap-16">
      <PrivacyHeading />
      <PrivacyPolicyListGroup />
      <MeetOurTeam />
    </section>
  );
};

export default PrivacyPolicy;
