import { LinearGradient } from "expo-linear-gradient";
import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppConstants from "styles/constants";

interface IGoal {
  navigation: INavigation;
}

const Goal: FunctionComponent<IGoal> = ({ navigation }) => {
  function navigateToGoal() {
    navigation.push("Goal", {
      id: 1,
    });
  }

  return (
    <TouchableOpacity activeOpacity={0.95} onPress={navigateToGoal}>
      <View style={styles.block}></View>
      <LinearGradient
        colors={["#A8D2DF", "#CAD7A5"]}
        end={{ x: 0.9, y: 0.2 }}
        style={[styles.gradient, { width: "30%" }]}
      />
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
  gradient: {
    borderRadius: 20,
    height: 75,
    marginTop: -75,
  },
  textContent: {
    marginTop: -2,
  },
  goalText: {
    fontFamily: AppConstants.FontExtra,
    color: "white",
    textAlign: "center",
  },
  goalTextMin: {
    fontFamily: AppConstants.FontRegular,
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
});

export default Goal;
