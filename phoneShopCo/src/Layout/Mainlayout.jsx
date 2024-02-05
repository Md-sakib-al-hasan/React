import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";

const Mainlayout = () => {
  const lo = useLocation();
  useEffect(() => {
    console.log(lo.pathname);
    document.title = `phone${lo.pathname.replace("/", "-")}`;
    if (lo.state) {
      document.title = lo.state;
    } else {
      document.title = `phone${lo.pathname.replace("/", "-")}`;
    }
  }, [lo.pathname]);
  return (
    <div className="max-w-[1330px] mx-auto">
      <Navbar></Navbar>
      <Outlet context={"skaib"}></Outlet>
    </div>
  );
};

export default Mainlayout;
