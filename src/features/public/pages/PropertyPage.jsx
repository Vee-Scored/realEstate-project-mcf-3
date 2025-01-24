import { useEffect } from "react";
import SecBreadCrumb from "../../../components/SecBreadCrumb";
import BreadCrumb from "../components/BreadCrumb";
import AllPropertyCompo from "../components/propertySectionCompo/AllPropertyCompo";
import DreamHome from "../components/propertySectionCompo/DreamHome";
import ShowResult from "../components/propertySectionCompo/ShowResult";

const PropertyPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };
  useEffect(() => {
    // Scroll to the top of the page
    scrollToTop();
  }, []);
  return (
    <div className=" flex flex-col mb-20 gap-5 md:gap-24">
      <BreadCrumb className={"hidden md:block"} currentPage={"Property"} />
      <SecBreadCrumb
        currentPageTitle={"Property"}
        className={"block md:hidden px-3"}
      />

      <AllPropertyCompo />
      <ShowResult />
      <DreamHome />
    </div>
  );
};

export default PropertyPage;
