import { Navigate, createHashRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../../ErrorPage";
import Calendar from "../calendar/Calendar";
import Form from "../form/Form";
import SchoolList from "../schools/SchoolList";
import getSchoolsAndEvents from "../../api/getSchoolsAndEvents";
import createInquiry from "../../api/createInquiry";

export default function Router() {
	return createHashRouter([
		{
			path: "/",
			element: <App />,
			errorElement: <ErrorPage />,
			loader: getSchoolsAndEvents,
			children: [
				{
					path: "*",
					element: <Navigate to="/school_list" />,
				},
				{ index: true, element: <Navigate to="/school_list" /> },
				{ path: "/school_list", element: <SchoolList /> },
				{ path: "/calendar/:schoolId/:setsumeikaiId", element: <Calendar /> },
				{
					path: "/form/:schoolId/:setsumeikaiId",
					element: <Form />,
					action: ({ params, request }) => createInquiry(params, request),
				},
			],
		},
	]);
}
