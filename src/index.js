import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Pages/Home';
import './App.css';
import About from './Component/Pages/About';
import ListingPage from './Component/Pages/ListingPage';
import ContactPage from './Component/Pages/ContactPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Home />,
  },
  {
    path: "/Listing",
    element: <ListingPage />,
  },
  {
    path: "/Contact",
    element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);