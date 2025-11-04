// ThemeContext.tsx
import React, { createContext, useContext } from "react";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

const ThemeContext = createContext<ReturnType<typeof useThemeSwitcher> | null>(
  null
);

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themeSwitcher = useThemeSwitcher();
  return (
    <ThemeContext.Provider value={themeSwitcher}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useThemeContext must be used inside ThemeProviderWrapper");
  return ctx;
};
