import { NavLink } from "react-router-dom";
import { selections } from "../../declarations";

interface BackLinkProps {
  currentStep: string;
  selections: selections;
}

export default function BackLink({ currentStep, selections }: BackLinkProps) {
  const { schoolId, setsumeikaiId } = selections;
  const className =
    "bg-ku-secondary flex justify-center items-center text-neutral-100 font-semibold p-2 md:p-3 basis-2/5 md:basis-1/4 rounded text-center";

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
