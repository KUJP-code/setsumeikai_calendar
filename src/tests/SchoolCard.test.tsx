import { beforeAll, describe, expect, it, mock } from "bun:test";
import SchoolCard from "../components/schools/SchoolCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
      render(
        <SchoolCard
          school={testSchool}
          selected={false}
          setSchool={mock(() => {})}
        />
      );
    });

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

  describe("interactivity", () => {
    it("is outlined when selected", () => {
      render(
        <SchoolCard
          school={testSchool}
          selected={true}
          setSchool={mock(() => {})}
        />
      );

      const card = screen.getByRole("button");
      expect(card.classList.contains("outline outline-ku-orange"));
    });

    it("sets itself as selected school on click", async () => {
      const setSchoolMock = mock(() => {});
      render(
        <SchoolCard
          school={testSchool}
          selected={true}
          setSchool={setSchoolMock}
        />
      );
      const user = userEvent.setup();
      await user.click(screen.getByRole("button"));

      expect(setSchoolMock.mock.calls.length).toBe(1);
    });
  });

  describe("details missing", () => {
    const noDetails: school = {
      ...testSchool,
      nearbyStations: [],
      busAreas: [],
    };

    it("doesn't render bus component if no bus areas", () => {
      render(
        <SchoolCard
          school={noDetails}
          selected={false}
          setSchool={mock(() => {})}
        />
      );

      expect(screen.queryByRole("heading", { name: "送迎対象地域" })).toBe(
        null
      );
    });

    it("doesn't render nearby station component if no nearby stations", () => {
      render(
        <SchoolCard
          school={noDetails}
          selected={false}
          setSchool={mock(() => {})}
        />
      );

      expect(screen.queryByRole("heading", { name: "最寄駅" })).toBe(null);
    });
  });
});
