import { NavLink } from "react-router-dom";

interface props {
  text: string;
  to: string;
}

function Breadcrumb({ text, to }: props) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? "p-5 bg-orange-600"
          : isPending
          ? "p-5 bg-yellow-300"
          : "p-5 bg-blue-600"
      }
    >
      {text}
    </NavLink>
  );
}

export default Breadcrumb;
