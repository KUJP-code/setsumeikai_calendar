import { NavLink } from "react-router-dom";

interface props {
  school: school;
  selected: boolean;
  setSchool: React.Dispatch<React.SetStateAction<string>>;
}

export default function SchoolCard({ school, selected, setSchool }: props) {
  const className =
    "flex flex-col gap-2 p-3 border-4 border-ku-blue rounded-3xl shadow-lg basis-full shrink-0 md:basis-[23vw]";

  return (
    <NavLink
      to={`/calendar/${school.id}/undefined`}
      type="button"
      className={
        selected ? className.concat(" outline outline-ku-orange") : className
      }
      onClick={() => setSchool(school.name)}
    >
      <h5 className="font-extrabold text-2xl text-ku-orange text-center">
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
