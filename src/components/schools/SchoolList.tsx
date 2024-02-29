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
  const schoolIdOrder = [31, 11, 7, 5, 4, 3, 13, 16, 8, 6, 22, 26, 9, 15, 10, 24, 12, 23, 25, 36, 30, 17, 21, 33, 34, 27, 14, 32, 28, 20, 18, 29, 19, 35, 2];

  return (
    <main className="flex flex-wrap justify-evenly gap-2 px-3 md:px-2">
      <SearchBox setQuery={setQuery} query={query} />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4"
        ref={parent}
      >
        {schoolIdOrder.map((i: number) => {
		  const school = displayedSchools.find(s => s.id === i.toString());
		  if (!school) return;

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
