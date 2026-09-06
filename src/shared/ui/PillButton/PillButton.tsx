import { forwardRef, type ButtonHTMLAttributes } from "react";
import styles from "./PillButton.module.css";
export const PillButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(function PillButton({ className, ...props }, ref) { return <button type="button" {...props} ref={ref} className={[styles.pill,className].filter(Boolean).join(" ")} />; });
