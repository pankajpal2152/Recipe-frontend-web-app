import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import CategoryPage from './pages/catagory/CategoryPage.jsx'
import Search from './pages/Search.jsx';
import SingleProduct from './pages/products/SingleProduct.jsx'
import Recipes from './pages/products/Recipes.jsx'
import Resources from './pages/resources/Resources.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/categories/:category",
        element: <CategoryPage/>
      },
      {
        path:"/search",
        element:<Search/>

      },
      {
        path:"/items/:id",
        element:<SingleProduct/>,
        loader:({params}) => fetch (`https://recipewebappbackend.vercel.app/api/items/${params.id}`)
      },
      {
        path:"/recipes",
        element: <Recipes/>
      },
      {
        path:"/resources",
        element:<Resources/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
