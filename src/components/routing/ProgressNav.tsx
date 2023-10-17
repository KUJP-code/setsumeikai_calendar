import Breadcrumb from "./Breadcrumb";

interface props {
  school?: string;
  setsumeikai?: string;
}

export default function ProgressNav({ school, setsumeikai }: props) {
  return (
    <nav className="flex flex-col md:flex-row p-3 gap-1 justify-evenly">
      <Breadcrumb text="School" to="/school_list" currentSelection={school} />
      <Breadcrumb text="Date" to="/calendar" currentSelection={setsumeikai} />
      <Breadcrumb text="Enter Details" to="/form" />
    </nav>
  );
}
