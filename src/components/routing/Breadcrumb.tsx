import { NavLink } from "react-router-dom";

interface props {
  text: string;
  to: string | undefined;
  currentSelection?: string;
}

export default function Breadcrumb({ currentSelection, text, to }: props) {
  const className =
    "flex flex-col justify-center items-center gap-1 text-neutral-100 font-semibold p-1 basis-1/3 rounded";

  if (to === undefined) {
    return <h5 className={className.concat(" bg-ku-secondary")}>{text}</h5>;
  } else {
    return (
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive
            ? `bg-ku-orange border border-ku-secondary ${className}`
            : isPending
            ? `bg-yellow-300 ${className}`
            : `bg-ku-secondary ${className}`
        }
      >
        <h5>{text}</h5>
        {currentSelection ? <p>{currentSelection}</p> : null}
      </NavLink>
    );
  }
}
