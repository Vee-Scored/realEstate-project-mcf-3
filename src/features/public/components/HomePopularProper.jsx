import React from "react";
import Container from "../../../components/Container";
import SectionTitleComponent from "../../../components/SectionTitleComponent";
import ViewAllBtn from "../../../components/ViewAllBtn";
import PopularProperCard from "./propertySectionCompo/PopularProperCard";

const HomePopularProper = () => {
  const properties = [
    {
      id: 1,
      img: "img/product1.jpg",
      state: true,
      title: "Wireless Headphones",
      description:
        "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
      price: 120.99,
      listedDate: "2024-11-20",
      unitId: "WH123",
    },
    {
      id: 2,
      img: "img/product2.jpg",
      state: false,
      title: "Laptop",
      description: "14-inch lightweight laptop with 8GB RAM and 256GB SSD.",
      price: 499.99,
      listedDate: "2024-11-19",
      unitId: "LP456",
    },
    {
      id: 3,
      img: "img/product3.jpg",
      state: true,
      title: "Smartphone",
      description: "6.5-inch AMOLED display, 128GB storage, and dual cameras.",
      price: 299.99,
      listedDate: "2024-11-18",
      unitId: "SP789",
    },
    {
      id: 4,
      img: "img/product4.jpg",
      state: false,
      title: "Gaming Mouse",
      description: "Ergonomic design with customizable RGB lighting.",
      price: 45.99,
      listedDate: "2024-11-17",
      unitId: "GM101",
    },
    {
      id: 5,
      img: "img/product5.jpg",
      state: false,
      title: "Tablet",
      description: "10-inch tablet with Wi-Fi and 64GB storage.",
      price: 179.99,
      listedDate: "2024-11-16",
      unitId: "TB202",
    },
    {
      id: 6,
      img: "img/product6.jpg",
      state: true,
      title: "Bluetooth Speaker",
      description: "Portable speaker with 10-hour battery life.",
      price: 69.99,
      listedDate: "2024-11-15",
      unitId: "BS303",
    },
  ];

  return (
    <section>
      <Container className={" flex flex-col gap-14"}>
        <div className=" flex flex-col gap-8">
          <SectionTitleComponent name={"Properties"} />
          <div className=" flex justify-between items-center">
            <h1 className="text-5xl text-neutral-700 font-notoSansLao leading-10 font-bold">
              Popular Properties
            </h1>
            <ViewAllBtn className={" py-1 px-2"}>View all</ViewAllBtn>
          </div>
        </div>
        {/* Card Section  */}
        <section className=" flex flex-col gap-14">
          <div className=" w-full grid lg:grid-cols-3 gap-5 mt-4  justify-between items-center">
            {properties.map((property) => (
              <PopularProperCard key={property.id} property={property} />
            ))}
          </div>
          <div className=" my-5 flex justify-center items-center ">
            <ViewAllBtn>View all</ViewAllBtn>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default HomePopularProper;
