export default function fcValidRange(date: Date) {
  const start = new Date(prevYear(date), prevMonth(date.getMonth()), 1);
  const endMonth = nextMonth(date.getMonth());
  const end = new Date(nextYear(date), endMonth, 1);
  return { start, end };
}

function nextMonth(month: number) {
  return month === 11 ? 1 : month + 2;
}

function nextYear(date: Date) {
  if (date.getMonth() === 11) {
    return date.getFullYear() + 1;
  }
  return date.getFullYear();
}

function prevMonth(month: number) {
  return month === 0 ? 11 : month - 1;
}

function prevYear(date: Date) {
  if (date.getMonth() === 0) {
    return date.getFullYear() - 1;
  }
  return date.getFullYear();
}
