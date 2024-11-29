import React from "react";

const PropertyDetailRoomInfoSmall = ({ image, bathrooms, unt }) => {
  return (
    <div className=" flex items-center gap-2">
      <img src={image} alt="" />
      <span className=" text-neutral-700 text-base font-normal font-sans flex items-center gap-1   ">
        {" "}
        <span>{bathrooms}</span>
        <span>{unt}</span>
      </span>
    </div>
  );
};

export default PropertyDetailRoomInfoSmall;
