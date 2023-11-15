import { useOutletContext } from "react-router-dom";
import { selectionsContext } from "../declarations";

export default function useSelectionContext() {
  return useOutletContext<selectionsContext>();
}
