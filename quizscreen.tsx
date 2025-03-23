import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import QuizComponent from "../../components/QuizComponent"; // ✅ Import the reusable QuizComponent

export default function QuizScreen() {
  const { topicId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz on {topicId.replace("-", " ")}</Text>
      <QuizComponent topicId={topicId} />
    </View>
  );
}

// ✅ Add styles
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
