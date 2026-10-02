import { HeartIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { SolidButton } from "../ui/SolidButton/SolidButton";

export function QuestFavoriteButton({ favorite, onToggle, size = "medium", disabled = false }: {
  favorite: boolean;
  onToggle: () => void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <SolidButton
      size={size}
      variant="secondary"
      disabled={disabled}
      aria-pressed={favorite}
      onClick={onToggle}
      iconLeft={
        <HeartIcon
          weight={favorite ? "fill" : "bold"}
          style={favorite ? { color: "#fc3131" } : undefined}
        />
      }
    >
      {t("ui.gallery.favorite")}
    </SolidButton>
  );
}
