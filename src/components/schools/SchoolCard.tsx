import { NavLink } from "react-router-dom";
import BusAreaList from "./BusAreaList";
import NearbyStationList from "./NearbyStationList";

interface props {
  school: school;
  selected: boolean;
  setSchool: React.Dispatch<React.SetStateAction<string>>;
}

export default function SchoolCard({ school, selected, setSchool }: props) {
  const className =
    "p-3 border border-ku-secondary rounded shadow-lg basis-full shrink-0 md:basis-[23vw]";

  return (
    <NavLink
      to={`/calendar/${school.name}`}
      type="button"
      className={
        selected ? className.concat(" outline outline-ku-orange") : className
      }
      onClick={() => setSchool(school.name)}
    >
      <h5 className="font-bold text-lg">{school.name}</h5>
      <p>{school.address}</p>
      <p>{school.phone}</p>
      {school.busAreas.length > 0 ? (
        <BusAreaList areas={school.busAreas} schoolId={school.id} />
      ) : null}
      {school.nearbyStations.length > 0 ? (
        <NearbyStationList
          stations={school.nearbyStations}
          schoolId={school.id}
        />
      ) : null}
    </NavLink>
  );
}
