import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { PlusCircleIcon } from "@phosphor-icons/react/dist/csr/PlusCircle";
import styles from "./SelectionMark.module.css";
export function SelectionMark({ selected }: { selected: boolean }) { const Icon = selected ? CheckCircleIcon : PlusCircleIcon; return <Icon className={styles.mark} data-selected={selected} weight="fill" aria-hidden />; }
