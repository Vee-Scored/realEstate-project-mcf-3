import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <Container>
      <BreadCrumb currentPage={"Privacy Policy"} />
      <PrivacyPolicy />
    </Container>
  );
};

export default PrivacyPolicyPage;
