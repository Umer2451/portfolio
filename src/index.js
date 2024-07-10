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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/portfolio",
    element: <Home />, 
  },
  {
    path: "/fakestore",
    element: <FakeStore />, 
  },
  {
    path: "/products",
    element: <ProductFakeStore />, 
  },
  {
    path: "/login",
    element: <Login />, 
  },
  {
    path: "/cart",
    element: <Cart />, 
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
