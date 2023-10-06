/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "bun:test";
import Breadcrumb from "../Breadcrumb";
import { MemoryRouter } from "react-router-dom";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

describe("something truthy and falsy", () => {
  test("true to be true", () => {
    expect(true).toBe(true);
  });

  test("false to be false", () => {
    expect(false).toBe(false);
  });
});

test("dom test", () => {
  document.body.innerHTML = `<button>My button</button>`;
  const button = document.querySelector("button");
  expect(button?.innerText).toEqual("My button");
});

describe("breadcrumb", () => {
  it("renders correct text", () => {
    render(
      <MemoryRouter>
        <Breadcrumb text="test" to="/" />
      </MemoryRouter>
    );
    expect(screen.getByRole("link").textContent).toMatch(/test/i);
  });
});
