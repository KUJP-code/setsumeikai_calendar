import { NavLink } from "react-router-dom";

interface props {
  activeClasses: string;
  inactiveClasses: string;
  text: string;
  to: string | undefined;
  currentSelection?: string;
}

export default function Breadcrumb({
  activeClasses,
  currentSelection,
  inactiveClasses,
  text,
  to,
}: props) {
  const className = `flex justify-center items-center gap-1 text-center p-1 basis-1/3 -skew-x-12 before:inset-y-0 before:w-[50px] before:block before:absolute before:skew-x-12 rounded before:rounded`;

  if (to === undefined) {
    return (
      <h5
        className={`${className} border-secondary text-ku-secondary before:bg-main-background font-bold ${inactiveClasses}`}
      >
        <span className="skew-x-12">
          {text}
          {currentSelection ? `：${currentSelection}` : null}
        </span>
      </h5>
    );
  } else {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `bg-ku-orange before:bg-ku-orange text-white ${className} ${activeClasses}`
            : `border-secondary text-ku-secondary before:bg-main-background ${className} ${inactiveClasses}`
        }
      >
        <h5 className="skew-x-12">
          <span className="font-bold">{text}</span>
          {currentSelection ? `： ${currentSelection}` : null}
        </h5>
      </NavLink>
    );
  }
}
