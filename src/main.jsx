import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";

const router = createBrowserRouter([
  {
    path: "admin",
    element: <App isAdmin={true} />,
  },
  {
    path: "/",
    element: <App isAdmin={false} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
