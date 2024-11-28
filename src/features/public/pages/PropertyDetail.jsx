import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import PropertyDetailAvailableSection from "../components/propertySectionCompo/PropertyDetailAvailableSection";
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
        <PropertyDetailAvailableSection />
        <PropertyLightbox />
        <PropertyDetailList />
      </Container>
    </div>
  );
};

export default PropertyDetail;
