export function formatRunningDuration(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  const pad = (value: number) => String(value).padStart(2, "0");

  return hours > 0
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(totalMinutes)}:${pad(seconds)}`;
}

export function formatCompletedAt(timestamp: number, locale?: string) {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(timestamp);
}

export function formatScore(score: number, locale?: string) {
  return new Intl.NumberFormat(locale).format(score);
}
