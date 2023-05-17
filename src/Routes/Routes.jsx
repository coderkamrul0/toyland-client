import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import React from "react";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/blogs',
            element: <Blogs/>
        }
      ]
    },
  ]);
  

  export default router;