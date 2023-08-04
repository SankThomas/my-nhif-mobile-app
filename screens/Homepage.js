import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { globals } from "../styles/globals";

export default function Homepage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={[globals.textDark, styles.textDark, styles.notice]}>
        This App is UI only. Everything is hardcoded to mimic the behaviour of
        the App it is derived from: i.e The MyNHIF App.
      </Text>

      <View style={styles.mainCard}>
        <Text style={[globals.text, styles.text]}>Good Morning</Text>
        <Text style={[globals.heading, styles.heading]}>THOMAS SANKARA</Text>
        <Text style={[globals.button, styles.button]}>
          Payment is upto date
        </Text>
      </View>

      <View style={styles.gridContainer}>
        <Pressable
          style={styles.cards}
          onPress={() => navigation.navigate("Payment")}
        >
          <FontAwesome
            name="money"
            size={48}
            color="#0284c7"
            style={styles.icon}
          />
          <Text style={[globals.textDark, styles.textDark]}>
            Payment & Status
          </Text>
        </Pressable>

        <Pressable
          style={styles.cards}
          onPress={() => navigation.navigate("Dependants")}
        >
          <Ionicons
            name="md-people-outline"
            size={48}
            color="#0284c7"
            style={styles.icon}
          />
          <Text style={[globals.textDark, styles.textDark]}>Dependants</Text>
        </Pressable>

        <Pressable
          style={styles.cards}
          onPress={() => navigation.navigate("Contact")}
        >
          <AntDesign
            name="contacts"
            size={48}
            color="#0284c7"
            style={styles.icon}
          />
          <Text style={[globals.textDark, styles.textDark]}>Contact</Text>
        </Pressable>

        <Pressable
          style={styles.cards}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons
            name="person-outline"
            size={48}
            color="#0284c7"
            style={styles.icon}
          />
          <Text style={[globals.textDark, styles.textDark]}>Profile</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    padding: 24,
  },
  mainCard: {
    backgroundColor: "#111827",
    color: "#ffffff",
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 16,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 16,
    textAlign: "center",
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#10b581",
    color: "#ffffff",
    borderRadius: 30,
    padding: 10,
    textAlign: "center",
  },
  gridContainer: {
    marginVertical: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  cards: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    width: 140,
  },
  icon: {
    textAlign: "center",
    marginBottom: 16,
  },
  textDark: {
    color: "#111827",
    textAlign: "center",
  },
  notice: {
    marginBottom: 24,
    lineHeight: 24,
  },
});
