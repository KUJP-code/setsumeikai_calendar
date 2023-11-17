import { selections } from "../../declarations";

export default function SelectionFields(selections: selections) {

  const fieldClasses = "flex flex-col items-center gap-2"
  const labelClasses = "font-bold text-2xl text-ku-orange";
  const pClasses = "text-ku-secondary font-bold"

  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly items-center p-4 rounded selections-border">
      <input type="hidden" name="category" value="R" />
      <div className={fieldClasses}>
        <label htmlFor="schoolId" className={labelClasses}>
          スクール
        </label>
	  <p className={pClasses}>{selections.schoolName}</p>	  	
	</div>
      <div className={fieldClasses}>
        <label htmlFor="setsumeikaiId" className={labelClasses}>
          説明会実施日
        </label>
        <input
          type="hidden"
          name="setsumeikai_id"
          value={selections.setsumeikaiId}
        />
		<p className={pClasses}>{selections.setsumeikaiDate ? selections.setsumeikaiDate
                  .toISOString()
                  .replace(/T.*/, "") : ""}</p>	  	
      </div>
    </div>
  );
}
