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
import data from "../../../../data.json";
const PropertyDetail = () => {
  const { slug } = useParams();
  const currentData = data.find((d) => d.slug == slug);

  return (
    <div>
      <Container>
        <SecBreadCrumb
          currentPageTitle={"property detail"}
          links={[{ title: "property", path: "/properties" }]}
        />
        <PropertyDetailAvailableSection slug={slug} />
        {/* <div className=" text-base font-sans font-normal  text-neutral-700 ">
          <span>Listed date :</span>
          <span>{currentData.listedDate}</span>
        </div> */}
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
