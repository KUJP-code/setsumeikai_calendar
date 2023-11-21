import { selections } from "../../declarations";

interface selectionsProps {
	selections: selections;
	plannedSchool?: string;
}

export default function SelectionFields({selections, plannedSchool}: selectionsProps) {

  const fieldClasses = "flex flex-col items-center basis-1/3 gap-3"
  const headingClasses = "font-bold text-2xl text-ku-orange";
  const pClasses = "text-ku-secondary font-bold"

  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly items-center p-2 rounded-md selections-border gap-5">
	  {plannedSchool ? <div className={fieldClasses}>
		<h3 className={headingClasses}>
		  通学をご検討中のスクール
		</h3>
		<p className={pClasses}>{plannedSchool}</p>
	  </div> : null }
      <div className={fieldClasses}>
        <h3 className={headingClasses}>
          説明会場
        </h3>
		<p className={pClasses}>{selections.schoolName}</p>	  	
	  </div>
      <div className={fieldClasses}>
        <h3 className={headingClasses}>
          参加日程
        </h3>
		<p className={pClasses}>{selections.setsumeikaiDate ? selections.setsumeikaiDate
                  .toISOString()
                  .replace(/T.*/, "") : ""}</p>	  	
      </div>
    </div>
  );
}
