import { NavLink } from "react-router-dom";
import jpFormat from "../../helpers/jpFormat";

interface ForwardLinkProps {
  currentStep: string;
  schoolId: number;
  schoolName: string;
  setsumeikaiDate: Date | undefined;
  setsumeikaiId: number;
}

export default function ForwardLink({
  currentStep,
  schoolId,
  schoolName,
  setsumeikaiDate,
  setsumeikaiId,
}: ForwardLinkProps) {
  const className =
    "bg-ku-orange flex justify-center items-center text-neutral-100 font-semibold p-3  basis-1/2 md:basis-1/3 rounded";
  const noSchool = currentStep.includes("/school_list") && schoolName === "";
  const noSetsumeikai =
    currentStep.includes("/calendar") && setsumeikaiDate === undefined;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (noSchool || noSetsumeikai) e.preventDefault();
  }

  return currentStep.includes("/school_list") ? (
    <NavLink
      to={`/calendar/${schoolId}`}
      className={
        noSchool
          ? className.concat(" cursor-not-allowed opacity-80")
          : className
      }
      onClick={(e) => handleClick(e)}
    >
      {schoolName
        ? `View calendar for ${schoolName}`
        : "Select school to continue"}
    </NavLink>
  ) : currentStep.includes("/calendar") ? (
    <NavLink
      to={`/form/${schoolId}/${setsumeikaiId}`}
      className={
        noSetsumeikai
          ? className.concat(" cursor-not-allowed opacity-80")
          : className
      }
      onClick={(e) => handleClick(e)}
    >
      {setsumeikaiDate
        ? `Register for setsumeikai on ${jpFormat(setsumeikaiDate)}`
        : "Select setsumeikai to continue"}
    </NavLink>
  ) : null;
}
