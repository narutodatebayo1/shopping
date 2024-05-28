import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"
import Home from './home/home.js';
import Register from './register/register.js';
import Login from './login/login.js';
import About from "./about/about.js"
import Category from './category/category';
import Test from './test/test';
import ParamsHandler from './paramsHandler/paramsHandler';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/:params",
        element: <ParamsHandler />
    },
    {
        path: "/category/:id",
        element: <Category />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/test",
        element: <Test />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);