import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  Entypo,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { globals } from "../styles/globals";

export default function Payment() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainCard}>
        <Text style={[globals.heading, styles.heading]}>Insurance status</Text>
        <Text style={[globals.button, styles.button]}>Active</Text>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.cards}>
          <View style={styles.icon}>
            <MaterialIcons name="attach-money" size={48} color="#0284c7" />
            <Text style={[globals.textDark, styles.textDark]}>
              Pay Contributions
            </Text>
          </View>
          <FontAwesome5 name="chevron-right" size={24} color="#fb7185" />
        </View>

        <View style={styles.cards}>
          <View style={styles.icon}>
            <Entypo name="dots-three-horizontal" size={48} color="#0284c7" />
            <Text style={[globals.textDark, styles.textDark]}>Pay Arrears</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={24} color="#fb7185" />
        </View>

        <View style={styles.cards}>
          <View style={styles.icon}>
            <AntDesign name="exclamation" size={48} color="#0284c7" />
            <Text style={[globals.textDark, styles.textDark]}>
              Pay Penalties
            </Text>
          </View>
          <FontAwesome5 name="chevron-right" size={24} color="#fb7185" />
        </View>

        <View style={styles.cards}>
          <View style={styles.icon}>
            <Ionicons name="briefcase-outline" size={48} color="#0284c7" />
            <Text style={[globals.textDark, styles.textDark]}>
              View Contribution History
            </Text>
          </View>
          <FontAwesome5 name="chevron-right" size={24} color="#fb7185" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f1f1f1",
  },
  mainCard: {
    flexDirection: "row",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  textDark: {
    color: "#111827",
    textAlign: "center",
  },
});
