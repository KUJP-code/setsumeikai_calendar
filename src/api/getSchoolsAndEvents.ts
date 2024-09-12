import type { school } from "../declarations";

export default async function getSchools(): Promise<school[]> {
	const response = await fetch("https://kids-up.app/setsu_schools.json").then(
		(res) => res,
		(error) => console.log(error),
	);

	if (!response) {
		return [];
	}

	const data: school[] = await response.json();

	return data.map((school) => {
		return {
			...school,
			name: `Kids UP ${school.name}`,
		};
	});
}
