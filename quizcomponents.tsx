import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";

// ✅ Define quiz questions for each emergency topic
const quizQuestions = {
  "self-defense": [
    { question: "What should you do first if someone grabs you?", options: ["Scream & run", "Stay silent"], answer: "Scream & run" },
  ],
  choking: [
    { question: "What is the first step when someone is choking?", options: ["Give water", "Perform Heimlich Maneuver"], answer: "Perform Heimlich Maneuver" },
  ],
  cardiac: [
    { question: "How many chest compressions should you give in CPR?", options: ["15", "30"], answer: "30" },
  ],
  bleeding: [
    { question: "What is the best way to stop heavy bleeding?", options: ["Apply pressure", "Use cold water"], answer: "Apply pressure" },
  ],
  burning: [
    { question: "How long should you cool a burn under running water?", options: ["5 minutes", "10 minutes"], answer: "10 minutes" },
  ],
  allergies: [
    { question: "What should you use for an anaphylactic reaction?", options: ["EpiPen", "Painkiller"], answer: "EpiPen" },
  ],
  drowning: [
    { question: "What should you do first when helping a drowning person?", options: ["Jump in to save them", "Call for help"], answer: "Call for help" },
  ],
};

export default function QuizComponent({ topicId }) {
  const navigation = useNavigation();
  const questions = quizQuestions[topicId] || quizQuestions["choking"]; // Default to choking if topic not found

  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleAnswer = (selected) => {
    if (selected === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert(`Quiz Finished! Score: ${score + 1}/${questions.length}`);
      navigation.goBack(); // Return to Lesson Screen after finishing quiz
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[questionIndex].question}</Text>
      {questions[questionIndex].options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => handleAnswer(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// ✅ Add styles
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  question: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  option: { backgroundColor: "#1E90FF", padding: 15, borderRadius: 10, marginVertical: 10, width: "80%", alignItems: "center" },
  optionText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});
