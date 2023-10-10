import { NavLink } from "react-router-dom";

interface props {
  text: string;
  to: string;
}

function Breadcrumb({ text, to }: props) {
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
      <p>{text}</p>
    </NavLink>
  );
}

export default Breadcrumb;
