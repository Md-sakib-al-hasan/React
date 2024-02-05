import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Errorpage/Error";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Danation";
import Statistics from "../Pages/Statistics/Statistic";
import DonationsDeatils from "../Compnents/DonationsDeatails/DonationsDeatils";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("donation.json"),
      },
      {
        path: "/Donations",
        element: <Donation></Donation>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Donations/1",
        element: <DonationsDeatils></DonationsDeatils>,
      },
    ],
  },
]);

export default Router;
