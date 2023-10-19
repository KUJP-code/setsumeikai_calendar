import jpFormat from "../../helpers/jpFormat";
import Breadcrumb from "./Breadcrumb";

interface props {
  schoolName?: string;
  schoolId: number;
  setsumeikaiDate?: Date;
  setsumeikaiId: number;
}

export default function ProgressNav({
  schoolName,
  schoolId,
  setsumeikaiDate,
  setsumeikaiId,
}: props) {
  return (
    <nav className="flex flex-col md:flex-row p-3 gap-1 justify-evenly">
      <Breadcrumb
        text="School"
        to="/school_list"
        currentSelection={schoolName}
      />
      <Breadcrumb
        text="Date"
        to={schoolId ? `/calendar/${schoolId}` : undefined}
        currentSelection={setsumeikaiDate ? jpFormat(setsumeikaiDate) : ""}
      />
      <Breadcrumb
        text="Enter Details"
        to={setsumeikaiId ? `/form/${schoolId}/${setsumeikaiId}` : undefined}
      />
    </nav>
  );
}
