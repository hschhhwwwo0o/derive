import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";
import toPriceFormat from "libs/toPriceFormat";

interface IGoal {
  navigation?: INavigation;
  name?: string;
  finalAmount?: number;
  id?: number;
  currentAmount?: number;
  type?: "A" | "B";
}

const Goal: FunctionComponent<IGoal> = ({ navigation, name, finalAmount, currentAmount, id = 0, type = "A" }) => {
  const [progress, setProgress] = useState<number>(0);

  function navigateToGoal() {
    if (navigation) {
      navigation.push("Goal", {
        id,
      });
    }
  }

  useEffect(() => {
    if (currentAmount !== undefined && finalAmount !== undefined) {
      setProgress((currentAmount / finalAmount) * 100);
    }
  }, [currentAmount, finalAmount]);

  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={navigateToGoal}>
      <View style={styles.block}></View>
      <LinearGradient
        colors={["#A8D2DF", "#CAD7A5"]}
        end={{ x: 0.9, y: 0.2 }}
        style={[styles.gradient, { width: `${progress}%` }]}
      />
      <View style={styles.textBlock}>
        <View style={styles.textContent}>
          <Text style={styles.goalText}>{name}</Text>
          {type === "A" && <Text style={styles.goalTextMin}>{toPriceFormat(finalAmount || 0)} ₽</Text>}
          {type === "B" && (
            <Text style={styles.goalTextMin}>
              {toPriceFormat(currentAmount || 0)} / {toPriceFormat(finalAmount || 0)} ₽
            </Text>
          )}
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
