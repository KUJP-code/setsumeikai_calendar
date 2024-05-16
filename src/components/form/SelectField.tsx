import type { formOption } from "../../declarations";

interface SelectFieldProps {
	label: string;
	name: string;
	options: formOption[];
	required: boolean;
	selected?: string;
}

export default function SelectField({
	label,
	name,
	options,
	required,
	selected,
}: SelectFieldProps) {
	return (
		<div className="flex basis-[45%] flex-col gap-2 text-lg">
			<label htmlFor={name} className="self-start font-semibold">
				<span className="text-base text-ku-secondary">{label}</span>
				<span
					className={`label text-xs ${
						required ? "label-required" : "label-premium"
					}`}
				>
					{required ? "必須" : "任意"}
				</span>
			</label>
			<select
				name={name}
				required={required}
				className="border-secondary border-secondary rounded-md border bg-white p-2 text-ku-secondary focus:text-ku-orange focus:shadow-input-orange focus-visible:shadow-input-orange focus-visible:outline-none"
			>
				<option value="" className="text-black">
					選択してください
				</option>
				{options.map((o) => {
					return (
						<option
							value={o.value}
							key={o.value}
							className="text-black"
							selected={selected === o.name}
						>
							{o.name}
						</option>
					);
				})}
			</select>
		</div>
	);
}
