import { useEffect, useRef } from "react";
import styles from "./InteractiveDotBackground.module.css";

type Props = {
  reduceMotion: boolean;
};

const DOT_SPACING = 29;
const DOT_RADIUS = 1.55;
const DOT_OPACITY = 0.07;
const MAX_DEVICE_PIXEL_RATIO = 2;

export function InteractiveDotBackground(_: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    const backgroundCanvas: HTMLCanvasElement = canvas;
    const drawingContext: CanvasRenderingContext2D = context;

    function draw() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        MAX_DEVICE_PIXEL_RATIO,
      );

      backgroundCanvas.width = Math.round(width * pixelRatio);
      backgroundCanvas.height = Math.round(height * pixelRatio);
      backgroundCanvas.style.width = `${width}px`;
      backgroundCanvas.style.height = `${height}px`;

      drawingContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drawingContext.clearRect(0, 0, width, height);
      drawingContext.fillStyle = getComputedStyle(backgroundCanvas).color;
      drawingContext.globalAlpha = DOT_OPACITY;

      for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
        for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
          drawingContext.beginPath();
          drawingContext.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          drawingContext.fill();
        }
      }

      drawingContext.globalAlpha = 1;
    }

    draw();
    window.addEventListener("resize", draw);

    const observer = new MutationObserver(draw);

    // TODO: refactor with theme hook or passed theme
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      window.removeEventListener("resize", draw);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      aria-hidden="true"
      className={styles.background}
      data-dot-background
      ref={canvasRef}
    />
  );
}
