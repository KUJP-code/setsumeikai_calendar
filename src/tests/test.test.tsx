import { describe, expect, test } from "bun:test";

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
