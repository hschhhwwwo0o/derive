import BigBlackPlus from "components/SVGs/BigBlackPlus";
import { LinearGradient } from "expo-linear-gradient";
import React, { FunctionComponent } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import AppConstants from "styles/constants";

const IncomeButton: FunctionComponent = () => {
  return (
    <LinearGradient style={styles.expandButton} colors={["#CCF0FA", "#E5E5E5"]}>
      <BigBlackPlus />
      <Text style={styles.header}>Income</Text>
      <Text style={styles.desc}>Add a transaction</Text>
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
    fontFamily: AppConstants.FontExtra,
    marginTop: 18,
    fontSize: 16,
  },
  desc: {
    fontFamily: AppConstants.FontRegular,
    marginTop: 8,
    fontSize: 10,
  },
});

export default IncomeButton;
