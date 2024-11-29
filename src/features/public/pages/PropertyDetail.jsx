
import Container from "../../../components/Container";

import PropertyDetailAvailableSection from "../components/propertySectionCompo/PropertyDetailAvailableSection";

import AmenityFeatures from "../components/propertySectionCompo/AmenityFeatures";
import LocationInMap from "../components/propertySectionCompo/LocationInMap";

import PropertyDetailList from "../components/propertySectionCompo/PropertyDetailList";
import PropertyLightbox from "../components/propertySectionCompo/PropertyLightbox";
import PropertyVideo from "../components/propertySectionCompo/PropertyVideo";
import { useLocation, useParams } from "react-router-dom";
import SecBreadCrumb from "../../../components/SecBreadCrumb";

const PropertyDetail = () => {
  const {slug} = useParams();
 
  return (
    <div>
      <Container >
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
      </Container>
    </div>
  );
};

export default PropertyDetail;
