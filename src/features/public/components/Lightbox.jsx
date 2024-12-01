import React, { useState } from "react";
import Container from "../../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Lightbox = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="mx-auto flex flex-col justify-center items-center">
      {/* Main Image */}
      <div className="mb-8 xl:w-[1000px]  xl:h-[636px] ">
        <img
          src={selectedImage}
          alt="Selected"
          className="h-full w-full aspect-square object-cover rounded-sm shadow-md "
        />
      </div>

      {/* Thumbnails */}
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        className="flex gap-4 overflow-x-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div
              className={`cursor-pointer border-2 rounded-md ${
                selectedImage === image
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="xl:w-[194px] md:w-[173px] w-[142px] md:h-[153px] h-[120px] object-cover rounded-sm"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Lightbox;
