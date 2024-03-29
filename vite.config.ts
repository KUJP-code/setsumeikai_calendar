import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	if (command === "build") {
		return {
			base: "/wp-content/reactpress/apps/setsumeikai_calendar/dist/",
			plugins: [react()],
		};
	}
	return {
		plugins: [react()],
	};
});
