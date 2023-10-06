import { afterAll } from "bun:test";

afterAll(() => {
  window.happyDOM.cancelAsync();
});
