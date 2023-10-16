interface props {
  schoolId: number;
  stations: string[];
}

export default function NearbyStationList({ schoolId, stations }: props) {
  return (
    <>
      <h6>最寄駅</h6>
      <ul>
        {stations.map((station) => {
          return <li key={`${station}${schoolId}`}>{station}</li>;
        })}
      </ul>
    </>
  );
}