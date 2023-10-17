import BusAreaList from "./BusAreaList";
import NearbyStationList from "./NearbyStationList";

export default function SchoolCard({
  id,
  name,
  address,
  phone,
  busAreas,
  nearbyStations,
}: school) {
  return (
    <article className="p-3 border border-ku-secondary rounded shadow-lg basis-full shrink-0 md:basis-[23vw]">
      <h5 className="font-bold text-lg">{name}</h5>
      <p>{address}</p>
      <p>{phone}</p>
      {busAreas.length > 0 ? (
        <BusAreaList areas={busAreas} schoolId={id} />
      ) : null}
      {nearbyStations.length > 0 ? (
        <NearbyStationList stations={nearbyStations} schoolId={id} />
      ) : null}
    </article>
  );
}
