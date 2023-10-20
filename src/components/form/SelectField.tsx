interface SelectFieldProps {
  label: string;
  name: string;
  options: formOption[];
  required: boolean;
}

export default function SelectField({
  label,
  name,
  options,
  required,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-semibold text-lg">
        {label}
      </label>
      <select
        name={name}
        required={required}
        className="border border-ku-secondary rounded p-1 hover:outline hover:outline-ku-secondary focus-visible:outline outline-ku-orange"
      >
        {options.map((o) => {
          return (
            <option value={o.value} key={o.value}>
              {o.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
