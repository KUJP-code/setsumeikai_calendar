import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import { MemoryRouter } from "react-router-dom";
import FooterNav from "../../components/routing/FooterNav";

function renderFooter(step: string) {
  render(
    <MemoryRouter>
      <FooterNav
        currentStep={step}
        selections={{
          schoolName: "",
          schoolId: undefined,
          setsumeikaiDate: undefined,
          setsumeikaiId: undefined,
        }}
      />
    </MemoryRouter>,
  );
}

describe("FooterNav", () => {
  it("links to calendar from school_list", () => {
    renderFooter("/school_list");

    expect(screen.findByRole("link", { name: "Select School" })).toBeTruthy();
  });

  it("links to school_list and form from calendar", () => {
    renderFooter("/calendar");

    expect(screen.findByRole("link", { name: "Select School" })).toBeTruthy();
    expect(screen.findByRole("link", { name: "Form" })).toBeTruthy();
  });

  it("links to calendar from form", () => {
    renderFooter("/form");

    expect(screen.findByRole("link", { name: "Calendar" })).toBeTruthy();
  });
});
