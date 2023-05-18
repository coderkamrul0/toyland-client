import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import React from "react";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
        },
        {
            path: '/allToys',
            element: <AllToys/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ]
    },
  ]);
  

  export default router;