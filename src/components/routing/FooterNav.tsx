import React from "react";
import { NavLink } from "react-router-dom";

interface props {
  currentStep: string;
  school: string;
  setsumeikai: string;
}

export default function FooterNav({ currentStep, school, setsumeikai }: props) {
  const className =
    " flex justify-center items-center text-neutral-100 font-semibold p-3  basis-1/2 md:basis-1/3 rounded";

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (currentStep === "/school_list" && school === "") {
      e.preventDefault();
    }
    if (currentStep === "/calendar" && setsumeikai === "") {
      e.preventDefault();
    }
  }

  return (
    <nav className="z-50 sticky bottom-0 flex justify-between gap-3 p-3 bg-white border rounded">
      {/* Back link */}
      {currentStep === "/school_list" ? null : currentStep === "/calendar" ? (
        <NavLink
          to="/school_list"
          className={"bg-ku-secondary".concat(...className)}
        >
          Change School
        </NavLink>
      ) : (
        <NavLink
          to="/calendar"
          className={"bg-ku-secondary".concat(...className)}
        >
          Change Setsumeikai
        </NavLink>
      )}

      <div className="flex-grow"></div>

      {/* Next link */}
      {currentStep === "/school_list" ? (
        <NavLink
          to="/calendar"
          className={"bg-ku-orange".concat(...className)}
          onClick={(e) => handleClick(e)}
        >
          {school ? `View calendar for ${school}` : "Select school to continue"}
        </NavLink>
      ) : currentStep === "/calendar" ? (
        <NavLink
          to="/form"
          className={"bg-ku-orange".concat(...className)}
          onClick={(e) => handleClick(e)}
        >
          {setsumeikai
            ? `Register for setsumeikai on ${setsumeikai}`
            : "Select setsumeikai to continue"}
        </NavLink>
      ) : null}
    </nav>
  );
}
