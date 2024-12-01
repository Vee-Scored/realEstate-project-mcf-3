const DetailListDiv = ({ className, title, description }) => {
  return (
    <div>
      <div className={` flex flex-col gap-1 md:gap-2 ${className}`}>
        <h1 className=" font-bold font-heading text-neutral-700 text-lg md:text-2xl leading-10 tracking-tight">
          {title}
        </h1>
        <p className=" text-lg text-neutral-700 leading-7 ">{description}</p>
      </div>
    </div>
  );
};

export default DetailListDiv;
