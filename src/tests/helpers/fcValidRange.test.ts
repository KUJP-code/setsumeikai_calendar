import { describe, expect, it } from "bun:test";
import fcValidRange from "../../helpers/fcValidRange";

describe("fcValidRange", () => {
  it("gives start as Jan 1st if current month February", () => {
    const testDate = new Date("February 20, 2020");
    const { start } = fcValidRange(testDate);
    expect(start).toEqual(new Date("January 1, 2020"));
  });

  it("gives start as Dec 1st of previous year if current month Jan", () => {
    const testDate = new Date("January 20, 2020");
    const { start } = fcValidRange(testDate);
    expect(start).toEqual(new Date("December 1, 2019"));
  });

  it("gives end as August 1st if current month June", () => {
    const testDate = new Date("June 20, 2020");
    const { end } = fcValidRange(testDate);
    expect(end).toEqual(new Date("August 1, 2020"));
  });

  it("gives end as Feb 1st of next year if current month Dec", () => {
    const testDate = new Date("December 20, 2020");
    const { end } = fcValidRange(testDate);
    expect(end).toEqual(new Date("February 1, 2021"));
  });
});
