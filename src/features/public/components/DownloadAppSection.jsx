import React from "react";
import Container from "../../../components/Container";
import image from "../../../assets/HomeAssets/download-image.jpg";
import Home from "../../../assets/FooterIcons/Home.svg";
import googleplay from "../../../assets/HomeAssets/googleplay.svg";
import appstore from "../../../assets/HomeAssets/appstore.svg";

const DownloadAppSection = () => {
  return (
    <Container className={"w-full"}>
      <section className="sm:flex items-center justify-between gap-10">
        <div className="lg:w-[439px] w-full flex flex-col gap-5 lg:gap-10">
          <div className="text-3xl  text-blue-500 flex items-center gap-1">
            <img src={Home} className="size-8" />
            <p className="font-semibold font-sans">Estatela</p>
          </div>
          <h1 className="font-sans text-3xl text-neutral-700 font-semibold">
            Start your journey now!
          </h1>
          <p className="font-sans text-sm md:text-lg text-neutral-500 leading-6">
            Browse verified listings, schedule viewings, and connect with
            agents—all from your phone. Download now and start your journey
            today!"
          </p>
          <button className="bg-neutral-700 rounded-lg text-white p-4 hover:bg-neutral-600 duration-150">
            Download Our App
          </button>
          <div className="flex gap-[25px] items-center justify-between">
            <button>
              <img src={googleplay} />
            </button>

            <button>
              <img src={appstore} />
            </button>
          </div>
        </div>
        <div>
          <img src={image} className="lg:w-[687px] hidden sm:block" />
        </div>
      </section>
    </Container>
  );
};

export default DownloadAppSection;