import type { Params } from "react-router-dom";
import { redirectDocument } from "react-router-dom";

export default async function createInquiry(
	_params: Params<string>,
	request: Request,
) {
	console.log("hi");
	const data = await request.formData();
	const inquiryObject = Object.fromEntries(data);
	const headers = new Headers({
		"Content-Type": "application/json",
	});

	// This used to be used to show a nice summary page of the inquiry
	// but now for VERY IMPORTANT BUSINESS REASONS it has to redirect
	// to an ugly generic confirmation page.
	// I just commented out the component for the summary if they
	// ever realise the error of their ways and bring it back.
	// You can find it in the Form component
	const response = await fetch("http://localhost:3000/create_inquiry.json", {
		method: "POST",
		headers: headers,
		body: JSON.stringify({ inquiry: inquiryObject }),
	});

	if (response.status !== 200) {
		return console.log(response);
	}

	return redirectDocument("https://kids-up.jp/complete/");
}
