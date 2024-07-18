import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/portfolio/home';
import FakeStore from './components/fakestore/fakestore';
import ProductFakeStore from "./components/fakestore/products";
import Login from './components/fakestore/login';
import Cart from "./components/fakestore/cart"
import App from './App';
import NewHome from './components/portfolio/newhome';
import UnderMaintenance from './components/Maintanence';
const router = createBrowserRouter([
  {
    path: "/",
    element: <UnderMaintenance />, 
  },
  {
    path: "/App",
    element: <UnderMaintenance />, 
  },
  {
    path: "/fakestore",
    element: <UnderMaintenance />, 
  },
  {
    path: "/fakestoreproducts",
    element: <UnderMaintenance />, 
  },
  {
    path: "/fakestorelogin",
    element: <UnderMaintenance />, 
  },
  {
    path: "/fakestorecart",
    element: <UnderMaintenance />, 
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
