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
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea name={name} placeholder={placeholder} required={required} />
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  }
}
