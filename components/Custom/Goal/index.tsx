import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";
import toPriceFormat from "libs/toPriceFormat";
import * as Animatable from "react-native-animatable";

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

  function navigateToGoal(): void {
    if (navigation) {
      navigation.push("Goal", {
        id,
      });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (currentAmount !== undefined && finalAmount !== undefined) {
        setProgress((currentAmount / finalAmount) * 100);
      }
    }, 100);
  }, [currentAmount, finalAmount]);

  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={navigateToGoal}>
      <View style={styles.block}></View>
      <View style={{ marginTop: -75 }}>
        <Animatable.View delay={50 * id} transition="width" style={{ overflow: "hidden", width: `${progress}%` }}>
          <LinearGradient
            colors={["#A8D2DF", "#CAD7A5"]}
            end={{ x: 0.9, y: 0.2 }}
            style={[styles.gradient, { width: `100%` }]}
          />
        </Animatable.View>
      </View>
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
