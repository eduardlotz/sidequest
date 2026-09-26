import { motion } from "motion/react";
import { useId } from "react";
import type { MoodId } from "../../../../data/moods";
import { getMoodArtStyle } from "../../../../data/questColors";
import { moodCardLayoutId } from "../../../../lib/cardMotion";
import { MoodIllustration } from "../MoodIllustration/MoodIllustration";
import { SelectionCardBody } from "../SelectionCard/SelectionCard";
import { ArcCarousel, type ArcCarouselProps } from "./ArcCarousel";
import type { ArcCardBodyProps } from "./ArcCard";
import { MoodCardFilters } from "./MoodCardFilters";
import styles from "./ArcDeck.module.css";

export type ArcDeckItem = { id: MoodId; title: string; subtitle: string };

type Props = Omit<ArcCarouselProps<ArcDeckItem>, "renderCardBody" | "cardStyle" | "cardShape">;

export function ArcDeck(props: Props) {
  return <ArcCarousel {...props} cardStyle={(item) => getMoodArtStyle(item.id)}
    renderCardBody={(body) => <MoodCardBody {...body} />} />;
}

function MoodCardBody({
  item, layoutSessionId, reduceMotion, shaded, centeredTiltEffects,
  contentVisible, contentOpacity, illustrationX, illustrationY,
}: ArcCardBodyProps<ArcDeckItem>) {
  const shadingId = useId().replace(/:/g, "");
  const textFilterId = `${shadingId}-mood-text`;
  return <>
    {shaded && <MoodCardFilters textFilterId={textFilterId} />}
    <SelectionCardBody
      className={styles.moodSelectionCardBody}
      contentKey={`mood-${item.id}`}
      contentClassName={styles.moodSelectionCardContent}
      contentVisible={contentVisible}
      layoutId={moodCardLayoutId(layoutSessionId, item.id)}
      reduceMotion={reduceMotion}
    >
      <motion.span
        className={styles.moodCardVisual}
        style={{
          opacity: contentOpacity,
        }}
      >
        <span className={styles.arcCardContent}>
          <strong
            className={styles.arcCardTitle}
            style={
              shaded
                ? {
                    filter: `url("#${textFilterId}")`,
                  }
                : undefined
            }
          >
            {item.title}
          </strong>

          <span
            className={styles.arcCardDescription}
            style={
              shaded
                ? {
                    filter: `url("#${textFilterId}")`,
                  }
                : undefined
            }
          >
            {item.subtitle}
          </span>
        </span>

        <motion.span
          className={styles.moodIllustrationLayer}
          style={
            centeredTiltEffects
              ? {
                  x: illustrationX,
                  y: illustrationY,
                }
              : undefined
          }
        >
          <MoodIllustration
            className={styles.moodIllustration}
            moodId={item.id}
          />
        </motion.span>
      </motion.span>
    </SelectionCardBody>
  </>;
}
