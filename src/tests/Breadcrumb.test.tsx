import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import Breadcrumb from "../components/routing/Breadcrumb";
import { MemoryRouter } from "react-router-dom";

function renderBreadcrumb(text: string, to: string) {
  render(
    <MemoryRouter>
      <Breadcrumb text={text} to={to} />
    </MemoryRouter>
  );
}

describe("Breadcrumb", () => {
  it("renders passed text", () => {
    renderBreadcrumb("test", "/");

    expect(screen.getByRole("link").textContent).toMatch(/test/i);
  });

  it("links to passed route", () => {
    renderBreadcrumb("test", "/test_route");

    const breadcrumb = screen.getByRole("link");
    if (!(breadcrumb instanceof HTMLAnchorElement)) return false;
    expect(breadcrumb.href).toMatch(/test_route/i);
  });
});
