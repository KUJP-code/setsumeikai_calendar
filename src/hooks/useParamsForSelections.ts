import { useParams } from "react-router-dom";

interface props {
  selections: selections;
  setSelections: React.Dispatch<React.SetStateAction<selections>>;
  schools: school[];
  setsumeikais: setsumeikai[];
}

export default function useParamsForSelections({
  selections,
  setSelections,
  schools,
  setsumeikais,
}: props) {
  const { schoolId: paramSchoolId, setsumeikaiId: paramSetsumeikaiId } =
    useParams();

  if (selections.schoolId === undefined && paramSchoolId) {
    const paramSchool: school | undefined = schools.find(
      (s) => s.id === parseInt(paramSchoolId)
    );

    if (paramSchool) {
      setSelections({
        ...selections,
        schoolId: paramSchool.id,
        schoolName: paramSchool.name,
      });
    }
  }

  if (selections.setsumeikaiId === undefined && paramSetsumeikaiId) {
    const paramSetsumeikai: setsumeikai | undefined = setsumeikais.find((s) => {
      return s.id === paramSetsumeikaiId;
    });

    if (paramSetsumeikai) {
      setSelections({
        ...selections,
        setsumeikaiId: parseInt(paramSetsumeikai.id),
        setsumeikaiDate: new Date(paramSetsumeikai.start),
      });
    }
  }
}
