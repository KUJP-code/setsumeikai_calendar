import SearchBox from "./SearchBox";
import SchoolCard from "./SchoolCard";
import { useState } from "react";
import useSelectionContext from "../../hooks/useSelectionContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { school } from "../../declarations";
import PrefectureFilter from "./PrefectureFilter";

export default function SchoolList() {
	const { schools, setSelections } = useSelectionContext();
	const [query, setQuery] = useState("");
	const [parent] = useAutoAnimate();
	const prefectures = new Set(
		schools.map((school: school) => school.prefecture),
	);
	const [prefecture, setPrefecture] = useState("");
	const displayedSchools = schools.filter(
		(school: school) =>
			(prefecture === "" || school.prefecture === prefecture) &&
			(school.name.toUpperCase().includes(query.toUpperCase()) ||
				school.address.includes(query) ||
				school.phone.includes(query) ||
				school.busAreas.some((area) => area.includes(query)) ||
				school.nearbyStations.some((station) => station.includes(query)) ||
				school.hiragana.some((hiragana) => hiragana.includes(query)) ||
				school.nearbySchools.some((school) => school.includes(query))),
	);

	return (
		<main className="flex flex-wrap justify-evenly gap-2 px-3 md:px-2">
			<SearchBox setQuery={setQuery} query={query} />
			<PrefectureFilter
				prefectures={prefectures}
				prefectureFilter={prefecture}
				setPrefectureFitler={setPrefecture}
			/>
			<div
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
				ref={parent}
			>
				{displayedSchools
					.sort(
						(a, b) => Number.parseInt(a.position) - Number.parseInt(b.position),
					)
					.map((s: school) => {
						if (!s) return;

						return (
							<SchoolCard
								school={s}
								key={s.id}
								setSchool={() =>
									setSelections({
										setsumeikaiDate: undefined,
										setsumeikaiId: undefined,
										schoolName: s.name,
										schoolId: s.id,
									})
								}
							/>
						);
					})}
			</div>
		</main>
	);
}
