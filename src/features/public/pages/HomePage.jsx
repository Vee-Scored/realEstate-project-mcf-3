import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import RealEstateAgency from "../components/RealEstateAgencySection/RealEstateAgency";
import ServiceForYou from "../components/ServiceForYouSection/ServiceForYou";
import HomeBlogGroupSection from "../components/HomeBlogGroupSection";
import DownloadAppSection from "../components/DownloadAppSection";
const HomePage = () => {
  return (
    <section className="flex flex-col gap-20">
      <RealEstateAgency />
      <ServiceForYou />
      <HomeBlogGroupSection />
      <DownloadAppSection />
    </section>
  );
};

export default HomePage;
