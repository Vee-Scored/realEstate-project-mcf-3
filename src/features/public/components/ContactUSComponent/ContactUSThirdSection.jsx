import React, { useState } from "react";
import ContactUsMapImg from "../../../../assets/Contact-us/contact-us-map-image.png";
import { bouncy } from "ldrs";

const ContactUSThirdSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  bouncy.register();

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };
  return (
    <section className="flex justify-center items-center py-8">
      <div className=" relative w-full h-[588px] ">
        {/* Loading Placeholder */}
        {!isLoaded && (
          <div className="absolute  overflow-hidden object-fill w-full inset-0 bg-gray-200 rounded-lg shadow-lg flex  justify-center items-center">
            <img className=" w-full " src={ContactUsMapImg} alt="" />
            <div className=" absolute w-full h-full bg-black/50 ">
              <p className=" w-full h-full gap-5  flex justify-center items-center text-white text-4xl font-semibold font-heading ">
                <span>Loading</span>
                <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
              </p>
            </div>
          </div>
        )}
        {/* Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.915791836273!2d96.13149637437417!3d16.838084783958458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edbb8a89416d%3A0x64420f52367032b9!2sMMS%20IT!5e1!3m2!1sen!2sth!4v1732718624767!5m2!1sen!2sth"
          width="100%"
          height="100%"
          className="border-0 rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUSThirdSection;
