export default function jaFormat(d: Date) {
	return `${year(d)}/${month(d)}/${dayOfMonth(d)} (${jaDay(d)}) ${hour(
		d,
	)}:${minute(d)}`;
}

function pad(timestamp: number) {
	return timestamp.toString().padStart(2, "0");
}

function year(date: Date) {
	return date.getFullYear();
}

function month(date: Date) {
	return pad(date.getMonth() + 1);
}

function dayOfMonth(date: Date) {
	return pad(date.getDate());
}

function jaDay(date: Date) {
	return jaDays[date.getDay()];
}

const jaDays = ["日", "月", "火", "水", "木", "金", "土"];

function hour(date: Date) {
	return pad(date.getHours());
}

function minute(date: Date) {
	return pad(date.getMinutes());
}
