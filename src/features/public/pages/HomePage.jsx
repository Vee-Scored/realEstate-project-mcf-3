import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import RealEstateAgency from "../components/RealEstateAgencySection/RealEstateAgency";
import ServiceForYou from "../components/ServiceForYouSection/ServiceForYou";
import HomeBlogGroupSection from "../components/HomeBlogGroupSection";
import DownloadAppSection from "../components/DownloadAppSection";
import MeetOurTeam from "../components/MeetOurTeam";
const HomePage = () => {
  return (
    <section className="flex flex-col gap-20">
      <RealEstateAgency />
      <ServiceForYou />
      <HomeBlogGroupSection />
      <DownloadAppSection />
      <MeetOurTeam />
    </section>
  );
};

export default HomePage;
