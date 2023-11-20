import { formOption } from "../../declarations";

interface RadioFieldProps {
  label: string;
  name: string;
  options: formOption[];
}

export default function RadioField({ label, name, options }: RadioFieldProps) {
  return (
    <fieldset className="basis-[45%] flex flex-row flex-wrap justify-center p-3 fieldset-border rounded-md">
      <legend className="font-semibold text-lg mx-auto p-1">
		<span className="text-ku-secondary text-base">{label}</span>
		<span className="label label-premium text-xs">任意</span>
      </legend>
      {options.map((o) => {
        return (
          <div key={o.name} className="basis-1/3 flex items-center gap-2 font-bold">
            <input type="radio" name={name} id={o.name} value={o.value} className="relative appearance-none rounded-full border-2 border-ku-faded w-[14px] h-[14px] checked:border-ku-orange checked:before:bg-ku-orange checked:before:w-[8px] checked:before:h-[8px] checked:before:rounded-full flex items-center justify-center"/>
            <label htmlFor={o.name} className="text-ku-secondary">{o.name}</label>
          </div>
        );
      })}
    </fieldset>
  );
}
