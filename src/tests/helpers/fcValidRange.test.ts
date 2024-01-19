import { describe, expect, it } from "bun:test";
import fcValidRange from "../../helpers/fcValidRange";

describe("fcValidRange", () => {
  it("gives start as Dec 1st if current month December", () => {
    const testDate = new Date("December 20, 2020");
    const { start } = fcValidRange(testDate);
    expect(start).toEqual(new Date("December 1, 2020"));
  });

  it("gives start as Jan 1st if current month Jan", () => {
    const testDate = new Date("January 20, 2020");
    const { start } = fcValidRange(testDate);
    expect(start).toEqual(new Date("January 1, 2020"));
  });

  it("gives end as Sep 1st if current month June", () => {
    const testDate = new Date("June 20, 2020");
    const { end } = fcValidRange(testDate);
    expect(end).toEqual(new Date("September 1, 2020"));
  });

  it("gives end as Jan 1st of next year if current month Oct", () => {
    const testDate = new Date("October 20, 2020");
    const { end } = fcValidRange(testDate);
    expect(end).toEqual(new Date("January 1, 2021"));
  });

  it("gives end as Feb 1st of next year if current month Nov", () => {
    const testDate = new Date("November 20, 2020");
    const { end } = fcValidRange(testDate);
    expect(end).toEqual(new Date("February 1, 2021"));
  });

  it("gives end as Mar 1st of next year if current month Dec", () => {
    const testDate = new Date("December 20, 2020");
    const { end } = fcValidRange(testDate);
    expect(end).toEqual(new Date("March 1, 2021"));
  });
});
