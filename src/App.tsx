import { Outlet, useLocation } from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";
import FooterNav from "./components/routing/FooterNav";

export default function App() {
  let location = useLocation();

  return (
    <>
      <ProgressNav />
      <Outlet />
      <FooterNav currentStep={location.pathname} />
    </>
  );
}
