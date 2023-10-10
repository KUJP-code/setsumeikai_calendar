import { Navigate, createHashRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../../ErrorPage";
import Calendar from "../../Calendar";
import Form from "../../Form";
import SchoolList from "../../SchoolList";

export default function Router() {
  return createHashRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Navigate to="/school_list" /> },
        { path: "/calendar", element: <Calendar /> },
        { path: "/form", element: <Form /> },
        { path: "/school_list", element: <SchoolList /> },
      ],
    },
  ]);
}
