import jpFormat from "../../helpers/jpFormat";
import Breadcrumb from "./Breadcrumb";

export default function ProgressNav(selections: selections) {
  const { schoolId, schoolName, setsumeikaiDate, setsumeikaiId } = selections;

  return (
    <nav className="flex flex-col md:flex-row p-3 gap-1 justify-evenly">
      <Breadcrumb
        text="School"
        to="/school_list"
        currentSelection={schoolName}
      />
      <Breadcrumb
        text="Date"
        to={schoolId ? `/calendar/${schoolId}/${setsumeikaiId}` : undefined}
        currentSelection={setsumeikaiDate ? jpFormat(setsumeikaiDate) : ""}
      />
      <Breadcrumb
        text="Enter Details"
        to={setsumeikaiId ? `/form/${schoolId}/${setsumeikaiId}` : undefined}
      />
    </nav>
  );
}
