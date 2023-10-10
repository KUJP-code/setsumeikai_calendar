import Breadcrumb from "./Breadcrumb";

export default function ProgressNav() {
  return (
    <nav>
      <Breadcrumb text="Select School" to="/school_list" />
      <Breadcrumb text="Select Date" to="/calendar" />
      <Breadcrumb text="Enter Details" to="/form" />
    </nav>
  );
}
