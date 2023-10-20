export default function SelectionFields(selections: selections) {
  return (
    <>
      <div>
        <label htmlFor="schoolId">School</label>
        <input type="text" value={selections.schoolName} disabled />
        <input type="hidden" name="schoolId" value={selections.schoolId} />
      </div>

      <div>
        <label htmlFor="setsumeikaiId">SetsumeikaiDate</label>
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
        />
        <input
          type="hidden"
          name="setsumeikaiId"
          value={selections.setsumeikaiId}
        />
      </div>
    </>
  );
}
