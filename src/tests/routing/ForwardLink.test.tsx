import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import { MemoryRouter } from "react-router-dom";
import ForwardLink from "../../components/routing/ForwardLink";

describe("ForwardLink", () => {
  function renderForwardLink(
    currentStep: string,
    schoolId: number,
    schoolName: string,
    setsumeikaiDate: Date | undefined,
    setsumeikaiId: number
  ) {
    render(
      <MemoryRouter>
        <ForwardLink
          currentStep={currentStep}
          schoolId={schoolId}
          schoolName={schoolName}
          setsumeikaiDate={setsumeikaiDate}
          setsumeikaiId={setsumeikaiId}
        />
      </MemoryRouter>
    );
  }

  describe("currentStep school list", () => {
    it("renders inactive link if no selected school", () => {
      renderForwardLink("/school_list", 0, "", undefined, 0);

      const link = screen.getByRole("link", {
        name: "Select school to continue",
      });
      expect(link.classList.contains("cursor-not-allowed")).toBe(true);
    });
    it("renders active link if school selected", () => {
      renderForwardLink("/school_list", 1, "school", undefined, 0);

      const link = screen.getByRole("link");
      expect(link.classList.contains("cursor-not-allowed")).toBe(false);
    });
  });

  describe("currentStep calendar", () => {
    it("renders inactive link if no selected setsumeikai", () => {
      renderForwardLink("/calendar", 1, "school", undefined, 0);

      const link = screen.getByRole("link", {
        name: "Select setsumeikai to continue",
      });
      expect(link.classList.contains("cursor-not-allowed")).toBe(true);
    });
    it("renders active link if setsumeikai selected", () => {
      renderForwardLink("/calendar", 1, "school", new Date(), 1);

      const link = screen.getByRole("link");
      expect(link.classList.contains("cursor-not-allowed")).toBe(false);
    });
  });
});
