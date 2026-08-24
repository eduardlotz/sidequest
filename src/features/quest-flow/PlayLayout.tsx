import {
  useLayoutEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import {
  PlayLayoutContext,
  type PlayLayoutMode,
} from "./playLayoutContext";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

const COMPACT_MAX_WIDTH = 680;
const PAIRED_MAX_WIDTH = 1100;

export function PlayLayout({ children, ...sectionProps }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<PlayLayoutMode>(() =>
    modeForWidth(
      typeof document === "undefined"
        ? PAIRED_MAX_WIDTH
        : document.documentElement.clientWidth,
    ),
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = (width: number) => {
      const nextMode = modeForWidth(width);
      setMode((currentMode) =>
        currentMode === nextMode ? currentMode : nextMode,
      );
    };
    const updateFromSection = () => update(section.getBoundingClientRect().width);
    updateFromSection();

    const observer = new ResizeObserver(([entry]) => {
      if (entry) update(entry.contentRect.width);
    });
    observer.observe(section);
    window.addEventListener("resize", updateFromSection, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateFromSection);
    };
  }, []);

  return (
    <PlayLayoutContext.Provider
      value={{ isCompact: mode === "compact", mode }}
    >
      <section {...sectionProps} data-play-layout={mode} ref={sectionRef}>
        {children}
      </section>
    </PlayLayoutContext.Provider>
  );
}

function modeForWidth(width: number): PlayLayoutMode {
  if (width <= COMPACT_MAX_WIDTH) return "compact";
  if (width <= PAIRED_MAX_WIDTH) return "paired";
  return "wide";
}
