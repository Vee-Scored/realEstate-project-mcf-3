import ProperDetailTitle from "./ProperDetailTitle";

const AmenityFeatures = () => {
  const features = [
    [
      "Smoke alarm",
      "Gym",
      "Parking",
      "24hrs security",
      "Gardean",
      "Swimming pool",
      "Wifi",
    ],
    ["Mini playground", "Convenience store", "Laundry shop"],
  ];
  return (
    <>
      <div className=" flex flex-col gap-8 py-16">
        <ProperDetailTitle text={"Amenities and Features"} />
        <div className=" flex  w-full p-16 gap-7 bg-neutral-100 rounded-sm ">
          <div className=" grid md:grid-cols-2 md:justify-between  w-full gap-5  ">
            <div className=" col-span-1 flex flex-col gap-5 justify-start ">
              <ul className="max-w-md list-disc   text-nowrap text-neutral-500  list-inside dark:text-neutral-400  flex-col text-xl flex gap-3 md:gap-5">
                {features[0].map((feature) => (
                  <li className="" key={feature}>
                    {
                      <span className="md:text-2xl text-lg font-heading  leading-10 font-bold">
                        {feature}
                      </span>
                    }
                  </li>
                ))}
              </ul>
            </div>
            <div className=" col-span-1 flex flex-col gap-5 justify-start ">
              <ul className="max-w-md list-disc   text-nowrap text-neutral-500  list-inside dark:text-neutral-400  flex-col text-xl flex gap-5">
                {features[1].map((feature) => (
                  <li key={feature}>
                    {
                      <span className="md:text-2xl text-lg font-heading  leading-10 font-bold">
                        {feature}
                      </span>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmenityFeatures;
