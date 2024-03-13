import { useOutletContext } from "react-router-dom";
import type { selectionsContext } from "../declarations";

export default function useSelectionContext() {
	return useOutletContext<selectionsContext>();
}
