import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";
import FooterNav from "./components/routing/FooterNav";
import { useState } from "react";
import useParamsForSelections from "./hooks/useParamsForSelections";
import { school, selections, selectionsContext } from "./declarations";

export default function App() {
  const schools: school[] = useLoaderData() as school[];
  const location = useLocation();

  const [selections, setSelections] = useState<selections>({
    schoolName: "",
    schoolId: undefined,
    setsumeikaiDate: undefined,
    setsumeikaiId: undefined,
  });

  useParamsForSelections({ selections, setSelections, schools });

  return (
    <div className="bg-main-background">
      <ProgressNav {...selections} />
      <Outlet
        context={
          {
            schools,
            selections,
            setSelections,
          } satisfies selectionsContext
        }
      />
      <FooterNav currentStep={location.pathname} selections={selections} />
    </div>
  );
}
