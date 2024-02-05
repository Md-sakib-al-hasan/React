import SearchComponent from "./SearchComponent";
import backgroundImage from "../../assets/image/larm-rmah-AEaTUnvneik-unsplash.jpg";
import "./banner.css";
const Banner = () => {
  return (
    <div
      className="py-60"
      style={{
        position: "relative",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex justify-center items-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255, 0.9)", // Light red color with 50% opacity
        }}
      >
        <div className="text-center ">
          <h1 className="text-5xl font-bold pb-12">
            I Grow By Helping People In Need
          </h1>
          <div className="flex justify-center">
            <SearchComponent></SearchComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
