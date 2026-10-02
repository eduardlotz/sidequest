import { useTranslation } from "react-i18next";
import { FullscreenDialog } from "../../../../shared/ui/FullscreenDialog/FullscreenDialog";
import { SolidButton } from "../../../../shared/ui/SolidButton/SolidButton";
import { Tooltip } from "../../../../shared/ui/Tooltip/Tooltip";
import styles from "./QuestExclusionDialog.module.css";

export function QuestExclusionDialog({ questName, reduceMotion, onClose, onExclude }: {
  questName: string | null;
  reduceMotion: boolean;
  onClose: () => void;
  onExclude: () => void;
}) {
  const { t } = useTranslation();
  return (
    <FullscreenDialog
      open={questName !== null}
      label={t("ui.gallery.excludeTitle")}
      closeLabel={t("ui.gallery.closeExclude")}
      reduceMotion={reduceMotion}
      closeOnOutsideClick
      onOpenChange={(open) => { if (!open) onClose(); }}
    >
      <section className={styles.content}>
        <h2>{t("ui.gallery.excludeTitle")}</h2>
        <p>{t("ui.gallery.excludeDescription", { quest: questName })}</p>
        <div className={styles.actions}>
          <Tooltip content={t("ui.gallery.excludeTooltip")}>
            <SolidButton size="medium" variant="primary" onClick={onExclude}>
              {t("ui.gallery.excludeQuest")}
            </SolidButton>
          </Tooltip>
          <SolidButton size="medium" variant="soft" onClick={onClose}>
            {t("ui.gallery.keepQuest")}
          </SolidButton>
        </div>
      </section>
    </FullscreenDialog>
  );
}
