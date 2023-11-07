import { NavLink } from "react-router-dom";

interface props {
  school: school;
  setSchool: React.Dispatch<React.SetStateAction<string>>;
}

export default function SchoolCard({ school, setSchool }: props) {
  return (
    <NavLink
      to={`/calendar/${school.id}/undefined`}
      type="button"
      className="flex flex-col items-start gap-2 p-3 rounded-3xl shadow-lg basis-full shrink-0 md:basis-[23.5vw] school-card text-start"
      onClick={() => setSchool(school.name)}
    >
      <h5 className="font-bold text-2xl text-ku-orange text-center w-full">
        {school.name}
      </h5>
      <p>{school.address}</p>
      {school.busAreas.length ? (
        <p>
          <span className="font-semibold">送迎対象地域:</span>{" "}
          {school.busAreas.join("、 ")}
        </p>
      ) : null}
      {school.nearbyStations.length ? (
        <p>
          <span className="font-semibold">最寄駅:</span>{" "}
          {school.nearbyStations.join("、 ")}
        </p>
      ) : null}
    </NavLink>
  );
}
