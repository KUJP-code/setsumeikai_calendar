import { NavLink } from "react-router-dom";

interface props {
  text: string;
  to: string;
  currentSelection?: string;
}

export default function Breadcrumb({ currentSelection, text, to }: props) {
  const className =
    "flex justify-center items-center text-neutral-100 font-semibold p-3";

  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? `bg-ku-orange ${className}`
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
