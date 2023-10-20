import { NavLink } from "react-router-dom";

interface BackLinkProps {
  currentStep: string;
  schoolId: number | undefined;
  setsumeikaiId: number | undefined;
}

export default function BackLink({
  currentStep,
  schoolId,
  setsumeikaiId,
}: BackLinkProps) {
  return currentStep.includes("/school_list") ? null : currentStep.includes(
      "/calendar"
    ) ? (
    <NavLink
      to="/school_list"
      className="bg-ku-secondary flex justify-center items-center text-neutral-100 font-semibold p-3 basis-1/2 md:basis-1/3 rounded"
    >
      Change School
    </NavLink>
  ) : (
    <NavLink
      to={`/calendar/${schoolId}/${setsumeikaiId}`}
      className="bg-ku-secondary flex justify-center items-center text-neutral-100 font-semibold p-3 basis-1/2 md:basis-1/3 rounded"
    >
      Change Setsumeikai
    </NavLink>
  );
}
