import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import SecBreadCrumb from "../../../components/SecBreadCrumb";

const PrivacyPolicyPage = () => {
  return (
    <>
     <BreadCrumb className={'hidden md:block'} currentPage={"Blog"} />
     <SecBreadCrumb currentPageTitle={'privacy policy'}  className={'md:hidden'} />
     <Container>
      <PrivacyPolicy />
    </Container>
    </>
  );
};

export default PrivacyPolicyPage;
