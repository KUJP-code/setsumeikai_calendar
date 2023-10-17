import Breadcrumb from "./Breadcrumb";

export default function ProgressNav() {
  return (
    <nav className="flex flex-col md:flex-row p-3 gap-3 justify-evenly">
      <Breadcrumb text="Select School" to="/school_list" />
      <Breadcrumb text="Select Date" to="/calendar" />
      <Breadcrumb text="Enter Details" to="/form" />
    </nav>
  );
}
