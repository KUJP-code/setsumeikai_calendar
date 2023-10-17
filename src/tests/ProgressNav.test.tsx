/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import { MemoryRouter } from "react-router-dom";
import ProgressNav from "../components/routing/ProgressNav";
import userEvent from "@testing-library/user-event";

function renderProgressNav() {
  render(
    <MemoryRouter>
      <ProgressNav />
    </MemoryRouter>
  );
}

describe("ProgressNav", () => {
  it("renders 3 breadcrumbs", () => {
    renderProgressNav();

    expect(screen.getAllByRole("link").length).toBe(3);
  });

  it("highlights 'Select School' by default", async () => {
    render(
      <MemoryRouter initialEntries={["/school_list"]}>
        <ProgressNav />
      </MemoryRouter>
    );
    const links = await screen.findAllByRole("link");
    const hasActiveClass = links[0].classList.contains("bg-ku-orange");

    expect(hasActiveClass).toBe(true);
  });

  it("highlights active link", async () => {
    renderProgressNav();
    const links = await screen.findAllByRole("link");
    const user = userEvent.setup();

    const linkIndex = Math.floor(Math.random() * 3);
    await user.click(links[linkIndex]);
    const hasActiveClass = links[linkIndex].classList.contains("bg-ku-orange");

    expect(hasActiveClass).toBe(true);
  });

  it.todo("disables date & details if school not selected", () => {});

  it.todo("disables details if school but not date selected", () => {});

  it.todo("enables going back to school from date", () => {});

  it.todo("enables going back to school or date from details", () => {});
});
