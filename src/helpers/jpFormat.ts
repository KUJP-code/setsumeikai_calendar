export default function jpFormat(date: Date) {
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}
