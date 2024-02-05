import { useLoaderData, useOutletContext } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";

const Home = () => {
  const phones = useLoaderData();
  const us = useOutletContext();
  return (
    <div>
      <Banner></Banner>
      <p>{us}</p>
      <Phones phones={phones}></Phones>
    </div>
  );
};

export default Home;
