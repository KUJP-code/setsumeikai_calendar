import { useActionData } from "react-router-dom";

export default function useInquiryResponse() {
  const actionData = useActionData() as inquiryApiResponse | undefined;

  return actionData ? actionData : undefined;
}
