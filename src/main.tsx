import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Calendar from "./Calendar.tsx";
import Form from "./Form.tsx";
import SchoolList from "./SchoolList.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/calendar", element: <Calendar /> },
      { path: "/form", element: <Form /> },
      { path: "/school_list", element: <SchoolList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
