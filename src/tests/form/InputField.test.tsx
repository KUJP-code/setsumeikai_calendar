import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import InputField from "../../components/form/InputField";
import type { inputType } from "../../declarations";

describe("InputField", () => {
	function renderInputField(type: inputType) {
		render(
			<InputField
				type={type}
				label="testLabel"
				name="testName"
				placeholder="testPlaceholder"
				required={true}
			/>,
		);
	}

	it("renders input of passed type unless passed type == textarea", () => {
		renderInputField("email");

		expect(screen.getByRole("textbox")).toHaveProperty("type", "email");
	});

	it("renders textarea if it's the passed type", () => {
		renderInputField("textarea");

		expect(screen.getByRole("textbox")).toHaveProperty("type", "textarea");
	});

	it("input renders with all passed values", () => {
		renderInputField("tel");
		const input = screen.getByRole("textbox");

		expect(input).toHaveProperty("type", "tel");
		expect(input).toHaveProperty("name", "testName");
		expect(input).toHaveProperty("placeholder", "testPlaceholder");
		expect(input).toHaveProperty("required");
	});
});
