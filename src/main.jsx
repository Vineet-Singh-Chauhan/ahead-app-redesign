import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App isAdmin={false} />,
  },
  {
    path: "admin",
    element: <App isAdmin={true} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
