import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import AmenityFeatures from "../components/propertySectionCompo/AmenityFeatures";
import LocationInMap from "../components/propertySectionCompo/LocationInMap";
import PropertyDetailList from "../components/propertySectionCompo/PropertyDetailList";
import PropertyLightbox from "../components/propertySectionCompo/PropertyLightbox";
import PropertyVideo from "../components/propertySectionCompo/PropertyVideo";
import { SimilarListSection } from "../components/propertySectionCompo/SimilarListSection";

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
        <PropertyVideo />
        <LocationInMap />
        <SimilarListSection />
      </Container>
    </div>
  );
};

export default PropertyDetail;
