import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <>
    <BreadCrumb currentPage={"Privacy Policy"} />
    <Container>
      <PrivacyPolicy />
    </Container>
    </>
  );
};

export default PrivacyPolicyPage;
