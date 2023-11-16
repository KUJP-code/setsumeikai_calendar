import { useEffect, useRef } from "react";
import jaFormat from "../../helpers/jaFormat";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";
import { selections } from "../../declarations";

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
		specificClasses="before:inset-y-0 before:-left-1 before:w-[50px] before:block before:absolute before:skew-x-12"
        text="スクール"
        to="/school_list"
        currentSelection={schoolName}
      />
      <Breadcrumb
		specificClasses=""
        text="説明会日付"
        to={schoolId ? `/calendar/${schoolId}/${setsumeikaiId}` : undefined}
        currentSelection={setsumeikaiDate ? jaFormat(setsumeikaiDate) : ""}
      />
      <Breadcrumb
		specificClasses="before:inset-y-0 before:-right-1 before:w-[50px] before:block before:absolute before:skew-x-12"
        text="お申し込み"
        to={setsumeikaiId ? `/form/${schoolId}/${setsumeikaiId}` : undefined}
      />
    </nav>
  );
}
