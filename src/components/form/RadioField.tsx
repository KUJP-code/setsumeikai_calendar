interface RadioFieldProps {
  label: string;
  name: string;
  options: formOption[];
}

export default function RadioField({ label, name, options }: RadioFieldProps) {
  return (
    <fieldset>
      <legend>{label}</legend>
      {options.map((o) => {
        return (
          <div>
            <label htmlFor={o.name}>{o.name}</label>
            <input type="radio" name={name} id={o.name} value={o.value} />
          </div>
        );
      })}
    </fieldset>
  );
}
