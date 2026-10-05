import { DesktopIcon } from "@phosphor-icons/react/dist/csr/Desktop";
import { GameControllerIcon } from "@phosphor-icons/react/dist/csr/GameController";
import type { GamePlatformId } from "../../../data/gamePlatforms";

export function GamePlatformIcon({ platform }: { platform: GamePlatformId }) {
  if (platform === "pc") return <DesktopIcon size={12} weight="fill" aria-hidden />;
  if (platform === "wii-u") return <GameControllerIcon size={12} weight="fill" aria-hidden />;
  return <svg width={12} height={12} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h4V2H7Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h2V4H7Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM14 2h3a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-3V2Zm4.5 11a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  </svg>;
}
