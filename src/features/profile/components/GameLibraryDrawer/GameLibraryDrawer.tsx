import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { LibraryCollectionEditor } from "../../../library/components/LibraryCollectionEditor/LibraryCollectionEditor";
import { LibraryDrawerFrame } from "../../../library/components/LibraryDrawerFrame/LibraryDrawerFrame";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { useStore } from "zustand";
import type { LibraryState } from "../../../../domain/library/model";
import { createLibraryStore, libraryStore, LibraryStoreContext } from "../../../../stores/useLibraryStore";

export function GameLibraryDrawer() {
  const { t } = useTranslation();
  const [draftStore] = useState(() => {
    const draft = createLibraryStore();
    const { selectedCuratedGameIds, curatedGamePreferences, customGames } = libraryStore.getState();
    draft.setState({ selectedCuratedGameIds, curatedGamePreferences, customGames });
    return draft;
  });
  const draftSignature = useStore(draftStore, librarySignature);
  const savedSignature = useStore(libraryStore, librarySignature);
  const hasChanges = draftSignature !== savedSignature;

  function saveLibrary() {
    const { selectedCuratedGameIds, curatedGamePreferences, customGames } = draftStore.getState();
    libraryStore.setState(state => ({ selectedCuratedGameIds, curatedGamePreferences, customGames, revision: state.revision + 1 }));
  }
  return (
    <LibraryStoreContext.Provider value={draftStore}>
      <LibraryDrawerFrame title={t("ui.library.drawerTitle")}>
        <LibraryCollectionEditor presentation="drawer" title={t("ui.library.overviewIntro")} footer={hasChanges ? <>
          <Drawer.Close asChild><SolidButton size="large" variant="primary" onClick={saveLibrary}>{t("ui.library.saveLibrary")}</SolidButton></Drawer.Close>
        </> : undefined} />
      </LibraryDrawerFrame>
    </LibraryStoreContext.Provider>
  );
}

// Compare content rather than revisions: undoing a selection is clean again.
function librarySignature(state: LibraryState) {
  return JSON.stringify({
    selected: [...state.selectedCuratedGameIds].sort(),
    preferences: Object.entries(state.curatedGamePreferences)
      .filter(([, preferences]) => preferences.installmentIds.length > 0)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([id, preferences]) => [id, [...preferences.installmentIds].sort()]),
    custom: [...state.customGames].sort((a, b) => a.id.localeCompare(b.id)).map(game => ({
      ...game,
      capabilityIds: [...game.capabilityIds].sort(),
      questOverrides: Object.entries(game.questOverrides).sort(([a], [b]) => a.localeCompare(b)),
    })),
  });
}
