import { useEffect, useRef } from "react";
import jaFormat from "../../helpers/jaFormat";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";
import { selections } from "../../declarations";

export default function ProgressNav(selections: selections) {
  const progressNavRef = useRef<null | HTMLElement>(null);
  const { pathname } = useLocation();
  const { schoolId, schoolName, setsumeikaiDate, setsumeikaiId } = selections;
  const sharedInactiveClasses =
    "before:border-[3px] before:border-ku-secondary before:-m-[0.125rem]";
  useEffect(() => {
    if (progressNavRef.current)
      progressNavRef.current.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <nav
      id="progressNav"
      className="flex flex-col md:flex-row p-3 gap-1 justify-evenly before:bg-main-background"
      ref={progressNavRef}
    >
      <Breadcrumb
        activeClasses="before:-left-1.5"
        currentSelection={schoolName}
        inactiveClasses={`before:-left-1.5 before:border-r-0 ${sharedInactiveClasses}`}
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
        activeClasses="before:-right-1.5"
        inactiveClasses={`before:-right-1 before:border-l-0 ${sharedInactiveClasses}`}
        text="お申し込み"
        to={setsumeikaiId ? `/form/${schoolId}/${setsumeikaiId}` : undefined}
      />
    </nav>
  );
}
