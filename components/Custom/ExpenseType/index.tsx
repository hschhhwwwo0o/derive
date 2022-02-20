import React, { FunctionComponent } from "react";
import { Dimensions, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";
import expenseImages from "./images";

interface IExpenseType {
  onPressHandler: () => any;
}

const ExpenseType: FunctionComponent<IExpenseType> = ({ onPressHandler = () => {} }) => {
  return (
    <LinearGradient style={styles.incomeType} colors={["#FACCD2", "#FECDF4"]}>
      <Image source={expenseImages.Saving} style={styles.image} />
      <Text style={styles.text}>Saving</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  incomeType: {
    width: Dimensions.get("window").width / 2.8 - 38,
    height: Dimensions.get("window").width / 2.8 - 38,
    borderRadius: 20,
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: 8,
  },
  image: {
    width: Dimensions.get("window").width / 4 - 38,
    height: Dimensions.get("window").width / 4 - 38,
  },
  text: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: AppConstants.FontBold,
  },
});

export default ExpenseType;
