export default function SelectionFields(selections: selections) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 p-3 border-2 rounded border-ku-orange">
      <input type="hidden" name="category" value="R" />
      <div className="flex flex-col gap-2">
        <label htmlFor="schoolId" className="font-bold text-lg">
          School
        </label>
        <input
          type="text"
          value={selections.schoolName}
          disabled
          className="text-center"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="setsumeikaiId" className="font-bold text-lg">
          Setsumeikai Date
        </label>
        <input
          type="datetime-local"
          value={
            selections.setsumeikaiDate
              ? selections.setsumeikaiDate
                  .toISOString()
                  .replace(/:\d{2}\.\d{3}.*/, "")
              : ""
          }
          disabled
          className="text-center"
        />
        <input
          type="hidden"
          name="setsumeikai_id"
          value={selections.setsumeikaiId}
        />
      </div>
    </div>
  );
}
