import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './compnents/Home/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './compnents/About/About';
import Contact from './compnents/Contact/Contact';
import User from './compnents/User/user';
import Showuse from './compnents/Showuse/Showuse';
import Posts from './compnents/Posts/Posts';
import Post from './compnents/Post/Post';
import Erroorpage from './compnents/Errorpage/Erroorpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Erroorpage></Erroorpage>,
    children: [
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Showuse></Showuse>
      },
      {
        path:'/post',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },{
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Post></Post>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
