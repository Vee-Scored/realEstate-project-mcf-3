import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import RealEstateAgency from "../components/RealEstateAgencySection/RealEstateAgency";
import ServiceForYou from "../components/ServiceForYouSection/ServiceForYou";
import HomeBlogGroupSection from "../components/HomeBlogGroupSection";

import NewLetters from "../../../components/NewLetters";

import HomePopularProper from "../components/HomePopularProper";
import HomePoperBenefit from "../components/HomePoperBenefit";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-20">
      <RealEstateAgency />

      <ServiceForYou />
      <HomeBlogGroupSection />
      <NewLetters />

      <HomePopularProper />
      <HomePoperBenefit />
      <ServiceForYou />
      <HomeBlogGroupSection />

    </section>
  );
};

export default HomePage;
