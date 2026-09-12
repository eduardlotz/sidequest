import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "vaul";
import { ChevronLeftIcon } from "../../../../shared/ui/Icons/Icons";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { visuallyHiddenClassName } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./ProfileDrawer.module.css";

export function ProfilePanel({
  children,
  description,
  showBack = false,
  title,
  titleId,
  headerAction,
  overview = false,
}: {
  children: ReactNode;
  headerAction?: ReactNode;
  overview?: boolean;
  description: string;
  showBack?: boolean;
  title: string;
  titleId: string;
}) {
  const { t } = useTranslation();
  return (
    <section
      className={`${styles.profileDrawer} ${overview ? styles.profileOverview : ""}`}
      data-profile-drawer
      data-show-back={showBack || undefined}
      aria-labelledby={titleId}
    >
      <header className={styles.profileDrawerHeader} data-profile-drawer-header>
        <div className={styles.profileDrawerTitleRow}>
          {showBack ? (
            <Drawer.Close asChild>
              <SolidButton
                className={styles.profileBackButton}
                aria-label={t("ui.profile.back")}
                size="small"
                variant="soft"
              >
                <ChevronLeftIcon />
              </SolidButton>
            </Drawer.Close>
          ) : null}
          <Drawer.Title asChild>
            <h2 id={titleId}>{title}</h2>
          </Drawer.Title>
          {headerAction}
        </div>
        <Drawer.Description className={visuallyHiddenClassName}>
          {description}
        </Drawer.Description>
      </header>
      <div className={styles.profileDrawerBody}>{children}</div>
    </section>
  );
}
