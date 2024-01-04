import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "bun:test";
import SelectField from "../../components/form/SelectField";

describe("SelectField", () => {
  beforeEach(() => {
    render(
      <SelectField
        label="testLabel"
        name="testName"
        options={[
          { name: "test1", value: "1" },
          { name: "test2", value: "2" },
        ]}
        required={true}
      />,
    );
  });

  it("renders a select input", () => {
    expect(screen.findByRole("combobox")).toBeTruthy();
  });

  it("renders an option for each passed option plus placeholder", () => {
    expect(screen.getAllByRole("option").length).toBe(3);
  });
});
