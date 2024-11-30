const PropertyBenefitCard = ({ icon, title, description }) => {
  return (
    <div className=" flex flex-col justify-between  h-full  items-center py-8 px-8 bg-neutral-100 bg-opacity-15  rounded-md border border-gray-200  gap-8 ">
      <div className="  text-blue-500  leading-6 ">{icon}</div>
      <div className=" flex flex-col gap-8">
        <h1 className=" w-full flex justify-center text-2xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="  text-center sm:line-clamp-2 text-xs text-gray-600  px-5 leading-4 font-normal ">
          {description}
        </p>
      </div>
    </div>
  );
};
export default PropertyBenefitCard;
