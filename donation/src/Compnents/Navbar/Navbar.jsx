import { NavLink } from "react-router-dom";
import logo from "../../assets/image/Logo.png";
import List from "./List";

const Navbar = () => {
  return (
    <div className="py-5">
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start flex  items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn pt-3 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <List></List>
            </ul>
          </div>
          <NavLink className="hidden lg:flex" to="/">
            <img src={logo} className="w-2/3"></img>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-16 pb-2 px-1">
            <List></List>
          </ul>
        </div>
        <NavLink className="lg:hidden flex justify-evenly" to="/">
          <img src={logo} className="w-2/3"></img>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
