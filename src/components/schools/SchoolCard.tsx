import { NavLink } from "react-router-dom";
import { school } from "../../declarations";

interface props {
  school: school;
  setSchool: React.Dispatch<React.SetStateAction<string>>;
}

export default function SchoolCard({ school, setSchool }: props) {
  return (
    <NavLink
      to={`/calendar/${school.id}/undefined`}
      type="button"
      className="flex flex-col justify-start basis-full md:basis-[21vw] gap-2 text-start bg-white p-2 rounded border-secondary text-sm text-ku-secondary"
      onClick={() => setSchool(school.name)}
    >
      <div
        className="h-[20vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${school.image})` }}
      ></div>
      <div className="flex flex-col justify-between gap-1">
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
      </div>
    </NavLink>
  );
}
