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
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
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
        },
        {
          path: '/toy/:id',
          element: <PrivateRoute><ToyDetails/></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ]
    },
  ]);
  

  export default router;