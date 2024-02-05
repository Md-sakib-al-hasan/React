import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Meals from './components/Meals/Meals.jsx'
import Posts from './components/Users/Users.jsx'
import Error from './components/Error/Error.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MealDeatails from './components/MealDeatail/MealDeatails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path:'/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element:<Meals></Meals>
      },
      {
        path:'/posts',
        element:<Posts></Posts>
      },
      {
        path:'/meals/:id',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.id}`),
        element:<MealDeatails></MealDeatails>
      }
    ]
    
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
