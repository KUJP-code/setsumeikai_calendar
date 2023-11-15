import { describe, expect, it } from "bun:test";
import { MemoryRouter } from "react-router-dom";
import BackLink from "../../components/routing/BackLink";
import { render, screen } from "@testing-library/react";
import { selections } from "../../declarations";

describe("BackLink", () => {
  function renderBackLink(currentStep: string, schoolId: string | undefined) {
    const selections: selections = {
      schoolId: schoolId,
      schoolName: "",
      setsumeikaiDate: undefined,
      setsumeikaiId: undefined,
    };

    render(
      <MemoryRouter>
        <BackLink currentStep={currentStep} selections={selections} />
      </MemoryRouter>
    );
  }

  it("currentStep school list renders nothing", () => {
    renderBackLink("/school_list", undefined);

    expect(screen.queryByRole("link")).toBe(null);
  });

  it("currentStep calendar renders link to school list", () => {
    renderBackLink("/school_list", undefined);

    expect(screen.queryByRole("link", { name: "Change School" }));
  });

  it("currentStep form renders link to calendar", () => {
    renderBackLink("/school_list", "12");

    expect(screen.queryByRole("link", { name: "Change Setsumeikai" }));
  });
});
