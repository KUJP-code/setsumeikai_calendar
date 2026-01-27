import { NavLink } from "react-router-dom";
import type { school } from "../../declarations";

interface props {
  school: school;
  setSchool: React.Dispatch<React.SetStateAction<string>>;
}

export default function SchoolCard({ school, setSchool }: props) {

  return (
    <NavLink
      to={`/calendar/${school.id}/undefined`}
      type="button"
      className="border-2 border-[rgba(200,190,180,0.4)] flex basis-full flex-col justify-start gap-2 rounded-xl bg-white p-3 text-start text-sm text-ku-secondary md:basis-[21vw]"
      onClick={() => setSchool(school.name)}
    >
      <div
        className="h-[25vh] bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${school.image})` }}
      />
      <div className="flex flex-col justify-between gap-1">
        <h5 className="w-full text-center text-2xl font-bold text-ku-orange">
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
