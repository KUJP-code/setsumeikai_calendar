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
    <div className="p-3 border border-ku-orange rounded shadow-lg">
      <h5>{name}</h5>
      <p>{address}</p>
      <p>{phone}</p>
      {busAreas.length > 0 ? (
        <BusAreaList areas={busAreas} schoolId={id} />
      ) : null}
      {nearbyStations.length > 0 ? (
        <NearbyStationList stations={nearbyStations} schoolId={id} />
      ) : null}
    </div>
  );
}
