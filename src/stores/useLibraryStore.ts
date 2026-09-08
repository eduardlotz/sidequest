import { createContext, useContext } from "react";
import { useStore } from "zustand";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
} from "zustand/middleware";
import { createStore, type StateCreator } from "zustand/vanilla";
import { CURATED_GAMES, CURATED_GAMES_BY_ID } from "../data/games";
import {
  LIBRARY_STORE_KEY,
  LIBRARY_STORE_VERSION,
  DEFAULT_LIBRARY_STATE,
  DEFAULT_CURATED_PREFERENCES,
  type LibraryState,
  type LibraryStore,
  type PersistedLibraryState,
} from "../domain/library/model";
import {
  migratePersistedLibraryState,
  sanitizeCustomGameInput,
  sanitizePersistedLibraryState,
} from "../domain/library/persistence";

type StoreOptions = {
  createGameId?: () => string;
};

function createLibraryState(
  createGameId: () => string,
): StateCreator<LibraryStore> {
  return (set, get) => ({
    ...DEFAULT_LIBRARY_STATE,
    toggleCuratedInstallment: (gameId, installmentId) => {
      if (
        !CURATED_GAMES_BY_ID[gameId]?.installments.some(
          (entry) => entry.id === installmentId,
        )
      )
        return;
      set((state) => {
        const previous =
          state.curatedGamePreferences[gameId] ?? DEFAULT_CURATED_PREFERENCES;
        return {
          curatedGamePreferences: {
            ...state.curatedGamePreferences,
            [gameId]: {
              ...previous,
              installmentIds: previous.installmentIds.includes(installmentId)
                ? previous.installmentIds.filter((id) => id !== installmentId)
                : [...previous.installmentIds, installmentId],
            },
          },
          revision: state.revision + 1,
        };
      });
    },
    startWithDevsCollection: () => {
      set((state) => ({
        selectedCuratedGameIds: CURATED_GAMES.map((game) => game.id),
        setupCompleted: true,
        revision: state.revision + 1,
      }));
    },
    selectAllCuratedGames: (selected) => {
      set((state) => ({
        selectedCuratedGameIds: selected
          ? CURATED_GAMES.map((game) => game.id)
          : [],
        revision: state.revision + 1,
      }));
    },
    toggleCuratedGame: (gameId) => {
      if (!CURATED_GAMES_BY_ID[gameId]) return;
      set((state) => ({
        selectedCuratedGameIds: state.selectedCuratedGameIds.includes(gameId)
          ? state.selectedCuratedGameIds.filter((id) => id !== gameId)
          : [...state.selectedCuratedGameIds, gameId],
        revision: state.revision + 1,
      }));
    },
    addCustomGame: (input) => {
      const normalized = sanitizeCustomGameInput(input);
      if (!normalized || normalized.capabilityIds.length === 0) return null;
      const id = createGameId();
      set((state) => ({
        customGames: [...state.customGames, { id, ...normalized }],
        revision: state.revision + 1,
      }));
      return id;
    },
    updateCustomGame: (gameId, input) => {
      const normalized = sanitizeCustomGameInput(input);
      if (
        !normalized || normalized.capabilityIds.length === 0 ||
        !get().customGames.some((game) => game.id === gameId)
      ) {
        return false;
      }
      set((state) => ({
        customGames: state.customGames.map((game) =>
          game.id === gameId ? { id: gameId, ...normalized } : game,
        ),
        revision: state.revision + 1,
      }));
      return true;
    },
    removeCustomGame: (gameId) => {
      if (!get().customGames.some((game) => game.id === gameId)) return false;
      set((state) => ({
        customGames: state.customGames.filter((game) => game.id !== gameId),
        revision: state.revision + 1,
      }));
      return true;
    },
    completeSetup: () => {
      set({ setupCompleted: true });
      return true;
    },
  });
}

export function createLibraryStore(
  storage?: PersistStorage<PersistedLibraryState>,
  options: StoreOptions = {},
) {
  const stateCreator = createLibraryState(
    options.createGameId ?? (() => crypto.randomUUID()),
  );
  if (!storage) return createStore<LibraryStore>()(stateCreator);

  return createStore<LibraryStore>()(
    persist(stateCreator, {
      name: LIBRARY_STORE_KEY,
      storage,
      version: LIBRARY_STORE_VERSION,
      partialize: ({
        setupCompleted,
        selectedCuratedGameIds,
        curatedGamePreferences,
        customGames,
        revision,
      }) => ({
        setupCompleted,
        selectedCuratedGameIds,
        curatedGamePreferences,
        customGames,
        revision,
      }),
      migrate: migratePersistedLibraryState,
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...sanitizePersistedLibraryState(persistedState),
      }),
    }),
  );
}

const browserStorage =
  typeof window === "undefined"
    ? undefined
    : createJSONStorage<PersistedLibraryState>(() => window.localStorage);

export const libraryStore = createLibraryStore(browserStorage);

export const LibraryStoreContext = createContext(libraryStore);

export function useLibraryStore<T>(selector: (state: LibraryStore) => T) {
  return useStore(useContext(LibraryStoreContext), selector);
}

export * from "../domain/library/model";
export { libraryGamesFromState } from "../domain/library/rules";
