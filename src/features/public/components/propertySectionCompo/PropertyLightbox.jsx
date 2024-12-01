import React from "react";
import Lightbox from "../Lightbox";
import detailImg1 from "../../../../assets/propertyDetail/detail1.jpg";
import detailImg2 from "../../../../assets/propertyDetail/detail2.jpg";
import detailImg3 from "../../../../assets/propertyDetail/detail3.jpg";
import detailImg4 from "../../../../assets/propertyDetail/detail4.jpg";
import detailImg5 from "../../../../assets/propertyDetail/detail5.jpg";
import detailImg6 from "../../../../assets/propertyDetail/detail6.jpg";
import detailImg7 from "../../../../assets/propertyDetail/detail7.jpg";
import detailImg8 from "../../../../assets/propertyDetail/detail8.jpg";
import detailImg9 from "../../../../assets/propertyDetail/detail9.jpg";
import detailImg10 from "../../../../assets/propertyDetail/detail10.jpg";

const PropertyLightbox = () => {
  const images = [
    detailImg1,
    detailImg2,
    detailImg3,
    detailImg4,
    detailImg5,
    detailImg6,
    detailImg7,
    detailImg8,
    detailImg9,
    detailImg10,
  ];
  return (
    <div className="mb-16">
      <Lightbox images={images} />
    </div>
  );
};

export default PropertyLightbox;
