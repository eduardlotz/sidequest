import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { ChevronLeftIcon } from "../../../../shared/ui/Icons/Icons";
import { visuallyHiddenClassName } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./ProfileDrawer.module.css";

export function ProfilePanel({
  children,
  description,
  showBack = false,
  title,
  titleId,
}: {
  children: ReactNode;
  description: string;
  showBack?: boolean;
  title: string;
  titleId: string;
}) {
  const { t } = useTranslation();
  return (
    <section
      className={styles.profileDrawer}
      data-profile-drawer
      aria-labelledby={titleId}
    >
      <header className={styles.profileDrawerHeader} data-profile-drawer-header>
        <div className={styles.profileDrawerTitleRow}>
          {showBack ? (
            <Drawer.Close asChild>
              <button
                className={styles.profileBackButton}
                type="button"
                aria-label={t("ui.profile.back")}
              >
                <ChevronLeftIcon />
              </button>
            </Drawer.Close>
          ) : null}
          <Drawer.Title asChild>
            <h2 id={titleId}>{title}</h2>
          </Drawer.Title>
        </div>
        <Drawer.Description className={visuallyHiddenClassName}>
          {description}
        </Drawer.Description>
      </header>
      <div className={styles.profileDrawerBody}>{children}</div>
    </section>
  );
}
