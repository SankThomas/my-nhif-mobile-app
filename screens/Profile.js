import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globals } from "../styles/globals";

export default function Profile() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingVertical: 24,
      }}
    >
      <View style={styles.mainCard}>
        <Text style={[globals.heading, styles.heading]}>THOMAS SANKARA</Text>
        <Text style={[globals.text, styles.text]}>Member No: 12345678</Text>
        <Text style={[globals.text, styles.text]}>National ID: 98765432</Text>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.cards}>
          <Text style={[globals.textDark, styles.textDark]}>
            Outpatient Facility
          </Text>
          <Text style={[globals.blue, styles.blue]}>
            KENYATTA NATIONAL HOSPITAL
          </Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.textDark, styles.textDark]}>Branch Name</Text>
          <Text style={[globals.blue, styles.blue]}>NAIROBI BRANCH</Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.textDark, styles.textDark]}>
            Last Contribution Period
          </Text>
          <Text style={[globals.blue, styles.blue]}>2023-08</Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.textDark, styles.textDark]}>
            Employment Status
          </Text>
          <Text style={[globals.blue, styles.blue]}>SELF-EMPLOYED</Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.textDark, styles.textDark]}>Phone Number</Text>
          <Text style={[globals.blue, styles.blue]}>0710123456</Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.textDark, styles.textDark]}>Email Address</Text>
          <Text style={[globals.blue, styles.blue]}>sankara@example.com</Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.textDark, styles.textDark]}>
            Martial Status
          </Text>
          <Text style={[globals.blue, styles.blue]}>Married</Text>
        </View>

        <View style={styles.cards}>
          <Text style={[globals.textDark, styles.textDark]}>Gender</Text>
          <Text style={[globals.blue, styles.blue]}>Male</Text>
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
    marginBottom: 10,
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
