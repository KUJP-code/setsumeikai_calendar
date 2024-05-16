import type { school } from "../declarations";

export default async function getSchools(): Promise<school[]> {
	const response = await fetch(
		"http://event-site-env.eba-ixrh9q23.ap-northeast-1.elasticbeanstalk.com/schools",
	);
	const data: school[] = await response.json();

	return data.map((school) => {
		return {
			...school,
			name: `Kids UP ${school.name}`,
		};
	});
}
