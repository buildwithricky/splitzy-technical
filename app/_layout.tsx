import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={
      {headerShown: false,}
    }
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="SelectEventType" />
      <Stack.Screen name="Restaurants" />
      <Stack.Screen name="GroupBudget" />
      <Stack.Screen name="BookingCompleted" />
    </Stack>
  );
}
