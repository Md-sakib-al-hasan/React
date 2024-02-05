import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { getContact } from "../contacts";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


console.log(getContact())
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
