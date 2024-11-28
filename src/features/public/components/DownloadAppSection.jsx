import React from "react";
import Container from "../../../components/Container";
import image from "../../../assets/HomeAssets/download-image.jpg";
import Home from "../../../assets/FooterIcons/Home.svg";
import googleplay from "../../../assets/HomeAssets/googleplay.svg";
import appstore from "../../../assets/HomeAssets/appstore.svg";

const DownloadAppSection = () => {
  return (
    <Container className={"w-full"}>
      <section className="flex  gap-3">
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="lg:text-3xl text-sm  text-blue-500 flex items-center gap-1">
            <img src={Home} className="size-8" />
            <p className="font-semibold font-sans">Estatela</p>
          </div>
          <h1 className="font-sans text-lg lg:text-3xl text-neutral-700 font-semibold">
            Start your journey now!
          </h1>
          <p className="font-sans text-[11px] md:text-lg text-neutral-500 leading-5 lg:leading-8">
            Browse verified listings, schedule viewings, and connect with
            agents—all from your phone. Download now and start your journey
            today!"
          </p>
          <button className="bg-neutral-700 text-sm lg:text-lg rounded-lg text-white p-4 hover:bg-neutral-600 duration-150">
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
          <img src={image} className="h-full" />
        </div>
      </section>
    </Container>
  );
};

export default DownloadAppSection;
