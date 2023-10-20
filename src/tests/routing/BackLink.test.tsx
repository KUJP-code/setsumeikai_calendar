import { describe, expect, it } from "bun:test";
import { MemoryRouter } from "react-router-dom";
import BackLink from "../../components/routing/BackLink";
import { render, screen } from "@testing-library/react";

describe("BackLink", () => {
  function renderBackLink(currentStep: string, schoolId: number) {
    render(
      <MemoryRouter>
        <BackLink currentStep={currentStep} schoolId={schoolId} />
      </MemoryRouter>
    );
  }

  it("currentStep school list renders nothing", () => {
    renderBackLink("/school_list", 0);

    expect(screen.queryByRole("link")).toBe(null);
  });

  it("currentStep calendar renders link to school list", () => {
    renderBackLink("/school_list", 0);

    expect(screen.queryByRole("link", { name: "Change School" }));
  });

  it("currentStep form renders link to calendar", () => {
    renderBackLink("/school_list", 12);

    expect(screen.queryByRole("link", { name: "Change Setsumeikai" }));
  });
});
