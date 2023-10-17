import { NavLink } from "react-router-dom";

interface props {
  currentStep: string;
}

export default function FooterNav({ currentStep }: props) {
  const className =
    " flex justify-center items-center text-neutral-100 font-semibold p-3 basis-1/3 rounded";

  return (
    <nav className="sticky bottom-0 flex justify-between p-3 bg-white border rounded">
      {/* Back link */}
      {currentStep === "/school_list" ? null : currentStep === "/calendar" ? (
        <NavLink
          to="/school_list"
          className={"bg-ku-secondary".concat(...className)}
        >
          Select School
        </NavLink>
      ) : (
        <NavLink
          to="/calendar"
          className={"bg-ku-secondary".concat(...className)}
        >
          Calendar
        </NavLink>
      )}

      <div className="flex-grow"></div>

      {/* Next link */}
      {currentStep === "/school_list" ? (
        <NavLink to="/calendar" className={"bg-ku-orange".concat(...className)}>
          Calendar
        </NavLink>
      ) : currentStep === "/calendar" ? (
        <NavLink to="/form" className={"bg-ku-orange".concat(...className)}>
          Form
        </NavLink>
      ) : null}
    </nav>
  );
}
