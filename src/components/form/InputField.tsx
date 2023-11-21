import { inputType } from "../../declarations";

interface InputFieldProps {
  type: inputType;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
}

export default function InputField({
  type,
  label,
  name,
  placeholder,
  required,
}: InputFieldProps) {
  if (type === "textarea") {
    return (
      <div className="flex flex-col w-full gap-2">
        <label htmlFor={name} className="self-start font-semibold text-lg">
		  <span className="text-ku-secondary text-base">{label}</span>
		  <span className={`label text-xs ${required ? "label-required" : "label-premium"}`}>
            {required ? "必須" : "任意"}
          </span>
        </label>
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={4}
          className="border border-secondary rounded-md p-3 focus-visible:shadow-input-orange focus-visible:outline-none bg-white placeholder:text-ku-faded placeholder:font-semibold text-ku-secondary"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col basis-[45%] gap-2">
        <label htmlFor={name} className="self-start font-semibold text-lg">
			<span className="text-ku-secondary text-base">{label}</span>
			<span className={`label text-xs ${required ? "label-required" : "label-premium"}`}>
				{required ? "必須" : "任意"}
			</span>
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="border border-secondary rounded-md p-2 bg-white placeholder:text-ku-faded placeholder:font-semibold text-ku-secondary focus-visible:outline-none focus-visible:shadow-input-orange"
        />
      </div>
    );
  }
}
