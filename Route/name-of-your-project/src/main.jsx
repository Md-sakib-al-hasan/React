import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './compnents/routes/From/root'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Errorpage from './compnents/Error/Errorpage'
import Contact from './compnents/Contact/Contact'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>
  },
  {
    path:'/contacts/:name',
    element:<Contact></Contact>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
