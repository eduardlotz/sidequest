import { useLayoutEffect } from "react";

export function useViewportHeight() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const viewport = window.visualViewport;
    const update = () => {
      // Pinch zoom should magnify the existing layout, not resize it.
      if (viewport && Math.abs(viewport.scale - 1) > 0.01) return;
      const height = Math.floor(
        Math.min(window.innerHeight, viewport?.height ?? Infinity),
      );
      if (height > 0) {
        root.style.setProperty("--visible-viewport-height", `${height}px`);
      }
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("pageshow", update);
    viewport?.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("pageshow", update);
      viewport?.removeEventListener("resize", update);
      root.style.removeProperty("--visible-viewport-height");
    };
  }, []);
}
