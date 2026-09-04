import { useTranslation } from "react-i18next";
import { LibraryCollectionEditor } from "../../../library/components/LibraryCollectionEditor/LibraryCollectionEditor";
import { ProfilePanel } from "../ProfileDrawer/ProfilePanel";

export function GameLibraryDrawer() {
  const { t } = useTranslation();
  return (
    <ProfilePanel
      description={t("ui.library.drawerDescription")}
      showBack
      title={t("ui.library.drawerTitle")}
      titleId="game-library-title"
    >
      <LibraryCollectionEditor />
    </ProfilePanel>
  );
}
