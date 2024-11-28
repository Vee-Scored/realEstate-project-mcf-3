import React from "react";
import Container from "../../../components/Container";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import ViewAllBtn from "../../../components/ViewAllBtn";
import PopularProperCard from "./propertySectionCompo/PopularProperCard";
import SeeMoreBtn from "./SeeMoreBtn";

const HomePopularProper = () => {
  const properties = [
    {
      id: 1,
      img: "img/product1.jpg",
      title: "Golden Pearl Condo",
      state: true,
      description:
        "Prime condo located in downtown, just 10 minutes to mall. Surrounded by lush parks, trendy cafes.",
      price: 1200,
      listedDate: "2024-11-20",
      unitId: "AA123456",
      bathroom: 2,
      bedRoom: 2,
      sqft: 50,
    },
    {
      id: 2,
      img: "img/product2.jpg",
      title: "Ocean Breeze Condo",
      state: true,
      description:
        "A serene retreat by the sea with access to a private beach and community pool.",
      price: 1500,
      listedDate: "2024-11-15",
      unitId: "BB654321",
      bathroom: 3,
      bedRoom: 3,
      sqft: 70,
    },
    {
      id: 3,
      img: "img/product3.jpg",
      title: "City Heights Condo",
      state: false,
      description:
        "Modern condo in the heart of the city, perfect for young professionals.",
      price: 1100,
      listedDate: "2024-10-30",
      unitId: "CC789012",
      bathroom: 1,
      bedRoom: 1,
      sqft: 40,
    },
    {
      id: 4,
      img: "img/product4.jpg",
      title: "Park View Condo",
      state: true,
      description:
        "Spacious condo overlooking a beautiful park, ideal for families.",
      price: 1300,
      listedDate: "2024-11-18",
      unitId: "DD345678",
      bathroom: 2,
      bedRoom: 2,
      sqft: 60,
    },
    {
      id: 5,
      img: "img/product5.jpg",
      title: "Skyline Retreat Condo",
      state: false,
      description:
        "Luxury high-rise condo with stunning city views and premium amenities.",
      price: 2000,
      listedDate: "2024-09-25",
      unitId: "EE234567",
      bathroom: 3,
      bedRoom: 4,
      sqft: 90,
    },
    {
      id: 6,
      img: "img/product6.jpg",
      title: "Urban Oasis Condo",
      state: true,
      description:
        "Trendy condo with a rooftop garden and gym access in the city center.",
      price: 1400,
      listedDate: "2024-11-10",
      unitId: "FF345678",
      bathroom: 2,
      bedRoom: 2,
      sqft: 55,
    },
  ];

  return (
    <section>
      <Container className={" flex flex-col gap-14"}>
        <div className=" flex flex-col gap-5 lg:gap-8">
          <SectionTitleComponent name={"Properties"} />
          <div className=" flex justify-between items-center">
            <h1 className="text-[35px]  lg:text-[50px] leading-[38px] xl:text-[60px] lg:leading-[50px] xl:leading-[65px] font-[600] col-span-4  md:leading-[37px]  text-neutral-700 font-notoSansLao">
              Popular Properties
            </h1>
            <ViewAllBtn className={"hidden md:block py-1 px-2"}>View all</ViewAllBtn>
          </div>
        </div>
        {/* Card Section  */}
        <section className=" flex flex-col gap-14">
          <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4  justify-between items-center">
            {properties.map((property) => (
              <PopularProperCard key={property.id} property={property} />
            ))}
        <SeeMoreBtn className={'rounded-md'} />
          </div>
          <div className="hidden md:flex my-5  justify-center items-center ">
            <ViewAllBtn>View all</ViewAllBtn>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default HomePopularProper;
