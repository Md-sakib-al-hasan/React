import "./App.css";
import LineCharts from "./components/LineCharts/LineCharts";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </>
  );
}

export default App;
