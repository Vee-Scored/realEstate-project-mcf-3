import SecBreadCrumb from "../../../components/SecBreadCrumb";
import BreadCrumb from "../components/BreadCrumb";
import AllPropertyCompo from "../components/propertySectionCompo/AllPropertyCompo";
import DreamHome from "../components/propertySectionCompo/DreamHome";
import ShowResult from "../components/propertySectionCompo/ShowResult";

const PropertyPage = () => {
  return (
    <div className=" flex flex-col mb-20 gap-24">
      <BreadCrumb className={'hidden md:block'} currentPage={"Property"} />
      <SecBreadCrumb className={'block md:hidden'} />
      <AllPropertyCompo />
      <ShowResult />
      <DreamHome />
    </div>
  );
};

export default PropertyPage;
