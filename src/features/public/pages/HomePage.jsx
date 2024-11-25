import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import RealEstateAgency from "../components/RealEstateAgencySection/RealEstateAgency";
import ServiceForYou from "../components/ServiceForYouSection/ServiceForYou";
import HomeBlogGroupSection from "../components/HomeBlogGroupSection";
import HomePopularProper from "../components/HomePopularProper";
import HomePoperBenefit from "../components/HomePoperBenefit";



import HomeTestimonial from "../components/HomeTestimonial";
const HomePage = () => {
  return (
    <section className="flex flex-col gap-20">
        <RealEstateAgency />
        <ServiceForYou/>
        <HomePopularProper />
        <HomePoperBenefit />
        <HomeBlogGroupSection />
        <HomeTestimonial/>

    </section>
  );
};

export default HomePage;
