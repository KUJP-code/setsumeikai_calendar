import SearchBox from "./SearchBox";
import SchoolCard from "./SchoolCard";
import { useState } from "react";
import useSelectionContext from "../../hooks/useSelectionContext";

export default function SchoolList() {
  const { schools, selections, setSelections } = useSelectionContext();
  const [query, setQuery] = useState("");
  const displayedSchools =
    query === ""
      ? schools
      : schools.filter(
          (school) =>
            school.name.includes(query) ||
            school.address.includes(query) ||
            school.phone.includes(query) ||
            school.busAreas.some((area) => area.includes(query)) ||
            school.nearbyStations.some((station) => station.includes(query))
        );

  return (
    <main className="flex flex-wrap justify-evenly gap-3 p-3">
      <SearchBox setQuery={setQuery} query={query} />
      {displayedSchools.map((school) => {
        return (
          <SchoolCard
            school={school}
            key={school.id}
            selected={school.name === selections.schoolName}
            setSchool={() =>
              setSelections({
                setsumeikaiDate: undefined,
                setsumeikaiId: undefined,
                schoolName: school.name,
                schoolId: school.id,
              })
            }
          />
        );
      })}
    </main>
  );
}
