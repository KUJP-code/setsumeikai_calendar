import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";
import FooterNav from "./components/routing/FooterNav";
import { useState } from "react";
import useParamsForSelections from "./hooks/useParamsForSelections";

export default function App() {
  const { schools, setsumeikais }: SchoolsAndEvents =
    useLoaderData() as SchoolsAndEvents;
  const location = useLocation();
  const [selections, setSelections] = useState<selections>({
    schoolName: "",
    schoolId: undefined,
    setsumeikaiDate: undefined,
    setsumeikaiId: undefined,
  });

  useParamsForSelections({ selections, setSelections, schools, setsumeikais });

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
            setsumeikais,
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
