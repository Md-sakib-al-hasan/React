// import { Navigate, createBrowserRouter } from "react-router-dom";
// import Mainlayout from "../Layout/Mainlayout";
// import Home from "../Pages/Home/Home";
// import Favorites from "../Pages/Favorites/Favorites";
// import Login from "../Pages/Login/Login";
// import PhonesDetails from "../Components/Phones/PhonesDetails";
// import Errorpages from "../Pages/Errorpages/Errorpages";
// const sk = false;
// const Route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Mainlayout></Mainlayout>,
//     errorElement: <Errorpages></Errorpages>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//         loader: () => fetch("Phones.json"),
//       },
//       {
//         path: "/favorites",
//         element: <Favorites></Favorites>,
//       },
//       {
//         path: "/login",
//         element: sk ? <Login></Login> : <Navigate to="/"></Navigate>,
//       },
//       {
//         path: "/phones/:id",
//         element: <PhonesDetails></PhonesDetails>,
//         loader: () => fetch("../../public/Phones.json"),
//       },
//     ],
//   },
// ]);

// export default Route;

import { Navigate, createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import PhonesDetails from "../Components/Phones/PhonesDetails";
import Errorpages from "../Pages/Errorpages/Errorpages";
const sk = false;
const Route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Errorpages></Errorpages>,
    children: [
      {
        index: true,
        element: <Login></Login>,
      },
    ],
  },
]);

export default Route;
