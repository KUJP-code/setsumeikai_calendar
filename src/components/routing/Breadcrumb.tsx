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
  const className = `flex justify-center items-center gap-1 text-center p-1 basis-1/3 md:-skew-x-12 md:before:w-[50px] before:hidden md:before:block md:before:absolute md:before:skew-x-12 rounded before:rounded relative`;

  if (to === undefined) {
    return (
      <h5
        className={`${className} border-button text-ku-button before:bg-main-background font-bold ${inactiveClasses}`}
      >
        <span className="md:skew-x-12">
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
            : `border-button text-ku-secondary before:bg-main-background ${className} ${inactiveClasses}`
        }
      >
        <h5 className="md:skew-x-12">
          <span className="font-bold">{text}</span>
          {currentSelection ? `： ${currentSelection}` : null}
        </h5>
      </NavLink>
    );
  }
}
