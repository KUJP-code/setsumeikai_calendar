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
        <label htmlFor={name} className="font-semibold text-lg">
          <span
            className={
              required ? "label label-required" : "label label-premium"
            }
          >
            必須
          </span>
          {label}
        </label>
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={4}
          className="border border-ku-secondary rounded p-3 hover:outline hover:outline-ku-secondary focus-visible:outline outline-ku-orange"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col basis-2/5 gap-2">
        <label htmlFor={name} className="font-semibold text-lg">
          <span
            className={
              required ? "label label-required" : "label label-premium"
            }
          >
            必須
          </span>{" "}
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="border border-ku-secondary rounded p-3 hover:outline hover:outline-ku-secondary focus-visible:outline outline-ku-orange"
        />
      </div>
    );
  }
}
