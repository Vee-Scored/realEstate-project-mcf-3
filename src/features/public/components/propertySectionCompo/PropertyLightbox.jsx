import React from "react";
import Lightbox from "../Lightbox";
import detailImg1 from "../../../../assets/propertyDetail/detail1.png";
import detailImg2 from "../../../../assets/propertyDetail/detail2.png";
import detailImg3 from "../../../../assets/propertyDetail/detail3.png";
import detailImg4 from "../../../../assets/propertyDetail/detail4.png";
import detailImg5 from "../../../../assets/propertyDetail/detail5.png";
import detailImg6 from "../../../../assets/propertyDetail/detail6.png";
import detailImg7 from "../../../../assets/propertyDetail/detail7.png";

const PropertyLightbox = () => {
  const images = [
    detailImg1,
    detailImg2,
    detailImg3,
    detailImg4,
    detailImg5,
    detailImg6,
    detailImg7,
  ];
  return (
    <div className="mb-16">
      <Lightbox images={images} />
    </div>
  );
};

export default PropertyLightbox;
