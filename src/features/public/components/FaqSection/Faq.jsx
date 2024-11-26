import React, { useState } from "react";
import Container from "../../../../components/Container";
import BreadCrumb from "../BreadCrumb";
import MeetOurTeam from "../MeetOurTeam";
import FaqImg from "../../../../assets/FaqImgs/faq.png";
import Arrow from "../../../../assets/FaqImgs/arrow.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css"; // Optional default styling (can customize later)

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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    console.log(index);
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section>
      <BreadCrumb currentPage={"faq"} />
      <Container>
        <div className="mt-10 flex flex-col gap-36">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="font-sans font-semibold text-4xl text-neutral-700 mb-8">
                You ask ? We Answer
              </h1>
              <p className="font-sans font-semibold text-2xl text-neutral-700">
                Now, dive in, explore, and let’s answer those burning questions!
                🔥
              </p>
              <div className="max-w-3xl mx-auto space-y-4">
                <Accordion allowZeroExpanded className="!border-none">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      uuid={index}
                      key={index}
                      className="border-b"
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton className="py-4 px-2 text-left font-medium text-gray-900">
                          <div
                            className=" flex justify-between items-center"
                            onClick={() => toggleAccordion(index)}
                          >
                            <span>{faq.question}</span>
                            <img
                              src={Arrow}
                              alt="arrow"
                              className={`${
                                activeIndex === index ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      {faq.answer && (
                        <AccordionItemPanel className="px-2 py-2 text-gray-600">
                          {faq.answer}
                        </AccordionItemPanel>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div>
              <img src={FaqImg} />
            </div>
          </div>
          <div>
            <MeetOurTeam />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
