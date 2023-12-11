import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"
import Laptop from "./views/Laptop/Laptop"

import Smartphone from "./views/Smartphone/Smartphone"
import Tv from "./views/Tv/Tv"
import Lifestyle from './views/Lifestyle/Lifestyle';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShowDetails from './views/ShowDetails/ShowDetails'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/laptop",
      element: <Laptop />,
    },
   
    
  
      {
        path: "/smartphone",
        element: <Smartphone />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
      {
        path: "/lifestyle",
        element: <Lifestyle />,
      },
      {
        path: "/laptop/showdetails/:id",
        element: <ShowDetails />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
 <RouterProvider router={router}/>

</>
);
