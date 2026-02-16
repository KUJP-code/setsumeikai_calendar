import { NavLink } from "react-router-dom";
import type { school } from "../../declarations";

interface props {
  school: school;
  setSchool: React.Dispatch<React.SetStateAction<string>>;
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SchoolCard({ school, setSchool }: props) {
  return (
    <NavLink
      to={`/calendar/${school.id}/undefined`}
      type="button"
      className="relative group cursor-pointer overflow-hidden
                !border-2 !border-solid border-[#e4d7c5]
                rounded-xl bg-white p-3
                text-start text-sm text-ku-secondary
                flex basis-full flex-col justify-start gap-2
                md:basis-[21vw]
                transition-[transform,box-shadow,border-color] duration-200 ease-out
                md:hover:scale-[1.02]
                md:hover:shadow-md
                md:hover:border-[#e4d7c5cc]"
      onClick={() => setSchool(school.name)}
    >
      <div className="relative">
        <div
          className="h-[25vh] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${school.image})` }}
        />

        {school.isNew && (
          <div
            className="
              absolute top-2 right-2
              rounded-md bg-ku-orange px-3 py-1
              text-s font-bold tracking-wide text-white
              shadow
              pointer-events-none
            "
          >
            NEW OPEN
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow gap-1">
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

      <div className="mt-2 flex justify-center">
        <div
          className="
            group/button inline-flex items-center gap-2
            rounded-full !border-2 !border-solid border-ku-orange-50
            px-5 py-2
            text-sm font-bold tracking-wide
            text-ku-orange
            transition
            hover:bg-ku-orange hover:text-white
          "
        >
          <span className="text-base font-bold">無料体験申込み</span>
          <ArrowRightIcon
            className="
              h-8 w-8
              transition-transform
              group-hover/button:translate-x-1 active:scale-[0.98]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ku-orange-50
            "
          />
        </div>
      </div>
    </NavLink>
  );
}
