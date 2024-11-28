import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import PropertyDetailList from "../components/propertySectionCompo/PropertyDetailList";

const PropertyDetail = () => {
  return (
    <div>
      <Container>
        <BreadCrumb
          currentPageTitle={"property detail"}
          links={[{ title: "property", path: "/properties" }]}
        />
        <PropertyDetailList />
      </Container>
    </div>
  );
};

export default PropertyDetail;