import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import AmenityFeatures from "../components/propertySectionCompo/AmenityFeatures";
import PropertyDetailList from "../components/propertySectionCompo/PropertyDetailList";
import PropertyLightbox from "../components/propertySectionCompo/PropertyLightbox";

const PropertyDetail = () => {
  return (
    <div>
      <Container>
        <BreadCrumb
          currentPageTitle={"property detail"}
          links={[{ title: "property", path: "/properties" }]}
        />
        <PropertyLightbox />
        <PropertyDetailList />
        <AmenityFeatures />
      </Container>
    </div>
  );
};

export default PropertyDetail;
