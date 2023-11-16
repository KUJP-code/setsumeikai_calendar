import { NavLink } from "react-router-dom";
import jaFormat from "../../helpers/jaFormat";
import { selections } from "../../declarations";

interface ForwardLinkProps {
  currentStep: string;
  selections: selections;
}

export default function ForwardLink({
  currentStep,
  selections,
}: ForwardLinkProps) {
  const { schoolId, schoolName, setsumeikaiDate, setsumeikaiId } = selections;
  const className =
    "bg-ku-orange flex justify-center items-center text-neutral-100 font-semibold p-1 md:basis-1/4 rounded text-center hover:opacity-90";
  const noSchool = currentStep.includes("/school_list") && schoolName === "";
  const noSetsumeikai =
    currentStep.includes("/calendar") && setsumeikaiDate === undefined;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (noSchool || noSetsumeikai) e.preventDefault();
  }

  return currentStep.includes("/school_list") ? (
    <NavLink
      to={`/calendar/${schoolId}/${setsumeikaiId}`}
      className={
        noSchool
          ? className.concat(" cursor-not-allowed opacity-80 basis-full")
          : className
      }
      onClick={(e) => handleClick(e)}
    >
      {schoolName ? `${schoolName}の説明会カレンダー` : "次へ"}
    </NavLink>
  ) : currentStep.includes("/calendar") ? (
    <NavLink
      to={`/form/${schoolId}/${setsumeikaiId}`}
      className={
        noSetsumeikai
          ? className.concat(" cursor-not-allowed opacity-80 basis-2/5")
          : className
      }
      onClick={(e) => handleClick(e)}
    >
      {setsumeikaiDate
        ? `説明会申し込み: ${jaFormat(setsumeikaiDate)}`
        : "次へ"}
    </NavLink>
  ) : null;
}
