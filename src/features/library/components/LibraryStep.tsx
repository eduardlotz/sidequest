import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
export function LibraryStep({ children }: { children: ReactNode }) { const reduced = useReducedMotion(); return <motion.div style={{height:"100%",minHeight:0}} initial={reduced ? false : {opacity:0,y:12,filter:"blur(3px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} exit={reduced ? undefined : {opacity:0,y:-8,filter:"blur(3px)"}} transition={{duration:reduced ? 0 : .22}}>{children}</motion.div>; }
