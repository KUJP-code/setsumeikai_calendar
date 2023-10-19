import { useOutletContext } from "react-router-dom";

export default function useSelectionContext() {
  return useOutletContext<selectionsContext>();
}
