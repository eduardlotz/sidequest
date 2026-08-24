import { useContext } from "react";
import { PlayLayoutContext } from "./playLayoutContext";

export function usePlayLayout() {
  const value = useContext(PlayLayoutContext);
  if (!value) {
    throw new Error("usePlayLayout must be used inside PlayLayout");
  }
  return value;
}
