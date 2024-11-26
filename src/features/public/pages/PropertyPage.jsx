import BreadCrumb from "../components/BreadCrumb";
import AllPropertyCompo from "../components/propertySectionCompo/AllPropertyCompo";

const PropertyPage = () => {
  return (
    <div className=" flex flex-col gap-10">
      <BreadCrumb currentPage={"Property"} />
      <AllPropertyCompo />
    </div>
  );
};

export default PropertyPage;
