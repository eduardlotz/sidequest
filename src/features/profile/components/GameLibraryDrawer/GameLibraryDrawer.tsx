import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { LibraryCollectionEditor } from "../../../library/components/LibraryCollectionEditor/LibraryCollectionEditor";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { ChevronLeftIcon } from "../../../../shared/ui/Icons/Icons";
import { visuallyHiddenClassName } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./GameLibraryDrawer.module.css";
export function GameLibraryDrawer() {
  const { t } = useTranslation();
  return (
    <section className={styles.drawer}>
      <header>
        <Drawer.Close asChild>
          <SolidButton
            aria-label={t("ui.profile.back")}
            size="small"
            variant="soft"
          >
            <ChevronLeftIcon />
          </SolidButton>
        </Drawer.Close>
        <Drawer.Title>{t("ui.library.drawerTitle")}</Drawer.Title>
      </header>
      <Drawer.Description className={visuallyHiddenClassName}>
        {t("ui.library.drawerDescription")}
      </Drawer.Description>
      <div className={styles.body}>
        <LibraryCollectionEditor title={t("ui.library.overviewIntro")} />
      </div>
    </section>
  );
}
