import { beforeAll, describe, expect, it, mock } from "bun:test";
import SchoolCard from "../../components/schools/SchoolCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { school } from "../../declarations";

const testSchool: school = {
  id: "41",
  name: "大倉山",
  address: "〒222-0032 神奈川県横浜市港北区大豆戸町80",
  phone: "0120-378-056",
  hiragana: [""],
  busAreas: ["横浜市港北区", "鶴見区"],
  nearbyStations: ["大倉山駅", "菊名駅"],
  setsumeikais: [],
  image: ""
};

describe("School Card", () => {
  describe("happy path", () => {
    beforeAll(() => {
      render(
        <MemoryRouter>
          <SchoolCard school={testSchool} setSchool={mock(() => {})} />
        </MemoryRouter>
      );
    });

    it("shows school name and address", () => {
      expect(screen.queryByText(`${testSchool.name}`)).toBeTruthy();
      expect(screen.queryByText(`${testSchool.address}`)).toBeTruthy();
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
  });

  describe("interactivity", () => {
    it("sets itself as selected school on click", async () => {
      const setSchoolMock = mock(() => {});
      render(
        <MemoryRouter>
          <SchoolCard school={testSchool} setSchool={setSchoolMock} />
        </MemoryRouter>
      );
      const user = userEvent.setup();
      await user.click(screen.getByRole("link"));

      expect(setSchoolMock.mock.calls.length).toBe(1);
    });
  });

  describe("details missing", () => {
    const noDetails: school = {
      ...testSchool,
      nearbyStations: [],
      busAreas: [],
    };

    it("doesn't render bus areas if none", () => {
      render(
        <MemoryRouter>
          <SchoolCard school={noDetails} setSchool={mock(() => {})} />
        </MemoryRouter>
      );

      expect(screen.queryByText("送迎対象地域")).toBe(null);
    });

    it("doesn't render nearby stations if none", () => {
      render(
        <MemoryRouter>
          <SchoolCard school={noDetails} setSchool={mock(() => {})} />
        </MemoryRouter>
      );

      expect(screen.queryByText("最寄駅")).toBe(null);
    });
  });
});
