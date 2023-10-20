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
    <div className="">
      <label htmlFor={name}>{label}</label>
      <select name={name} required={required}>
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
