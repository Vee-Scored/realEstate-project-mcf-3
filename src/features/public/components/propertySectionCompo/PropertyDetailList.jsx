import DetailListDiv from "./DetailListDiv";

const PropertyDetailList = () => {
  return (
    <div className=" flex flex-col gap-8">
      <h1 className=" text-neutral-700 font-bold font-heading text-3xl">
        Property Detail
      </h1>
      <div className=" flex -gray-500 w-full p-16 gap-7 bg-neutral-100 rounded-sm ">
        <div className=" grid md:grid-cols-2 md:justify-between  w-full gap-5  ">
          <div className=" col-span-1 flex flex-col gap-5 justify-start ">
            <DetailListDiv
              className={""}
              title={"Unit ID"}
              description={"AA123456"}
            />
            <DetailListDiv
              className={""}
              title={"Property Type"}
              description={"House"}
            />
            <DetailListDiv
              className={""}
              title={"Property Size"}
              description={"2500 sq. ft"}
            />
            <DetailListDiv className={""} title={"Room"} description={"5"} />
            <DetailListDiv
              className={""}
              title={"Bed Room"}
              description={"6"}
            />
          </div>
          <div className=" col-span-1 flex flex-col gap-5 justify-start ">
            <DetailListDiv
              className={""}
              title={"Property Price"}
              description={"$ 505,50000 1000/per sq ft"}
            />
            <DetailListDiv
              className={""}
              title={"Property Status"}
              description={"rent"}
            />
            <DetailListDiv
              className={""}
              title={"Lot Size"}
              description={"3500 sq. ft"}
            />
            <DetailListDiv
              className={""}
              title={"Bath room"}
              description={"5"}
            />
            <DetailListDiv className={""} title={"Garages"} description={"3"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailList;
