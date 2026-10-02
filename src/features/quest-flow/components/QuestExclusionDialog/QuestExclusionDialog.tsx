import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { FullscreenDialog } from "../../../../shared/ui/FullscreenDialog/FullscreenDialog";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { Tooltip } from "../../../../shared/ui/Tooltip/Tooltip";
import styles from "./QuestExclusionDialog.module.css";

export function QuestExclusionDialog({ questName, reduceMotion, showKeepAndDontAskAgain = true, onKeepAndDontAskAgain, onClose, onExclude }: {
  questName: string | null;
  reduceMotion: boolean;
  showKeepAndDontAskAgain?: boolean;
  onKeepAndDontAskAgain: () => void;
  onClose: () => void;
  onExclude: () => void;
}) {
  const { t } = useTranslation();
  const keepQuestRef = useRef<HTMLButtonElement>(null);
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
        <div className={styles.actions}>
          <Tooltip content={t("ui.gallery.excludeTooltip")}>
            <SolidButton size="medium" variant="danger" onClick={onExclude}>
              {t("ui.gallery.excludeQuest")}
            </SolidButton>
          </Tooltip>
          <SolidButton ref={keepQuestRef} size="medium" variant="soft" onClick={onClose}>
            {t("ui.gallery.keepQuest")}
          </SolidButton>
        </div>
        {showKeepAndDontAskAgain ? (
          <div className={styles.preference}>
            <SolidButton variant="ghost" onClick={onKeepAndDontAskAgain}>
              {t("ui.gallery.keepQuestAndDontAskAgain")}
            </SolidButton>
          </div>
        ) : null}
      </section>
    </FullscreenDialog>
  );
}
