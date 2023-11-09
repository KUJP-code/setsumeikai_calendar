import { useEffect, useRef } from "react";
import jaFormat from "../../helpers/jaFormat";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

export default function ProgressNav(selections: selections) {
  const { schoolId, schoolName, setsumeikaiDate, setsumeikaiId } = selections;
  const progressNavRef = useRef<null | HTMLElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (progressNavRef.current)
      progressNavRef.current.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <nav
      id="progressNav"
      className="flex flex-col md:flex-row p-3 gap-1 justify-evenly"
      ref={progressNavRef}
    >
      <Breadcrumb
        text="スクール"
        to="/school_list"
        currentSelection={schoolName}
      />
      <Breadcrumb
        text="説明会日付"
        to={schoolId ? `/calendar/${schoolId}/${setsumeikaiId}` : undefined}
        currentSelection={setsumeikaiDate ? jaFormat(setsumeikaiDate) : ""}
      />
      <Breadcrumb
        text="お申し込み"
        to={setsumeikaiId ? `/form/${schoolId}/${setsumeikaiId}` : undefined}
      />
    </nav>
  );
}
