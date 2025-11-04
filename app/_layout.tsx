// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ThemeProvider } from "styled-components/native";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import { lightTheme, darkTheme } from "../constants/theme";
import { ActivityIndicator, View } from "react-native";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);

export default function RootLayout() {
  const { theme, ready } = useThemeSwitcher();
  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  if (!ready) {
    // prevent flicker while we load persisted theme
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider theme={selectedTheme || lightTheme}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </ConvexProvider>
  );
}
