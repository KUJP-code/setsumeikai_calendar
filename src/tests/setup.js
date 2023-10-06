import { cleanup } from "@testing-library/react";
import { afterAll, afterEach } from "bun:test";

afterEach(() => {
  cleanup();
});

afterAll(() => {
  window.happyDOM.cancelAsync();
});
