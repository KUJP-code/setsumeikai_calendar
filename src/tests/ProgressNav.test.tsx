/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import { MemoryRouter } from "react-router-dom";
import ProgressNav from "../components/routing/ProgressNav";
import userEvent from "@testing-library/user-event";

function renderProgressNav(
  initial: string,
  schoolId?: number,
  setsumeikaiId?: number
) {
  render(
    <MemoryRouter initialEntries={[initial]}>
      <ProgressNav
        schoolName="school"
        schoolId={schoolId ? schoolId : 0}
        setsumeikaiDate={new Date()}
        setsumeikaiId={setsumeikaiId ? setsumeikaiId : 0}
      />
    </MemoryRouter>
  );
}

describe("ProgressNav", () => {
  it("renders 3 breadcrumbs", () => {
    renderProgressNav("/");

    expect(screen.getAllByRole("heading").length).toBe(3);
  });

  it("renders calendar and form breadcrumbs as headings when no school", () => {
    renderProgressNav("/school_list");

    expect(screen.getAllByRole("link").length).toBe(1);
  });

  it("renders form breadcrumb as heading when no setsumeikai", () => {
    renderProgressNav("/school_list", 36);

    expect(screen.getAllByRole("link").length).toBe(2);
  });

  it("renders all breadcrumbs as links when both school and setsumeikai", () => {
    renderProgressNav("/school_list", 36, 36);

    expect(screen.getAllByRole("link").length).toBe(3);
  });

  it("highlights 'Select School' by default", async () => {
    renderProgressNav("/school_list");
    const links = await screen.findAllByRole("link");
    const hasActiveClass = links[0].classList.contains("bg-ku-orange");

    expect(hasActiveClass).toBe(true);
  });

  it("highlights active link", async () => {
    renderProgressNav("/");
    const link = await screen.findByRole("link");
    const user = userEvent.setup();

    await user.click(link);
    const hasActiveClass = link.classList.contains("bg-ku-orange");

    expect(hasActiveClass).toBe(true);
  });
});
