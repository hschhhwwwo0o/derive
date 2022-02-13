import { LinearGradient } from "expo-linear-gradient";
import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface IGoal {}

const Goal: FunctionComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.95}>
      <View style={styles.block}></View>
      <LinearGradient colors={["#A8D2DF", "#CAD7A5"]} style={[styles.gradient, { width: "10%" }]}></LinearGradient>
      <View style={styles.textBlock}>
        <View style={styles.textContent}>
          <Text style={styles.goalText}>For a gift</Text>
          <Text style={styles.goalTextMin}>100,000.00 ₽</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#1E1E2D",
    borderRadius: 20,
    height: 75,
    marginTop: 12,
  },
  textBlock: {
    borderRadius: 20,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -75,
  },
  gradient: { borderRadius: 20, height: 75, marginTop: -75 },
  textContent: {
    marginTop: -2,
  },
  goalText: {
    fontFamily: "Lato-Black",
    color: "white",
    textAlign: "center",
  },
  goalTextMin: {
    fontFamily: "Lato-Regular",
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
});

export default Goal;
