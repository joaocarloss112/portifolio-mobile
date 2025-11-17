import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#27b0c9ff" },
        headerTintColor: "#49b6b9ff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
  );
}
