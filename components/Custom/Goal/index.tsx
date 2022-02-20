import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";

interface IGoal {
  navigation: INavigation;
  name?: string;
  price?: number;
}

const Goal: FunctionComponent<IGoal> = ({ navigation, name, price }) => {
  function navigateToGoal() {
    navigation.push("Goal", {
      id: 1,
    });
  }

  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={navigateToGoal}>
      <View style={styles.block}></View>
      <LinearGradient
        colors={["#A8D2DF", "#CAD7A5"]}
        end={{ x: 0.9, y: 0.2 }}
        style={[styles.gradient, { width: "30%" }]}
      />
      <View style={styles.textBlock}>
        <View style={styles.textContent}>
          <Text style={styles.goalText}>{name}</Text>
          <Text style={styles.goalTextMin}>{price} ₽</Text>
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
