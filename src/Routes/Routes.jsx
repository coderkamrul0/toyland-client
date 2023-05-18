import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import React from "react";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddaToy from "../Pages/AddaToy/AddaToy";
import MyToys from "../Pages/MyToys/MyToys";

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
        },
        {
          path: '/addaToy',
          element: <PrivateRoute><AddaToy/></PrivateRoute>
        },
        {
          path: '/myToys',
          element: <PrivateRoute><MyToys/></PrivateRoute>
        }
      ]
    },
  ]);
  

  export default router;