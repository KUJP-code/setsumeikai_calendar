import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";
import FooterNav from "./components/routing/FooterNav";
import { useState } from "react";

interface ContextType {
  selectedSchool: string;
  setSelectedSchool: React.Dispatch<React.SetStateAction<string>>;
  selectedSetsumeikai: string;
  setSelectedSetsumeikai: React.Dispatch<React.SetStateAction<string>>;
}

export default function App() {
  let location = useLocation();
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedSetsumeikai, setSelectedSetsumeikai] = useState("");

  return (
    <>
      <ProgressNav school={selectedSchool} setsumeikai={selectedSetsumeikai} />
      <Outlet
        context={
          {
            selectedSchool,
            setSelectedSchool,
            selectedSetsumeikai,
            setSelectedSetsumeikai,
          } satisfies ContextType
        }
      />
      <FooterNav
        currentStep={location.pathname}
        school={selectedSchool}
        setsumeikai={selectedSetsumeikai}
      />
    </>
  );
}

export function useSelections() {
  return useOutletContext<ContextType>();
}
