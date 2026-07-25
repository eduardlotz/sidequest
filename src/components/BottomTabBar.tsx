import { HistoryIcon, TimerIcon } from "./Icons";
import { playSound } from "../lib/sound";
import styles from "../App.module.css";

export type AppTab = "task" | "history";

type Props = {
  selectedTab: AppTab;
  onSelect: (tab: AppTab) => void;
};

export function BottomTabBar({ selectedTab, onSelect }: Props) {
  return (
    <nav className={styles.tabBar} aria-label="Main navigation">
      <div className={styles.tabBarInner} role="tablist">
        <TabButton
          active={selectedTab === "task"}
          icon={<TimerIcon />}
          tab="task"
          label="Task"
          onClick={() => onSelect("task")}
        />
        <TabButton
          active={selectedTab === "history"}
          icon={<HistoryIcon />}
          tab="history"
          label="History"
          onClick={() => onSelect("history")}
        />
      </div>
    </nav>
  );
}

type TabButtonProps = {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  tab: AppTab;
};

function TabButton({ active, icon, label, onClick, tab }: TabButtonProps) {
  function handleClick() {
    if (!active) playSound("tabSwitch");
    onClick();
  }

  return (
    <button
      className={styles.tabButton}
      data-active={active || undefined}
      data-sound-click-skip
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={`${tab}-panel`}
      id={`${tab}-tab`}
      onClick={handleClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
