import { Outlet, useLocation } from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";
import FooterNav from "./components/routing/FooterNav";
import { useState } from "react";

export default function App() {
  const location = useLocation();
  const [selections, setSelections] = useState<selections>({
    schoolName: "",
    schoolId: 0,
    setsumeikaiDate: "",
    setsumeikaiId: 0,
  });

  return (
    <>
      <ProgressNav
        school={selections.schoolName}
        setsumeikai={selections.setsumeikaiDate}
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
        school={selections.schoolName}
        setsumeikai={selections.setsumeikaiDate}
      />
    </>
  );
}
