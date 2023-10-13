import { Outlet } from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";

export default function App() {
  return (
    <>
      <ProgressNav />
      <Outlet />
    </>
  );
}
