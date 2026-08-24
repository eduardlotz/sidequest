import { useEffect, useState } from "react";

export const MOBILE_VIEWPORT_QUERY = "(max-width: 820px)";
export const DESKTOP_VIEWPORT_QUERY = "(min-width: 821px)";
export const COMPACT_PLAY_VIEWPORT_QUERY = "(max-width: 720px)";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}
