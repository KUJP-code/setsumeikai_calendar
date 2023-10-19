export default async function getSchoolEvents(schoolName: string) {
  const testEvents = [];
  const currentDate = new Date();

  for (let i = 0; i < 20; i++) {
    const start = new Date(currentDate.setDate(currentDate.getDate() + 1));
    const end = new Date(start.setHours(start.getHours() + 2));

    const event: setsumeikai = {
      end: end.toISOString(),
      id: i.toString(),
      start: start.toISOString(),
      title: "School",
    };

    testEvents.push(event);
  }

  if (schoolName) return testEvents;
}