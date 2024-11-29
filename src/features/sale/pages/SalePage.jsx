import Container from "../../../components/Container";
import BreadCrumb from "../../public/components/BreadCrumb";
import SaleCard from "../components/SaleCard";

const SalePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Sale Module"} />
        <SaleCard />
      </Container>
    </section>
  );
};

export default SalePage;
