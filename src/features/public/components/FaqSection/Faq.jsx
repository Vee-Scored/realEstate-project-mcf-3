import React, { useState } from "react";
import Container from "../../../../components/Container";
import BreadCrumb from "../BreadCrumb";
import MeetOurTeam from "../MeetOurTeam";
import FaqImg from "../../../../assets/FaqImgs/faq.png";
import Arrow from "../../../../assets/FaqImgs/arrow.svg";
import PaperPlane from "../../../../assets/meetOurTeam/paper-plane.svg";
import SecBreadCrumb from "../../../../components/SecBreadCrumb";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "Our company provides services such as buying, selling, renting, and property management. We also assist with financing, legal documentation, and market analysis.",
  },
  {
    question: "How do I start the process of buying a home?",
    answer:
      "When you’re ready to make an offer, we’ll help with negotiations, paperwork, and ensure a smooth closing process.",
  },
  {
    question: "How do I schedule a property viewing?",
    answer:
      "Scheduling a property viewing is simple! Just contact us via phone, email, or our website, and we’ll arrange a time that works for you.",
  },
  {
    question: "How can I contact a real estate agent?",
    answer:
      "You can contact our real estate agents through our website’s contact form, via email, or by giving us a call. Our team is here to assist you.",
  },
  {
    question: "What steps are involved in purchasing a property?",
    answer:
      "The steps include finding the right property, securing financing, making an offer, completing inspections, and finalizing paperwork. We'll guide you at every step.",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-10 lg:gap-24">
      <BreadCrumb currentPage={"Faq"} className={"hidden md:block"} />
      <Container>
        <SecBreadCrumb className={"block md:hidden"} currentPageTitle={"faq"} />
        <div className="mt-10 flex flex-col gap-5">
          <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 gap-6">
            <div className="">
              <h1 className="font-sans font-semibold lg:text-3xl xl:text-4xl text-neutral-700 mb-8">
                You ask ? We Answer
              </h1>

              <p className="font-sans font-semibold text-lg md:text-2xl text-neutral-700 lg:mb-5 xl:mb-8">
                Now, dive in, explore, and let’s answer those burning questions!
                🔥
              </p>
              <div className="max-w-3xl text-sm md:text-lg mx-auto">
                <div className="space-y-2">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-300 cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      {/* Question */}
                      <div className="flex justify-between items-center py-4 px-2">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <img
                          src={Arrow}
                          alt="arrow"
                          className={`transition-transform duration-300 ${
                            expanded === index ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expanded === index
                            ? "max-h-[200px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-2 py-2 text-gray-600">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img className="w-full h-full bg-contain" src={FaqImg} />
            </div>
          </div>
          <div className="relative  ">
            <MeetOurTeam />
            <img
              src={PaperPlane}
              alt=""
              className="w-1/4 md:w-auto absolute top-0 right-0 lg:top-28 lg:right-20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
