import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <section>
      <BreadCrumb currentPage={"Privacy Policy"} />
      <Container>
        <PrivacyPolicy />
      </Container>
    </section>
  );
};

export default PrivacyPolicyPage;
