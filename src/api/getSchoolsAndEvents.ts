export default async function getSchools(): Promise<school[]> {
  const response = await fetch("http://localhost:3000/schools.json");
  const data: school[] = await response.json();

  return data;
}
