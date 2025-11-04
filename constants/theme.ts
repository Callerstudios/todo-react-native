// constants/theme.ts
export const lightTheme = {
  mode: "light",
  background: "#F9FAFB",
  text: "#111827",
  card: "#FFFFFF",
  border: "#E5E7EB",
  accent: "#6366F1",
};

export const darkTheme = {
  mode: "dark",
  background: "#0b1220",
  text: "#F9FAFB",
  card: "#0f1724",
  border: "#1f2937",
  accent: "#7c3aed",
};

export type Theme = typeof lightTheme;
