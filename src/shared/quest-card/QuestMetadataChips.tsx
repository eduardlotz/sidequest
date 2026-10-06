import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import type { ReactNode } from "react";
import { QUEST_PEOPLE } from "../../data/questContexts";
import { GAME_GENRES } from "../../data/gameGenres";
import { QUEST_TAGS } from "../../data/questTraits";
import type { QuestTagId } from "../../data/questTraits";
import { GAME_PLATFORMS } from "../../data/gamePlatforms";
import type { QuestExperience } from "../../data/questTypes";
import styles from "./QuestMetadataChips.module.css";

function SoftChip({ children }: { children: ReactNode }) {
  return <span className={styles.soft}>{children}</span>;
}

/** Display labels never change the contexts used to match a quest. */
export function QuestMetadataChips({
  experience,
  tags,
  reward,
}: {
  experience?: QuestExperience;
  tags: readonly QuestTagId[];
  reward?: ReactNode;
}) {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";
  // Historical snapshots keep their original experience. They can still use the
  // current chip treatment without rewriting any saved objective or context.
  const metadata = experience?.cardMetadata ?? {
    genreIds: [],
    playStyleIds: tags.filter(
      (id): id is "co-op" | "local-play" =>
        id === "co-op" || id === "local-play",
    ),
  };
  const contexts = [
    ...new Map(
      (experience?.contexts ?? []).map((context) => [
        `${context.connection}:${context.people}`,
        context,
      ]),
    ).values(),
  ];
  const samePeople = contexts.every(
    (context) => context.people === contexts[0]?.people,
  );
  const genreActivity = {
    card: "cards",
    puzzle: "puzzles",
    rhythm: "rhythm",
    stealth: "stealth",
    racing: "racing",
  } as const;
  const repeatedActivities = metadata.genreIds.flatMap((id) =>
    id in genreActivity
      ? [genreActivity[id as keyof typeof genreActivity]]
      : [],
  );
  const secondary = [
    ...new Set([
      ...(experience?.activities ?? []),
      ...(experience?.rules ?? []),
      ...tags,
    ]),
  ].filter(
    (id) =>
      !metadata.playStyleIds.some((style) => style === id) &&
      !repeatedActivities.some((activity) => activity === id),
  );
  const platformIds = experience?.cardMetadata?.platformIds ?? [];
  const secondaryLabels = new Set(
    secondary.map((id) => QUEST_TAGS[id][language].toLocaleLowerCase(language)),
  );
  const prerequisites = [
    ...new Map(
      (experience?.prerequisites ?? [])
        .filter((condition) => condition.critical)
        .flatMap((condition) =>
          (condition.chips?.[language] ?? []).map((label) => ({
            label,
            title: condition[language],
          })),
        )
        .filter(
          ({ label }) =>
            !secondaryLabels.has(label.toLocaleLowerCase(language)),
        )
        .map((chip) => [chip.label.toLocaleLowerCase(language), chip]),
    ).values(),
  ];
  const connection = (value: "online" | "offline") =>
    value === "online" ? "Online" : "Offline";
  const people = (value: "alone" | "others") =>
    QUEST_PEOPLE[value][language];
  const features = [
    ...secondary.map((id) => ({ label: QUEST_TAGS[id][language], title: undefined })),
    ...prerequisites,
  ];
  return (
    <span className={styles.metadata} data-quest-metadata="chips">
      <span className={styles.row}>
        {reward}
        {samePeople && contexts.length > 0 ? (
          <>
            <SoftChip>
              {contexts.map((context, index) => (
                <span className={styles.segment} key={context.connection}>
                  {index > 0 && <span className={styles.separator}>/</span>}
                  {connection(context.connection)}
                </span>
              ))}
            </SoftChip>
            <SoftChip>{people(contexts[0].people)}</SoftChip>
          </>
        ) : (
          contexts.map((context, index) => (
            <span
              className={styles.alternative}
              key={`${context.connection}:${context.people}`}
            >
              {index > 0 && <span className={styles.separator}>/</span>}
              <SoftChip>
                {connection(context.connection)}
                <span aria-hidden>·</span>
                {people(context.people)}
              </SoftChip>
            </span>
          ))
        )}
      </span>
      {(metadata.playStyleIds.length > 0 ||
        metadata.genreIds.length > 0 ||
        platformIds.length > 0) && (
        <span className={styles.row}>
          {metadata.playStyleIds.map((id) => (
            <span className={styles.outline} key={id}>
              {QUEST_TAGS[id][language]}
            </span>
          ))}
          {metadata.genreIds.map((id) => (
            <span className={styles.outline} key={id}>
              {GAME_GENRES[id].title[language]}
            </span>
          ))}
          {platformIds.map((id) => (
            <span className={styles.outline} key={id}>
              {GAME_PLATFORMS[id][language]}
            </span>
          ))}
        </span>
      )}
      {features.length > 0 && (
        <span className={styles.features}>
          {features.map((feature, index) => (
            <Fragment key={feature.label}>
              {index > 0 && <span aria-hidden="true"> · </span>}
              <span title={feature.title}>{feature.label}</span>
            </Fragment>
          ))}
        </span>
      )}
    </span>
  );
}
