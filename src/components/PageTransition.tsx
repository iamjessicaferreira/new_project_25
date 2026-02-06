"use client";

import type { ReactNode } from "react";
import styles from "./PageTransition.module.scss";

export function PageTransition({ children }: { children: ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}
