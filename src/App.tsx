import { Outlet, useLocation } from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";
import FooterNav from "./components/routing/FooterNav";
import { useState } from "react";

export default function App() {
  const location = useLocation();
  const [selections, setSelections] = useState<selections>({
    schoolName: "",
    schoolId: undefined,
    setsumeikaiDate: undefined,
    setsumeikaiId: undefined,
  });

  return (
    <>
      <ProgressNav
        schoolName={selections.schoolName}
        setsumeikaiDate={selections.setsumeikaiDate}
      />
      <Outlet
        context={
          {
            selections,
            setSelections,
          } satisfies selectionsContext
        }
      />
      <FooterNav
        currentStep={location.pathname}
        schoolName={selections.schoolName}
        setsumeikaiDate={selections.setsumeikaiDate}
      />
    </>
  );
}
