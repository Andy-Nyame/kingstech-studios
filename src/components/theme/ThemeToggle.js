"use client";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle({
  className = "",
  isDark = false,
  isMounted = false,
  onToggle,
}) {
  const nextThemeLabel = isDark ? "light" : "dark";
  const label = isMounted
    ? `Switch to ${nextThemeLabel} mode`
    : "Toggle light or dark mode";

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`.trim()}
      aria-label={label}
      aria-pressed={isDark}
      data-theme-state={isDark ? "dark" : "light"}
      onClick={onToggle}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <svg
          className={styles.sun}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.75v2.1" />
          <path d="M12 19.15v2.1" />
          <path d="m4.92 4.92 1.48 1.48" />
          <path d="m17.6 17.6 1.48 1.48" />
          <path d="M2.75 12h2.1" />
          <path d="M19.15 12h2.1" />
          <path d="m4.92 19.08 1.48-1.48" />
          <path d="m17.6 6.4 1.48-1.48" />
        </svg>
        <svg
          className={styles.moon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M20.25 14.32A7.42 7.42 0 0 1 9.68 3.75 8.12 8.12 0 1 0 20.25 14.32Z" />
        </svg>
      </span>
    </button>
  );
}
