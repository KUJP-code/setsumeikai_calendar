import jaFormat from "../../helpers/jaFormat";
import Breadcrumb from "./Breadcrumb";

export default function ProgressNav(selections: selections) {
  const { schoolId, schoolName, setsumeikaiDate, setsumeikaiId } = selections;

  return (
    <nav className="flex flex-col md:flex-row p-3 gap-1 justify-evenly">
      <Breadcrumb
        text="スクール"
        to="/school_list"
        currentSelection={schoolName}
      />
      <Breadcrumb
        text="Date"
        to={schoolId ? `/calendar/${schoolId}/${setsumeikaiId}` : undefined}
        currentSelection={setsumeikaiDate ? jaFormat(setsumeikaiDate) : ""}
      />
      <Breadcrumb
        text="Enter Details"
        to={setsumeikaiId ? `/form/${schoolId}/${setsumeikaiId}` : undefined}
      />
    </nav>
  );
}
