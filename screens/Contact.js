import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { globals } from "../styles/globals";

export default function Contact() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingVertical: 24,
      }}
    >
      <View style={styles.mainCard}>
        <Text style={[globals.heading, styles.heading]}>
          NHIF Toll Free Line
        </Text>
        <Text style={[globals.text, styles.text]}>0800 720 601</Text>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.cards}>
          <Ionicons name="call-outline" size={48} color="#0284c7" />
          <Text style={[globals.textDark, styles.textDark]}>Call Us</Text>
        </View>

        <View style={styles.cards}>
          <Feather name="message-circle" size={48} color="#0284c7" />
          <Text style={[globals.textDark, styles.textDark]}>Text Us</Text>
        </View>

        <View style={styles.cards}>
          <Ionicons name="ios-send-outline" size={48} color="#0284c7" />
          <Text style={[globals.textDark, styles.textDark]}>Enquiry</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#f1f1f1",
  },
  mainCard: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#111827",
    color: "#ffffff",
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 16,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#10b581",
    color: "#ffffff",
    fontSize: 14,
    width: 100,
    borderRadius: 30,
    paddingVertical: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
  gridContainer: {
    marginVertical: 16,
    gap: 16,
  },
  cards: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
  },
  textDark: {
    color: "#111827",
    textAlign: "center",
  },
  blue: {
    color: "#0284c7",
  },
});
