import { afterAll, afterEach, beforeAll, describe, expect, it } from "bun:test";
import SchoolCard from "../components/schools/SchoolCard";
import { cleanup, render, screen } from "@testing-library/react";

const testSchool: school = {
  id: 41,
  name: "大倉山",
  address: "〒222-0032 神奈川県横浜市港北区大豆戸町80",
  phone: "0120-378-056",
  busAreas: ["横浜市港北区", "鶴見区"],
  nearbyStations: ["大倉山駅", "菊名駅"],
};

describe("School Card", () => {
  describe("happy path", () => {
    beforeAll(() => {
      render(<SchoolCard {...testSchool} />);
    });
    afterAll(cleanup);

    it("shows school name, address and phone", () => {
      expect(screen.queryByText(`${testSchool.name}`)).toBeTruthy();
      expect(screen.queryByText(`${testSchool.address}`)).toBeTruthy();
      expect(screen.queryByText(`${testSchool.phone}`)).toBeTruthy();
    });

    it("lists each bus area", () => {
      testSchool.busAreas.every((area) => {
        screen.queryByRole("listitem", { name: `${area}` });
      });
    });

    it("lists each nearby station", () => {
      testSchool.nearbyStations.every((station) => {
        screen.queryByRole("listitem", { name: `${station}` });
      });
    });

    it.todo("shows loading state if no school", () => {});
  });

  describe("details missing", () => {
    const noDetails: school = {
      ...testSchool,
      nearbyStations: [],
      busAreas: [],
    };
    afterEach(cleanup);

    it("doesn't render bus component if no bus areas", () => {
      render(<SchoolCard {...noDetails} />);

      expect(screen.queryByRole("heading", { name: "送迎対象地域" })).toBe(
        null
      );
    });

    it("doesn't render nearby station component if no nearby stations", () => {
      render(<SchoolCard {...noDetails} />);

      expect(screen.queryByRole("heading", { name: "最寄駅" })).toBe(null);
    });
  });
});
