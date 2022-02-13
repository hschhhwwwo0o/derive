import { LinearGradient } from "expo-linear-gradient";
import React, { FunctionComponent } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";

const SpendButton: FunctionComponent = () => {
  return (
    <>
      <LinearGradient colors={["#FACCD2", "#FECDF4"]} end={{ x: 0.9, y: 0.2 }} style={styles.button}>
        <Text style={styles.text}>Spend</Text>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: (Dimensions.get("window").width / 2 - 38) / 2 - 7,
    width: Dimensions.get("window").width / 2 - 38,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Lato-Black",
    fontSize: 14,
  },
});

export default SpendButton;