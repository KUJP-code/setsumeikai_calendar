import jpFormat from "../../helpers/jpFormat";
import Breadcrumb from "./Breadcrumb";

interface props {
  schoolName?: string;
  setsumeikaiDate?: Date;
}

export default function ProgressNav({ schoolName, setsumeikaiDate }: props) {
  return (
    <nav className="flex flex-col md:flex-row p-3 gap-1 justify-evenly">
      <Breadcrumb
        text="School"
        to="/school_list"
        currentSelection={schoolName}
      />
      <Breadcrumb
        text="Date"
        to={schoolName ? `/calendar/${schoolName}` : undefined}
        currentSelection={setsumeikaiDate ? jpFormat(setsumeikaiDate) : ""}
      />
      <Breadcrumb
        text="Enter Details"
        to={setsumeikaiDate ? "/form" : undefined}
      />
    </nav>
  );
}
