import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import RealEstateAgency from "../components/RealEstateAgencySection/RealEstateAgency";
import ServiceForYou from "../components/ServiceForYouSection/ServiceForYou";
import HomeBlogGroupSection from "../components/HomeBlogGroupSection";

import DownloadAppSection from "../components/DownloadAppSection";

import MeetOurTeam from "../components/MeetOurTeam";

import NewLetters from "../../../components/NewLetters";

import HomePopularProper from "../components/HomePopularProper";
import HomePoperBenefit from "../components/HomePoperBenefit";

import HomeTestimonial from "../components/HomeTestimonial";
import BreadCrumb from "../components/BreadCrumb";
const HomePage = () => {
  return (
    <section className="flex flex-col mb-20 gap-20">
      <RealEstateAgency />
      <ServiceForYou />
      <HomePopularProper />
      <HomePoperBenefit />
      <HomeBlogGroupSection />
      <HomeTestimonial />
      <DownloadAppSection />
      <NewLetters />
    </section>
  );
};

export default HomePage;
