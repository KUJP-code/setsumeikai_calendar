interface props {
  areas: string[];
  schoolId: number;
}

export default function BusAreaList({ areas, schoolId }: props) {
  return (
    <>
      <h6 className="font-semibold">送迎対象地域</h6>
      <ul>
        {areas.map((area) => {
          return <li key={`${area}${schoolId}`}>{area}</li>;
        })}
      </ul>
    </>
  );
}
