import BigBlackPlus from "components/SVGs/BigBlackPlus";
import { LinearGradient } from "expo-linear-gradient";
import React, { FunctionComponent } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";

const ExpandButton: FunctionComponent = () => {
  return (
    <LinearGradient style={styles.expandButton} colors={["#CCF0FA", "#E5E5E5"]}>
      <BigBlackPlus />
      <Text style={styles.header}>Expand</Text>
      <Text style={styles.desc}>Add a transaction </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  expandButton: {
    height: Dimensions.get("window").width / 2 - 38,
    width: Dimensions.get("window").width / 2 - 38,
    borderRadius: 20,
    paddingLeft: 25,
    paddingTop: 26,
  },
  header: {
    fontFamily: "Lato-Black",
    marginTop: 18,
    fontSize: 16,
  },
  desc: {
    fontFamily: "Lato-Regular",
    marginTop: 8,
    fontSize: 10,
  },
});

export default ExpandButton;
