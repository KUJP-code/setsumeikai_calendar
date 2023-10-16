import SchoolCard from "./SchoolCard";

export default function SchoolList() {
  const testSchools: school[] = [
    {
      id: 41,
      name: "大倉山",
      address: "〒222-0032 神奈川県横浜市港北区大豆戸町80",
      phone: "0120-378-056",
      busAreas: ["横浜市港北区", "鶴見区"],
      nearbyStations: ["大倉山駅", "菊名駅"],
    },
    {
      id: 43,
      name: "川口",
      address: "〒332‐0016 埼玉県川口市幸町3‐7‐22　ML21ビル ２F ",
      phone: "0120-378-056",
      busAreas: ["川口駅近くの小学校", "保育園など"],
      nearbyStations: ["川口駅"],
    },
  ];

  return (
    <main className="flex flex-wrap gap-3 p-3">
      {testSchools.map((school) => {
        return <SchoolCard {...school} key={school.id} />;
      })}
    </main>
  );
}
