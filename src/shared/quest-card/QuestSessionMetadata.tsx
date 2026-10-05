import { useTranslation } from "react-i18next";
import {
  WifiHighIcon,
  PlugsIcon,
  UserIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { QUEST_PEOPLE } from "../../data/questContexts";
import type { QuestExperience } from "../../data/questTypes";
import styles from "./QuestSessionMetadata.module.css";

export function QuestSessionMetadata({
  experience,
}: {
  experience: QuestExperience;
}) {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";
  const alternatives = [
    ...new Map(
      experience.contexts.map((context) => [
        `${context.connection}:${context.people}`,
        context,
      ]),
    ).values(),
  ];
  const prerequisites = experience.prerequisites.filter(
    (condition) => condition.critical,
  );
  return (
    <span className={styles.sessionMetadata} data-quest-metadata="front">
      <span className={styles.contextLine}>
        {alternatives.map(({ connection, people }, index) => {
          const ConnectionIcon =
            connection === "online" ? WifiHighIcon : PlugsIcon;
          const PeopleIcon = people === "others" ? UsersIcon : UserIcon;
          return (
            <span key={`${connection}:${people}`}>
              {index > 0 && <span aria-hidden="true">/</span>}
              <ConnectionIcon weight="duotone" aria-hidden />
              {connection === "online" ? "Online" : "Offline"}
              <PeopleIcon weight="duotone" aria-hidden />
              {QUEST_PEOPLE[people][language]}
            </span>
          );
        })}
      </span>
      {prerequisites.length > 0 && (
        <span>
          {prerequisites.map((condition) => condition[language]).join(" · ")}
        </span>
      )}
    </span>
  );
}
