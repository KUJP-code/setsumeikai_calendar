import { describe, expect, it } from "bun:test";
import jaFormat from "../../helpers/jaFormat";

describe("jaFormat", () => {
	it("formats a provided date to YYYY/MM/DD (kanji) HH:MM", () => {
		const testDate = new Date("Thursday, February 20, 2020 8:20:00 PM");
		expect(jaFormat(testDate)).toBe("2020/02/20 (木) 20:20");
	});

	it("zero pads months", () => {
		const testDate = new Date("Monday, January 20, 2020 8:20:00 PM");
		expect(jaFormat(testDate)).toBe("2020/01/20 (月) 20:20");
	});

	it("zero pads days", () => {
		const testDate = new Date(" Wednesday, January 1, 2020 8:20:00 PM");
		expect(jaFormat(testDate)).toBe("2020/01/01 (水) 20:20");
	});

	it("zero pads hours", () => {
		const testDate = new Date("Wednesday, January 1, 2020 8:20:00 AM");
		expect(jaFormat(testDate)).toBe("2020/01/01 (水) 08:20");
	});

	it("zero pads minutes", () => {
		const testDate = new Date("Wednesday, January 1, 2020 8:08:00 AM");
		expect(jaFormat(testDate)).toBe("2020/01/01 (水) 08:08");
	});
});
