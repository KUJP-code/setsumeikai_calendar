interface formOption {
  value: string;
  name: string;
}

type inputType = "date" | "email" | "number" | "tel" | "text" | "textarea";

interface inquiry {
  schoolId: string;
  setsumeikai_id: string;
  parent_name: string;
  phone: string;
  email: string;
  child_name: string;
  child_birthday: string;
  kindy: string;
  ele_school: string;
  planned_school: string;
  start_date: string;
  referrer: string;
  requests: string;
}

interface inquiryApiResponse {
  response: { status: number };
  inquiryObject: inquiry;
}

interface school {
  id: string;
  name: string;
  address: string;
  phone: string;
  busAreas: string[];
  nearbyStations: string[];
  hiragana: string[];
  setsumeikais: setsumeikai[];
}

interface setsumeikai {
  id: string;
  start: string;
  title: string;
}

interface selections {
  schoolName: string;
  schoolId: string | undefined;
  setsumeikaiDate: Date | undefined;
  setsumeikaiId: string | undefined;
}

interface selectionsContext {
  schools: school[];
  selections: selections;
  setSelections: React.Dispatch<React.SetStateAction<selections>>;
}
