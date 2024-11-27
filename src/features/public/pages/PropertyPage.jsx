import BreadCrumb from "../components/BreadCrumb";
import AllPropertyCompo from "../components/propertySectionCompo/AllPropertyCompo";
import DreamHome from "../components/propertySectionCompo/DreamHome";
import ShowResult from "../components/propertySectionCompo/ShowResult";

const PropertyPage = () => {
  return (
    <div className=" flex flex-col gap-10">
      <BreadCrumb currentPage={"Property"} />
      <AllPropertyCompo />
      <ShowResult />
      <DreamHome />
    </div>
  );
};

export default PropertyPage;
