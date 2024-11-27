import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";

const PropertyDetail = () => {
  return (
    <div>
      <Container>
        <BreadCrumb
          currentPageTitle={"property detail"}
          links={[{ title: "property", path: "/properties" }]}
        />
      </Container>
    </div>
  );
};

export default PropertyDetail;
