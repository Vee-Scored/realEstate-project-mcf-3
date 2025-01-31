import Container from "../../../components/Container";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import {
  LuActivity,
  LuBadge,
  LuFileBadge,
  LuHelpingHand,
} from "react-icons/lu";
import PropertyBenefitCard from "./propertySectionCompo/PropertyBenefitCard";

import { motion } from "framer-motion";

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
        <div className="flex flex-col justify-between gap-8 my-8 w-full lg:w-1/2 ">
          <div className=" flex flex-col gap-5 lg:gap-8">
            <SectionTitleComponent name={"Properties"} />
            <div className=" flex justify-between items-center ">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-[35px]  lg:text-[50px] leading-[38px] xl:text-[60px] lg:leading-[50px] xl:leading-[65px] font-[600] col-span-4  md:leading-[37px]  text-neutral-700 font-notoSansLao"
              >
                Why Choose Us
              </motion.h1>
            </div>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="  font-[400] leading-2 text-[11px] md:text-lg font-inter text-neutral-500"
            >
              Trusted by thousands, we offer verified listings, expert support,
              and a seamless property search experience. Find your dream home
              with ease and confidence.
            </motion.p>
          </div>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 justify-items-stretch items-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PropertyBenefitCard {...benefit} />
            </motion.div>

          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomePoperBenefit;
