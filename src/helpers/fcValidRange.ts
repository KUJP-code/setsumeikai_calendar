// Show setsu for current month & end 2

export default function fcValidRange(date: Date) {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(endYear(date), endMonth(date.getMonth()), 1);
  return { start, end };
}

function endMonth(month: number) {
  return month === 10 ? 1 : month + 3;
}

function endYear(date: Date) {
  if (date.getMonth() === 10) {
    return date.getFullYear() + 1;
  }
  return date.getFullYear();
}
