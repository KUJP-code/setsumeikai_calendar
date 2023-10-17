import FilterBox from "./FilterBox";
import SchoolCard from "./SchoolCard";

interface props {
  schools: school[];
}

export default function SchoolList({ schools }: props) {
  return (
    <main className="flex flex-wrap justify-evenly gap-3 p-3">
      <FilterBox />
      {schools.map((school) => {
        return <SchoolCard {...school} key={school.id} />;
      })}
    </main>
  );
}
