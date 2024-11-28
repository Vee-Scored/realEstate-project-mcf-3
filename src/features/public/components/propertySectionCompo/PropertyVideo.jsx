import ProperDetailTitle from "./ProperDetailTitle";
import VideoComponent from "./VideoComponent";

const PropertyVideo = () => {
  return (
    <div className=" flex flex-col gap-8 py-16">
      <ProperDetailTitle text="Property Video" />

      <div className=" w-full rounded-sm overflow-hidden">
        <VideoComponent />
      </div>
    </div>
  );
};

export default PropertyVideo;
