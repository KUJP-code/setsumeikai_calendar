import { useEffect, useRef } from "react";
import jaFormat from "../../helpers/jaFormat";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";
import type { selections } from "../../declarations";

export default function ProgressNav(selections: selections) {
	const progressNavRef = useRef<null | HTMLElement>(null);
	const location = useLocation();
	const { schoolId, schoolName, setsumeikaiDate, setsumeikaiId } = selections;
	const sharedInactiveClasses =
		"before:border-[2px] before:border-ku-button before:h-full rounded";
	useEffect(() => {
		if (progressNavRef.current) {
			const position = progressNavRef.current.getBoundingClientRect().top;
			const headerHeight = 100;
			const currentPosition = window.scrollY;
			const offset = position + currentPosition - headerHeight;
			window.scrollTo({
				top: offset,
				behavior: "smooth",
			});
		}
	}, [location]);

	return (
		<nav
			id="progressNav"
			className="flex flex-col md:flex-row p-3 gap-1 justify-evenly before:bg-main-background"
			ref={progressNavRef}
		>
			<Breadcrumb
				activeClasses="before:-left-1.5 before:rounded-e-none before:h-full"
				currentSelection={schoolName}
				inactiveClasses={`before:-left-1.5 before:border-r-0 before:rounded-e-none ${sharedInactiveClasses}`}
				text="スクール"
				to="/school_list"
			/>
			<Breadcrumb
				activeClasses="before:hidden"
				inactiveClasses="before:hidden"
				currentSelection={setsumeikaiDate ? jaFormat(setsumeikaiDate) : ""}
				text="説明会日付"
				to={schoolId ? `/calendar/${schoolId}/${setsumeikaiId}` : undefined}
			/>
			<Breadcrumb
				activeClasses="before:-right-1 before:rounded-s-none before:h-full"
				inactiveClasses={`before:-right-1 before:border-l-0 before:rounded-s-none ${sharedInactiveClasses}`}
				text="お申し込み"
				to={setsumeikaiId ? `/form/${schoolId}/${setsumeikaiId}` : undefined}
			/>
		</nav>
	);
}
