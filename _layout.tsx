import { Stack } from "expo-router";

export default function LearnLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="lessonscreen" />
      <Stack.Screen name="quizscreen" />
    </Stack>
  );
}
