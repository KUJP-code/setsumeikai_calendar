import { NavLink } from "react-router-dom";

interface BackLinkProps {
  currentStep: string;
  selections: selections;
}

export default function BackLink({ currentStep, selections }: BackLinkProps) {
  const { schoolId, setsumeikaiId } = selections;

  return currentStep.includes("/school_list") ? null : currentStep.includes(
      "/calendar"
    ) ? (
    <NavLink
      to="/school_list"
      className="bg-ku-secondary flex justify-center items-center text-neutral-100 font-semibold p-3 basis-1/3 md:basis-1/4 rounded"
    >
      Change School
    </NavLink>
  ) : (
    <NavLink
      to={`/calendar/${schoolId}/${setsumeikaiId}`}
      className="bg-ku-secondary flex justify-center items-center text-neutral-100 font-semibold p-3 basis-1/3 md:basis-1/4 rounded"
    >
      Change Setsumeikai
    </NavLink>
  );
}
