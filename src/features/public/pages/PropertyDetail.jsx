import Container from "../../../components/Container";

import PropertyDetailAvailableSection from "../components/propertySectionCompo/PropertyDetailAvailableSection";

import AmenityFeatures from "../components/propertySectionCompo/AmenityFeatures";
import LocationInMap from "../components/propertySectionCompo/LocationInMap";

import PropertyDetailList from "../components/propertySectionCompo/PropertyDetailList";
import PropertyLightbox from "../components/propertySectionCompo/PropertyLightbox";
import PropertyVideo from "../components/propertySectionCompo/PropertyVideo";
import { useLocation, useParams } from "react-router-dom";
import SecBreadCrumb from "../../../components/SecBreadCrumb";
import { SimilarListSection } from "../components/propertySectionCompo/SimilarListSection";
import useCardList from "../../../stores/useCardList";
const PropertyDetail = () => {
  const { slug } = useParams();

  return (
    <Container>
      <SecBreadCrumb
        currentPageTitle={"property detail"}
        links={[{ title: "property", path: "/properties" }]}
      />
      <PropertyDetailAvailableSection slug={slug} />
      <PropertyLightbox />
      <PropertyDetailList />
      <AmenityFeatures />
      <PropertyVideo />
      <LocationInMap />
      <SimilarListSection slug={slug} />
    </Container>
  );
};

export default PropertyDetail;
