import { useActionData } from "react-router-dom";
import { inquiryApiResponse } from "../declarations";

export default function useInquiryResponse() {
  const actionData = useActionData() as inquiryApiResponse | undefined;

  return actionData ? actionData : undefined;
}
