interface formOption {
  value: string;
  name: string;
}

type inputType = "date" | "email" | "number" | "tel" | "text" | "textarea";

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
  end: string;
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
