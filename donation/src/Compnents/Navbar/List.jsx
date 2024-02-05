import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline  " : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "Pending" : isActive ? "text-red-500 underline" : ""
          }
          to="/Donations"
        >
          Donations
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "Pending" : isActive ? "text-red-500 underline" : ""
          }
          to="/Statistics"
        >
          Statistic
        </NavLink>
      </li>
    </>
  );
};

export default List;
