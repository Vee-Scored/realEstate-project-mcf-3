import ReactPlayer from "react-player";
import propertyVd from "../../../../assets/propertyDetail/propertyVd.mp4";

const VideoComponent = () => {
  return (
    <ReactPlayer
      url={propertyVd}
      playing // Autoplay enabled
      loop
      muted
      controls={false}
      width="100%"
      height="100%"
    />
  );
};

export default VideoComponent;
