import { useParams } from "react-router-dom";
import type { selections, school, setsumeikai } from "../declarations";

interface props {
	selections: selections;
	setSelections: React.Dispatch<React.SetStateAction<selections>>;
	schools: school[];
}

export default function useParamsForSelections({
	selections,
	setSelections,
	schools,
}: props) {
	const { schoolId: paramSchoolId, setsumeikaiId: paramSetsumeikaiId } =
		useParams();

	if (selections.schoolId === undefined && paramSchoolId) {
		const paramSchool: school | undefined = schools.find(
			(s) => s.id === paramSchoolId,
		);

		if (paramSchool) {
			setSelections({
				...selections,
				schoolId: paramSchool.id,
				schoolName: paramSchool.name,
			});

			if (selections.setsumeikaiId === undefined && paramSetsumeikaiId) {
				const paramSetsumeikai: setsumeikai | undefined =
					paramSchool.setsumeikais.find((s) => {
						return s.id === paramSetsumeikaiId;
					});

				if (paramSetsumeikai) {
					setSelections({
						...selections,
						setsumeikaiId: paramSetsumeikai.id,
						setsumeikaiDate: new Date(paramSetsumeikai.start),
					});
				}
			}
		}
	}
}
