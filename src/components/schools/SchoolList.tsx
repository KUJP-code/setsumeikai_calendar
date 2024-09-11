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
	const schoolIdOrder = [
		31, 11, 7, 5, 4, 3, 13, 16, 8, 6, 22, 26, 9, 15, 10, 24, 12, 23, 25, 36, 30,
		17, 21, 33, 34, 27, 14, 32, 28, 20, 18, 29, 19, 35,
	];

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
					.sort((a, b) => {
						const aIndex = schoolIdOrder.indexOf(Number.parseInt(a.id));
						const bIndex = schoolIdOrder.indexOf(Number.parseInt(b.id));
						// If it's not in the order list, put it at the end
						if (aIndex === -1) return 1;

						return aIndex - bIndex;
					})
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
