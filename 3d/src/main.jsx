import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Iphone } from "./Iphone.jsx";
import { Macbook } from "./Macbook.jsx";
import { Applewatch } from "./Applewatch.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/iphone",
    element: <Iphone />,
  },
  {
    path: "/macbook",
    element: <Macbook />,
  },
  {
    path: "/applewatch",
    element: <Applewatch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
