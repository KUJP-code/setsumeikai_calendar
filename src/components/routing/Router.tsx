import { Navigate, createHashRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../../ErrorPage";
import Calendar from "../calendar/Calendar";
import Form from "../../Form";
import SchoolList from "../schools/SchoolList";
import getSchools from "../../api/getSchools";
import getSchoolEvents from "../../api/getEvents";

export default function Router() {
  return createHashRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Navigate to="/school_list" /> },
        {
          path: "/calendar/:schoolName",
          element: <Calendar />,
          loader: ({ params }) =>
            params.schoolName !== undefined
              ? getSchoolEvents(params.schoolName)
              : [],
        },
        { path: "/form/:schoolName/:eventId", element: <Form /> },
        { path: "/school_list", element: <SchoolList />, loader: getSchools },
      ],
    },
  ]);
}
