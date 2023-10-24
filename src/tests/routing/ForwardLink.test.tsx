import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import { MemoryRouter } from "react-router-dom";
import ForwardLink from "../../components/routing/ForwardLink";

describe("ForwardLink", () => {
  function renderForwardLink(currentStep: string, selections: selections) {
    render(
      <MemoryRouter>
        <ForwardLink currentStep={currentStep} selections={selections} />
      </MemoryRouter>
    );
  }

  describe("currentStep school list", () => {
    it("renders inactive link if no selected school", () => {
      renderForwardLink("/school_list", {
        schoolId: "0",
        schoolName: "",
        setsumeikaiId: undefined,
        setsumeikaiDate: undefined,
      });

      const link = screen.getByRole("link", {
        name: "Select school to continue",
      });
      expect(link.classList.contains("cursor-not-allowed")).toBe(true);
    });
    it("renders active link if school selected", () => {
      renderForwardLink("/school_list", {
        schoolId: "1",
        schoolName: "school",
        setsumeikaiId: undefined,
        setsumeikaiDate: undefined,
      });

      const link = screen.getByRole("link");
      expect(link.classList.contains("cursor-not-allowed")).toBe(false);
    });
  });

  describe("currentStep calendar", () => {
    it("renders inactive link if no selected setsumeikai", () => {
      renderForwardLink("/calendar", {
        schoolId: "1",
        schoolName: "school",
        setsumeikaiDate: undefined,
        setsumeikaiId: "0",
      });

      const link = screen.getByRole("link", {
        name: "Select setsumeikai to continue",
      });
      expect(link.classList.contains("cursor-not-allowed")).toBe(true);
    });
    it("renders active link if setsumeikai selected", () => {
      renderForwardLink("/calendar", {
        schoolId: "1",
        schoolName: "school",
        setsumeikaiDate: new Date(),
        setsumeikaiId: "1",
      });

      const link = screen.getByRole("link");
      expect(link.classList.contains("cursor-not-allowed")).toBe(false);
    });
  });
});