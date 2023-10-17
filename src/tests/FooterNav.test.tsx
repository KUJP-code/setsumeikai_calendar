import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import { MemoryRouter } from "react-router-dom";
import FooterNav from "../components/routing/FooterNav";

describe("FooterNav", () => {
  function renderFooter(step: string) {
    render(
      <MemoryRouter>
        <FooterNav currentStep={step} />
      </MemoryRouter>
    );
  }

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

  it.todo("disables calendar link unless school selected", () => {});
  it.todo("disables form link unless setsumeikai selected", () => {});
});
