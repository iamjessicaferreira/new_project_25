"use client";

import { IconButton } from "@/once-ui/components";
import { useTheme } from "@/components/ThemeProvider";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.floatingToggle}>
      <IconButton
        icon={theme === "dark" ? "sun" : "moon"}
        onClick={toggleTheme}
        variant="secondary"
        size="m"
        tooltip={theme === "dark" ? "Light mode" : "Dark mode"}
        tooltipPosition="left"
      />
    </div>
  );
}
