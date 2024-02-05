import backgroundImage from "./assets/image/larm-rmah-AEaTUnvneik-unsplash.jpg"; // Import your image

const App = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 99, 71, 0.5)", // Light red color with 50% opacity
        }}
      >
        <p className="text-6xl">This is pic</p>
      </div>
    </div>
  );
};

export default App;
