import type { ReactNode } from "react";
import { Drawer } from "vaul";
import { useTranslation } from "react-i18next";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { ChevronLeftIcon } from "../../../../shared/ui/Icons/Icons";
import { visuallyHiddenClassName } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./LibraryDrawerFrame.module.css";
import flowStyles from "../LibraryFlowElements.module.css";

export function LibraryDrawerFrame({ title, children }: { title: string; children: ReactNode }) {
  const { t } = useTranslation();
  return (
    <section className={`${flowStyles.elements} ${styles.drawer}`} data-presentation="drawer">
      <header className={styles.header}>
        <Drawer.Close asChild>
          <SolidButton aria-label={t("ui.library.back")} size="small" variant="soft">
            <ChevronLeftIcon />
          </SolidButton>
        </Drawer.Close>
        <Drawer.Title>{title}</Drawer.Title>
      </header>
      <Drawer.Description className={visuallyHiddenClassName}>{title}</Drawer.Description>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
