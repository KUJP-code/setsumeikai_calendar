import { Navigate, createHashRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../../ErrorPage";
import Calendar from "../calendar/Calendar";
import Form from "../form/Form";
import SchoolList from "../schools/SchoolList";
import getSchools from "../../api/getSchools";
import getSchoolEvents from "../../api/getEvents";

export default function Router() {
  return createHashRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      loader: getSchools,
      children: [
        {
          path: "*",
          element: <Navigate to="/school_list" />,
        },
        { index: true, element: <Navigate to="/school_list" /> },
        {
          path: "/calendar/:schoolId",
          element: <Calendar />,
          loader: ({ params }) => {
            return params.schoolId !== undefined
              ? getSchoolEvents(parseInt(params.schoolId))
              : [];
          },
        },
        { path: "/form/:schoolId/:eventId", element: <Form /> },
        { path: "/school_list", element: <SchoolList /> },
      ],
    },
  ]);
}
