import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globals } from "../styles/globals";

export default function Dependants() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingVertical: 24,
      }}
    >
      <View style={styles.mainCard}>
        <Text style={[globals.heading, styles.heading]}>Your Dependants</Text>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.cards}>
          <Text style={[globals.heading2, styles.heading2]}>Janeth Doe</Text>
          <Text style={styles.textDark}>Wife</Text>
          <Text style={[globals.blue, styles.blue]}>Age: 34</Text>
          <Text style={[globals.button, styles.button]}>Covered</Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.heading2, styles.heading2]}>Drake Bell</Text>
          <Text style={[globals.textDark, styles.textDark]}>Son</Text>
          <Text style={[globals.blue, styles.blue]}>Age: 14</Text>
          <Text style={[globals.button, styles.button]}>Covered</Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.heading2, styles.heading2]}>
            Vernal Equinox
          </Text>
          <Text style={[globals.textDark, styles.textDark]}>Daughter</Text>
          <Text style={[globals.blue, styles.blue]}>Age: 10</Text>
          <Text style={[globals.button, styles.button]}>Covered</Text>
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
    marginBottom: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  heading2: {
    color: "#111827",
    fontSize: 20,
    textAlign: "center",
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
