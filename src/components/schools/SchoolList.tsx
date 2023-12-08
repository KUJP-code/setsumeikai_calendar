import SearchBox from "./SearchBox";
import SchoolCard from "./SchoolCard";
import { useState } from "react";
import useSelectionContext from "../../hooks/useSelectionContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { school } from "../../declarations";

export default function SchoolList() {
  const { schools, setSelections } = useSelectionContext();
  const [query, setQuery] = useState("");
  const [parent] = useAutoAnimate();
  const displayedSchools =
    query === ""
      ? schools
      : schools.filter(
          (school: school) =>
            school.name.toUpperCase().includes(query.toUpperCase()) ||
            school.address.includes(query) ||
            school.phone.includes(query) ||
            school.busAreas.some((area) => area.includes(query)) ||
            school.nearbyStations.some((station) => station.includes(query)) ||
            school.hiragana.some((hiragana) => hiragana.includes(query)) ||
            school.nearbySchools.some((school) => school.includes(query)),
        );

  return (
    <main className="flex flex-wrap justify-evenly gap-2 px-3 md:px-2">
      <SearchBox setQuery={setQuery} query={query} />
      <div
        className="flex flex-wrap justify-evenly rounded gap-[1.5vw] after:flex-grow"
        ref={parent}
      >
        {displayedSchools.map((school: school) => {
          return (
            <SchoolCard
              school={school}
              key={school.id}
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
      </div>
    </main>
  );
}
