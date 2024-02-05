import {
    createBrowserRouter,
  } from "react-router-dom";
  import Mainlaout from '../components/Mainlaout/Mainlaout';
  import Home from '../components/Home/Home';
  import Products from '../components/Products/Products';
import Dashboard from "../components/Dashboard/Dashboard";
import ProductsDeatils from "../components/Products/ProductsDeatils";
import Dashboard2 from "../components/Dashboard/Dashbord2";
import Profile from "../components/Dashboard/Profile";
import EditeProfile from "../components/Dashboard/EditeProfile";
  



const Router = createBrowserRouter([
    {
      path:'/',
      element:<Mainlaout></Mainlaout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
            path:"/products",
            loader: () => 
            fetch('https://dummyjson.com/products'),            
            element:<Products></Products>
          },
          {
              path:'/dashboard',
              element:<Dashboard></Dashboard>,
              children: [
                {
                  path:'/dashboard',
                  element:<Dashboard2></Dashboard2>
                },
                {
                  path:'/dashboard/profile',
                  element:<Profile></Profile>
                },
                {
                  path:'/dashboard/editeprofile',
                  element:<EditeProfile></EditeProfile>
                }

              ]
          },
          {
            path:"/products/:id",
            element:<ProductsDeatils></ProductsDeatils>,
            loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`), 
            
          }
      ]
    },
   
  ])

  export default Router