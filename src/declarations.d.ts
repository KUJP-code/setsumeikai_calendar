interface school {
  id: number;
  name: string;
  address: string;
  phone: string;
  busAreas: string[];
  nearbyStations: string[];
}

interface setsumeikai {
  end: string;
  id: string;
  start: string;
  title: string;
}

interface selections {
  schoolName: string;
  schoolId: number | undefined;
  setsumeikaiDate: Date | undefined;
  setsumeikaiId: number | undefined;
}

interface selectionsContext {
  selections: selections;
  setSelections: React.Dispatch<React.SetStateAction<selections>>;
}
