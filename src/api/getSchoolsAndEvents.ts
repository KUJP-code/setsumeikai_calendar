export default async function getSchools(): Promise<school[]> {
  const response = await fetch("https://kids-up.app/schools.json");
  const data: school[] = await response.json();

  return data;
}
