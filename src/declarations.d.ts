export interface formOption {
  value: string;
  name: string;
}

type inputType = "date" | "email" | "number" | "tel" | "text" | "textarea";

export interface inquiry {
  setsumeikai_id: string;
  parent_name: string;
  phone: string;
  email: string;
  child_name: string;
  child_birthday: string;
  kindy: string;
  ele_school: string;
  school_id: string;
  start_date: string;
  referrer: string;
  requests: string;
}

export interface inquiryApiResponse {
  response: { status: number; errors: string[] };
  inquiryObject: inquiry;
}

export interface school {
  id: string;
  name: string;
  address: string;
  prefecture: string;
  image: string;
  phone: string;
  busAreas: string[];
  nearbyStations: string[];
  nearbySchools: string[];
  hiragana: string[];
  setsumeikais: setsumeikai[];
}

export interface setsumeikai {
  id: string;
  full: boolean;
  start: string;
  title: string;
}

export interface selections {
  schoolName: string;
  schoolId: string | undefined;
  setsumeikaiDate: Date | undefined;
  setsumeikaiId: string | undefined;
}

export interface selectionsContext {
  schools: school[];
  selections: selections;
  setSelections: React.Dispatch<React.SetStateAction<selections>>;
}

export interface GTMWindow extends Window {
  dataLayer: object[];
}
