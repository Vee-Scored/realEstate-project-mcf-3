import Container from "../../../components/Container";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import RealEstateAgency from "../components/RealEstateAgencySection/RealEstateAgency";
import ServiceForYou from "../components/ServiceForYouSection/ServiceForYou";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-20">
        <RealEstateAgency />
        <ServiceForYou/>
    </section>
  );
};

export default HomePage;
