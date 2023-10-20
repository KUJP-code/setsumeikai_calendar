import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "bun:test";
import RadioField from "../../components/form/RadioField";

describe("RadioField", () => {
  beforeEach(() => {
    render(
      <RadioField
        label="testLabel"
        name="testName"
        options={[
          { name: "test1", value: "1" },
          { name: "test2", value: "2" },
        ]}
      />
    );
  });

  it("renders a fieldset and legend", () => {
    expect(screen.findByRole("group")).toBeTruthy();
    expect(screen.findByText("testLabel")).toBeTruthy();
  });

  it("renders a radio input for each passed option", () => {
    expect(screen.getAllByRole("radio").length).toBe(2);
  });
});
