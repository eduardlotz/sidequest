import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { FullscreenDialog } from "../../../../shared/ui/FullscreenDialog/FullscreenDialog";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { DESKTOP_VIEWPORT_QUERY, useMediaQuery } from "../../../../shared/hooks/useMediaQuery";
import styles from "./QuestExclusionDialog.module.css";

export function QuestExclusionDialog({ questName, reduceMotion, endsAttemptForFree = false, showKeepAndDontAskAgain = true, onKeepAndDontAskAgain, onClose, onExclude }: {
  questName: string | null;
  reduceMotion: boolean;
  endsAttemptForFree?: boolean;
  showKeepAndDontAskAgain?: boolean;
  onKeepAndDontAskAgain: () => void;
  onClose: () => void;
  onExclude: () => void;
}) {
  const { t } = useTranslation();
  const keepQuestRef = useRef<HTMLButtonElement>(null);
  const desktop = useMediaQuery(DESKTOP_VIEWPORT_QUERY);
  const buttonSize = desktop ? "medium" : "large";
  return (
    <FullscreenDialog
      open={questName !== null}
      label={t("ui.gallery.excludeTitle")}
      initialFocusRef={keepQuestRef}
      closeLabel={t("ui.gallery.closeExclude")}
      reduceMotion={reduceMotion}
      closeOnOutsideClick
      showCloseButton={false}
      onOpenChange={(open) => { if (!open) onClose(); }}
    >
      <section className={styles.content}>
        <h2>{t("ui.gallery.excludeTitle")}</h2>
        <p>{t("ui.gallery.excludeDescription", { quest: questName })}</p>
        {endsAttemptForFree && <p>{t("ui.gallery.excludeEndsAttempt")}</p>}
        <div className={styles.actions}>
          <SolidButton size={buttonSize} variant="danger" onClick={onExclude}>
            {t("ui.gallery.excludeQuest")}
          </SolidButton>
          <SolidButton ref={keepQuestRef} size={buttonSize} variant="soft" onClick={onClose}>
            {t("ui.gallery.keepQuest")}
          </SolidButton>
        </div>
        {showKeepAndDontAskAgain ? (
          <div className={styles.preference}>
            <SolidButton size={buttonSize} variant="ghost" onClick={onKeepAndDontAskAgain}>
              {t("ui.gallery.keepQuestAndDontAskAgain")}
            </SolidButton>
          </div>
        ) : null}
      </section>
    </FullscreenDialog>
  );
}
