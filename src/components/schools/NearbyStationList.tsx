interface props {
  schoolId: string;
  stations: string[];
}

export default function NearbyStationList({ schoolId, stations }: props) {
  return (
    <>
      <h6 className="font-semibold">最寄駅</h6>
      <ul>
        {stations.map((station) => {
          return <li key={`${station}${schoolId}`}>{station}</li>;
        })}
      </ul>
    </>
  );
}
