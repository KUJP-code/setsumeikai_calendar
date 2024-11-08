import { NavLink } from "react-router-dom";
import type { school } from "../../declarations";

interface props {
  school: school;
  setSchool: React.Dispatch<React.SetStateAction<string>>;
}

export default function SchoolCard({ school, setSchool }: props) {
  if (school.name === "Kids UP オンラインコース") {
    return (
      <NavLink
        to={`/calendar/${school.id}/undefined`}
        type="button"
        className="border-secondary flex basis-full flex-col justify-start gap-2 rounded bg-white p-2 text-start text-sm text-ku-secondary md:basis-[21vw]"
        onClick={() => setSchool(school.name)}
      >
        <div
          className="h-[25vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${school.image})` }}
        />
        <div className="flex flex-col justify-between gap-1">
          <h5 className="w-full text-center text-2xl font-bold text-ku-orange">
            Kids UP オンラインコース
          </h5>
          <p>楽しみながら学べるおうちで英会話！</p>
          <br />
          <p>KidsUPのレッスンをご家庭で！</p>
          <br />
          <p>お子様の学びをサポートするコンテンツを</p>
          <br />
          <p>豊富にご用意しております。</p>
        </div>
      </NavLink>
    );
  }
  return (
    <NavLink
      to={`/calendar/${school.id}/undefined`}
      type="button"
      className="border-secondary flex basis-full flex-col justify-start gap-2 rounded bg-white p-2 text-start text-sm text-ku-secondary md:basis-[21vw]"
      onClick={() => setSchool(school.name)}
    >
      <div
        className="h-[25vh] bg-cover bg-center"
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
