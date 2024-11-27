import BreadCrumb from "../components/BreadCrumb";
import AllPropertyCompo from "../components/propertySectionCompo/AllPropertyCompo";
import ShowResult from "../components/propertySectionCompo/ShowResult";

const PropertyPage = () => {
  return (
    <div className=" flex flex-col gap-10">
      <BreadCrumb currentPage={"Property"} />
      <AllPropertyCompo />
      <ShowResult />
    </div>
  );
};

export default PropertyPage;
