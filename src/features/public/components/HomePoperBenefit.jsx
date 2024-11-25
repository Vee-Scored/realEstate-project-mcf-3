import Container from "../../../components/Container";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import {
  LuActivity,
  LuBadge,
  LuFileBadge,
  LuHelpingHand,
} from "react-icons/lu";
import PropertyBenefitCard from "./propertySectionCompo/PropertyBenefitCard";

const HomePoperBenefit = () => {
  const benefits = [
    {
      id: 1,
      icon: <LuFileBadge className=" size-12 " strokeWidth={1} />, // Ant Design Icon for a star
      title: "Expert Guidance",
      description:
        "Benefit from our team's seasoned expertise for a smooth buying experience.",
    },
    {
      id: 2,
      icon: <LuBadge className=" size-12 " strokeWidth={1} />, // FontAwesome Icon for trust/handshake
      title: "Personalized Service",
      description:
        "Benefit from our team's seasoned expertise for a smooth buying experience.",
    },
    {
      id: 3,
      icon: <LuActivity className=" size-12 " strokeWidth={1} />, // Material Design Icon for customer support
      title: "Transparent Process",
      description:
        "Stay informed with our clear and honest approach to buying your favourite special new home",
    },
    {
      id: 4,
      icon: <LuHelpingHand className=" size-12 " strokeWidth={1} />, // Feather Icon for innovation/technology
      title: "Exceptional Support",
      description:
        "Providing peace of mind with our attentive customer service and exceptional Support",
    },
  ];

  return (
    <div>
      <Container>
        <div className="flex flex-col justify-between gap-8 my-8 w-1/2 ">
          <div className=" flex flex-col gap-8">
            <SectionTitleComponent name={"Properties"} />
            <div className=" flex justify-between items-center ">
              <h1 className="text-5xl text-neutral-700 font-notoSansLao leading-10 font-bold">
                Why Choose Us
              </h1>
            </div>
          </div>
          <div>
            <p className="text-neutral-500  font-normal leading-1.5 font-inter">
              Trusted by thousands, we offer verified listings, expert support,
              and a seamless property search experience. Find your dream home
              with ease and confidence.
            </p>
          </div>
        </div>
        <div className=" grid lg:grid-cols-4 justify-between gap-4 justify-items-stretch items-center">
          {benefits.map((benefit) => (
            <PropertyBenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomePoperBenefit;
