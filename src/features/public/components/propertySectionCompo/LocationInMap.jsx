import MapComponent from "./MapComponent";
import ProperDetailTitle from "./ProperDetailTitle";

const LocationInMap = () => {
  return (
    <div>
      <div className=" flex flex-col gap-8 py-16">
        <ProperDetailTitle text="Location in Map" />
        <div className=" w-full rounded-sm overflow-hidden">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default LocationInMap;
