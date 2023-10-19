import {
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";
import FooterNav from "./components/routing/FooterNav";
import { useState } from "react";

export default function App() {
  const schools: school[] = useLoaderData() as school[];
  const location = useLocation();
  const [selections, setSelections] = useState<selections>({
    schoolName: "",
    schoolId: 0,
    setsumeikaiDate: undefined,
    setsumeikaiId: 0,
  });

  const { schoolId: paramSchoolId } = useParams();
  if (selections.schoolId === 0 && paramSchoolId) {
    const paramSchool = schools.find((s) => s.id === parseInt(paramSchoolId));

    if (paramSchool) {
      setSelections({
        ...selections,
        schoolId: paramSchool.id,
        schoolName: paramSchool.name,
      });
    }
  }

  return (
    <>
      <ProgressNav
        schoolName={selections.schoolName}
        schoolId={selections.schoolId}
        setsumeikaiDate={selections.setsumeikaiDate}
        setsumeikaiId={selections.setsumeikaiId}
      />
      <Outlet
        context={
          {
            schools,
            selections,
            setSelections,
          } satisfies selectionsContext
        }
      />
      <FooterNav
        currentStep={location.pathname}
        schoolName={selections.schoolName}
        schoolId={selections.schoolId}
        setsumeikaiDate={selections.setsumeikaiDate}
        setsumeikaiId={selections.setsumeikaiId}
      />
    </>
  );
}
