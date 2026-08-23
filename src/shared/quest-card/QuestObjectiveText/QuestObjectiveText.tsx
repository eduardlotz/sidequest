import type { ReactNode } from "react";

type Props = {
  objective: string;
};

export function QuestObjectiveText({ objective }: Props) {
  return renderHighlightedObjective(objective);
}

export function plainObjectiveText(objective: string): string {
  return objective.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function renderHighlightedObjective(objective: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let cursor = 0;

  while (cursor < objective.length) {
    const opening = objective.indexOf("**", cursor);
    if (opening === -1) {
      parts.push(objective.slice(cursor));
      break;
    }

    const closing = objective.indexOf("**", opening + 2);
    if (closing === -1) {
      parts.push(objective.slice(cursor));
      break;
    }

    if (opening > cursor) parts.push(objective.slice(cursor, opening));

    const highlighted = objective.slice(opening + 2, closing);
    if (highlighted) {
      parts.push(<strong key={`${opening}-${closing}`}>{highlighted}</strong>);
    } else {
      parts.push("****");
    }
    cursor = closing + 2;
  }

  return parts;
}
