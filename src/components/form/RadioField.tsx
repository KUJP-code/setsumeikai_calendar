interface RadioFieldProps {
  label: string;
  name: string;
  options: formOption[];
}

export default function RadioField({ label, name, options }: RadioFieldProps) {
  return (
    <fieldset className="flex flex-row flex-wrap justify-center gap-3 p-3 border border-ku-secondary">
      <legend className="font-semibold text-lg">{label}</legend>
      {options.map((o) => {
        return (
          <div key={o.name} className="flex gap-1">
            <label htmlFor={o.name}>{o.name}</label>
            <input type="radio" name={name} id={o.name} value={o.value} />
          </div>
        );
      })}
    </fieldset>
  );
}
