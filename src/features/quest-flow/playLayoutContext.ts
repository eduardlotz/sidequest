import { createContext } from "react";

export type PlayLayoutMode = "compact" | "paired" | "wide";

export type PlayLayoutValue = {
  isCompact: boolean;
  mode: PlayLayoutMode;
};

export const PlayLayoutContext = createContext<PlayLayoutValue | null>(null);
