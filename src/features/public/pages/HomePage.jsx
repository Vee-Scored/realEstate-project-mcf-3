import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import RealEstateAgency from "../components/RealEstateAgencySection/RealEstateAgency";
import ServiceForYou from "../components/ServiceForYouSection/ServiceForYou";
import HomeBlogGroupSection from "../components/HomeBlogGroupSection";
const HomePage = () => {
  return (
    <section className="flex flex-col gap-20">
      <RealEstateAgency />
      <ServiceForYou />
      <HomeBlogGroupSection />
    </section>
  );
};

export default HomePage;
