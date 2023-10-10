import { Outlet } from "react-router-dom";
import ProgressNav from "./components/routing/ProgressNav";

function App() {
  return (
    <>
      <ProgressNav />
      <Outlet />
    </>
  );
}

export default App;
