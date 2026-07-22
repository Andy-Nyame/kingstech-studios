"use client";

import { useCallback, useSyncExternalStore } from "react";

export const THEME_STORAGE_KEY = "kingstech-theme";

function normalizeTheme(theme) {
  return theme === "dark" ? "dark" : "light";
}

export function applyTheme(theme) {
  const normalizedTheme = normalizeTheme(theme);

  document.documentElement.dataset.theme = normalizedTheme;
  document.documentElement.style.colorScheme = normalizedTheme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, normalizedTheme);
  } catch {
    // Keep the visual theme working even if storage is unavailable.
  }
  window.dispatchEvent(
    new CustomEvent("kingstech-theme-change", {
      detail: normalizedTheme,
    }),
  );
}

function getThemeSnapshot() {
  if (typeof document === "undefined") {
    return "light";
  }

  return normalizeTheme(document.documentElement.dataset.theme);
}

function subscribeToThemeChanges(onStoreChange) {
  function handleStorageChange(event) {
    if (event.key === THEME_STORAGE_KEY) {
      document.documentElement.dataset.theme = normalizeTheme(event.newValue);
      document.documentElement.style.colorScheme = normalizeTheme(event.newValue);
      onStoreChange();
    }
  }

  window.addEventListener("kingstech-theme-change", onStoreChange);
  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener("kingstech-theme-change", onStoreChange);
    window.removeEventListener("storage", handleStorageChange);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeSnapshot,
    () => "light",
  );

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
  }, [theme]);

  return {
    theme,
    isDark: theme === "dark",
    isMounted: true,
    toggleTheme,
  };
}
