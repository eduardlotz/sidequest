import type {
  GameCapabilityId,
  GameColorId,
  GameIconId,
  GameReference,
} from "../../data/gameTypes";

export const LIBRARY_STORE_KEY = "sidequest.library";
export const LIBRARY_STORE_VERSION = 1;

export type QuestOverrides = Record<string, boolean>;

export type CustomGame = {
  id: string;
  name: string;
  iconId: GameIconId;
  colorId: GameColorId;
  capabilityIds: GameCapabilityId[];
  questOverrides: QuestOverrides;
};

export type CustomGameInput = Omit<CustomGame, "id">;

export type LibraryGame = GameReference & {
  questIds: readonly string[];
};

export type LibraryState = {
  setupCompleted: boolean;
  selectedCuratedGameIds: string[];
  customGames: CustomGame[];
  revision: number;
};

export type LibraryActions = {
  toggleCuratedGame: (gameId: string) => void;
  addCustomGame: (input: CustomGameInput) => string | null;
  updateCustomGame: (gameId: string, input: CustomGameInput) => boolean;
  removeCustomGame: (gameId: string) => boolean;
  completeSetup: () => boolean;
};

export type LibraryStore = LibraryState & LibraryActions;
export type PersistedLibraryState = LibraryState;

export const DEFAULT_LIBRARY_STATE: LibraryState = {
  setupCompleted: false,
  selectedCuratedGameIds: [],
  customGames: [],
  revision: 0,
};
