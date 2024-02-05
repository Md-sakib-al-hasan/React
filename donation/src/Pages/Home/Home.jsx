import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Compnents/DonationCards/DonationCards";
import Banner from "../../Compnents/Navbar/Banner";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <DonationCards Donations={data}></DonationCards>
    </div>
  );
};

export default Home;
