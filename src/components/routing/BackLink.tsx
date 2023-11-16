import { NavLink } from "react-router-dom";
import { selections } from "../../declarations";

interface BackLinkProps {
  currentStep: string;
  selections: selections;
}

export default function BackLink({ currentStep, selections }: BackLinkProps) {
  const { schoolId, setsumeikaiId } = selections;
  const className =
    "border-secondary flex justify-center items-center text-ku-secondary font-semibold basis-2/5 md:basis-1/4 rounded text-center p-1 hover:bg-ku-secondary hover:text-white";

  return currentStep.includes("/school_list") ? null : currentStep.includes(
      "/calendar"
    ) ? (
    <NavLink to="/school_list" className={className}>
      スクール変更
    </NavLink>
  ) : (
    <NavLink
      to={`/calendar/${schoolId}/${setsumeikaiId}`}
      className={className}
    >
      説明会日変更
    </NavLink>
  );
}
