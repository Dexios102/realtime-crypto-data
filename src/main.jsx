import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./app/store";

import NotFound from "./components/NotFound.jsx";
import {
  Home,
  Exchanges,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/exchanges",
        element: <Exchanges />,
      },
      {
        path: "/cryptocurrencies",
        element: <Cryptocurrencies />,
      },
      {
        path: "/crypto/:coinId",
        element: <CryptoDetails />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
