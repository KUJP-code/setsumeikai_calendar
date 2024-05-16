interface PrefectureFilterProps {
	prefectures: Set<string>;
	prefectureFilter: string;
	setPrefectureFitler: React.Dispatch<React.SetStateAction<string>>;
}

export default function PrefectureFilter({
	prefectures,
	prefectureFilter,
	setPrefectureFitler,
}: PrefectureFilterProps) {
	if (prefectures.size === 0) return null;
	prefectures.delete("");
	prefectures.delete("online");
	const className =
		"border-button rounded-xl p-2 text-center font-bold text-ku-button";
	const activeClasses = "border-ku-orange bg-ku-orange text-white";

	return (
		<nav className="flex flex-wrap items-center justify-center gap-3">
			<button
				type="button"
				key="all"
				className={`${className} ${
					prefectureFilter === "" ? activeClasses : ""
				}`}
				onClick={() => setPrefectureFitler("")}
			>
				ALL
			</button>
			{[...prefectures].map((prefecture) => (
				<button
					type="button"
					key={prefecture}
					className={`${className} ${
						prefecture === prefectureFilter ? activeClasses : ""
					}`}
					onClick={() => setPrefectureFitler(prefecture)}
				>
					{prefecture}
				</button>
			))}
		</nav>
	);
}
