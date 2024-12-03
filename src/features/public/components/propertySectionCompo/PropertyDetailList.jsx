import DetailListDiv from "./DetailListDiv";
import ProperDetailTitle from "./ProperDetailTitle";

const PropertyDetailList = ({ details }) => {
  console.log(details);
  return (
    <div className=" flex flex-col gap-8 py-16 ">
      <ProperDetailTitle text={"Property Details"} />
      <div className=" flex  w-full md:p-16 p-8 gap-7 bg-neutral-100 rounded-sm ">
        <div className=" grid md:grid-cols-2 md:justify-between  w-full md:gap-5  ">
          <div className=" col-span-1 flex flex-col  md:gap-5 justify-start ">
            {details.propertyDetails.slice(0, 5).map((detail) => (
              <DetailListDiv title={detail[0]} description={detail[1]} />
            ))}
          </div>
          <div className=" col-span-1 flex flex-col  md:gap-5 justify-start ">
            {details.propertyDetails.slice(5, 10).map((detail) => (
              <DetailListDiv title={detail[0]} description={detail[1]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailList;
