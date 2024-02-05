import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Root  from './components/Root/Root';
import Home from './components/Home/Home';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import Errorepage from './components/Errorepage/Errorepage';
import JobDeatails from './components/JobDeatails/JobDeatails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorepage></Errorepage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:'/applied',
        element:<Appliedjobs></Appliedjobs>,
        loader: () => fetch('../jobs.json'),
      },
      {
        path:'/job/:id',
        element:<JobDeatails></JobDeatails>,
        loader: () => fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
