import React from "react";
import { NavLink } from "react-router-dom";
import jpFormat from "../../helpers/jpFormat";

interface props {
  currentStep: string;
  schoolName: string;
  schoolId: number;
  setsumeikaiDate: Date | undefined;
  setsumeikaiId: number;
}

export default function FooterNav({
  currentStep,
  schoolName,
  schoolId,
  setsumeikaiDate,
  setsumeikaiId,
}: props) {
  const className =
    " flex justify-center items-center text-neutral-100 font-semibold p-3  basis-1/2 md:basis-1/3 rounded";

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (currentStep.includes("/school_list") && schoolName === "") {
      e.preventDefault();
    }
    if (currentStep === "/calendar" && setsumeikaiDate === undefined) {
      e.preventDefault();
    }
  }

  return (
    <nav className="z-50 sticky bottom-0 flex justify-between gap-3 p-3 bg-white border rounded">
      {/* Back link */}
      {currentStep.includes("/school_list") ? null : currentStep.includes(
          "/calendar"
        ) ? (
        <NavLink
          to="/school_list"
          className={"bg-ku-secondary".concat(...className)}
        >
          Change School
        </NavLink>
      ) : (
        <NavLink
          to={`/calendar/${schoolId}`}
          className={"bg-ku-secondary".concat(...className)}
        >
          Change Setsumeikai
        </NavLink>
      )}

      <div className="flex-grow"></div>

      {/* Next link */}
      {currentStep.includes("/school_list") ? (
        <NavLink
          to={`/calendar/${schoolId}`}
          className={"bg-ku-orange".concat(...className)}
          onClick={(e) => handleClick(e)}
        >
          {schoolName
            ? `View calendar for ${schoolName}`
            : "Select school to continue"}
        </NavLink>
      ) : currentStep.includes("/calendar") ? (
        <NavLink
          to={`/form/${schoolId}/${setsumeikaiId}`}
          className={"bg-ku-orange".concat(...className)}
          onClick={(e) => handleClick(e)}
        >
          {setsumeikaiDate
            ? `Register for setsumeikai on ${jpFormat(setsumeikaiDate)}`
            : "Select setsumeikai to continue"}
        </NavLink>
      ) : null}
    </nav>
  );
}
