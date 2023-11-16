import { NavLink } from "react-router-dom";

interface props {
  text: string;
  to: string | undefined;
  specificClasses: string;
  currentSelection?: string;
}

export default function Breadcrumb({
  currentSelection,
  specificClasses,
  text,
  to,
}: props) {
  const className =
    "flex justify-center items-center gap-1 text-center p-1 basis-1/3 -skew-x-12 ".concat(
      specificClasses
    );

  if (to === undefined) {
    return (
      <h5
        className={className.concat(" breadcrumb-inactive text-ku-secondary")}
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
            ? `bg-ku-orange before:bg-ku-orange text-white ${className}`
            : `breadcrumb-inactive text-ku-secondary before:bg-main-background before:border-t ${
                text === "スクール"
                  ? "before:border-l"
                  : "before:border-r before:border-b before:translate-x-[1px] before:translate-y-[1px] before:mt-[-0.125rem]"
              } before:border-ku-secondary before:translate-x-[-0.5px] before:translate-y-[-1px] ${className}`
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
