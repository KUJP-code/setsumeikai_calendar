import type { Params } from "react-router-dom";

export default async function createInquiry(
	_params: Params<string>,
	request: Request,
) {
	const data = await request.formData();
	const inquiryObject = Object.fromEntries(data);
	const headers = new Headers({
		"Content-Type": "application/json",
	});

	const response = await fetch(
		"http://event-site-env.eba-ixrh9q23.ap-northeast-1.elasticbeanstalk.com/create_inquiry.json",
		{
			method: "POST",
			headers: headers,
			body: JSON.stringify({ inquiry: inquiryObject }),
		},
	);

	return { response: response, inquiryObject: inquiryObject };
}
