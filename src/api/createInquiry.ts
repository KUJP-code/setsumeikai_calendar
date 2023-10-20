import { Params, redirect } from "react-router-dom";

export default async function createInquiry(
  params: Params<string>,
  request: Request
) {
  console.log(request, params);
  const data = await request.formData();
  console.log(data);
  const inquiryObject = Object.fromEntries(data);
  console.log(inquiryObject);
  return redirect("/form/8/6");
}
