import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

// ✅ Define lessons with text + images
const lessonContent = {
  "self-defense": {
    title: "Self-Defense Techniques",
    image: require("../assets/self-defense.png"), // Replace with actual image
    content: "⚠️ Stay aware of your surroundings. If threatened, use loud verbal commands, attempt to escape, and use basic defensive moves like palm strikes.",
  },
  choking: {
    title: "Choking First Aid",
    image: require("../assets/choking.png"),
    content: "Perform the Heimlich maneuver by standing behind the person, wrapping your arms around their waist, and giving inward abdominal thrusts.",
  },
  cardiac: {
    title: "Cardiac Emergency: CPR",
    image: require("../assets/cardiac.png"),
    content: "Start CPR with 30 chest compressions followed by 2 rescue breaths. Repeat until medical help arrives.",
  },
  bleeding: {
    title: "Stopping Bleeding",
    image: require("../assets/bleeding.png"),
    content: "Apply direct pressure using a clean cloth or gauze. Elevate the wound above heart level if possible.",
  },
  burning: {
    title: "Burn Treatment",
    image: require("../assets/burning.png"),
    content: "Cool the burn under running water for at least 10 minutes. Avoid applying ice or butter.",
  },
  allergies: {
    title: "Handling Allergic Reactions",
    image: require("../assets/allergies.png"),
    content: "For anaphylaxis, use an EpiPen and seek immediate medical attention.",
  },
  drowning: {
    title: "Drowning Response",
    image: require("../assets/drowning.png"),
    content: "If someone is drowning, call for help and use a floatation device to pull them to safety.",
  },
};

export default function LessonScreen() {
  const { topicId } = useLocalSearchParams();
  const navigation = useNavigation();
  const lesson = lessonContent[topicId] || lessonContent["choking"]; // Default to choking lesson

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Image source={lesson.image} style={styles.image} />
      <Text style={styles.content}>{lesson.content}</Text>

      <TouchableOpacity
        style={styles.quizButton}
        onPress={() => {
            const topicKey = Array.isArray(topicId) ? topicId[0] : topicId;
            navigation.navigate("quizComponent", { topicId: topicKey });
          }}
          
      >
        <Text style={styles.quizButtonText}>Take the Quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// ✅ Add styles for layout
const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  image: { width: 250, height: 150, resizeMode: "contain", marginBottom: 15 },
  content: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  quizButton: { backgroundColor: "#1E90FF", padding: 15, borderRadius: 10, marginTop: 20 },
  quizButtonText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});
