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
	const className =
		"rounded-xl text-center p-2 border-button text-ku-button font-bold";
	const activeClasses = "bg-ku-orange text-white border-ku-orange";

	return (
		<nav className="flex flex-wrap gap-3 justify-center items-center">
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
