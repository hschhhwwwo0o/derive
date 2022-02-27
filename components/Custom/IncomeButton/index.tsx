import React, { FunctionComponent } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";
import BigBlackPlus from "components/SVGs/BigBlackPlus";

interface IIncomeButton {
  navigation: INavigation;
  route: IRoute;
}

const IncomeButton: FunctionComponent<IIncomeButton> = ({ navigation, route }) => {
  function onPressHandler(): void {
    navigation.push("Income", {
      cardId: route.params.id,
    });
  }

  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={AppConstants.ActiveOpacity}>
      <LinearGradient style={[styles.expandButton, styles.shadow]} colors={["#CCF0FA", "#E5E5E5"]}>
        <BigBlackPlus />
        <Text style={styles.header}>Income</Text>
        <Text style={styles.desc}>Add a transaction</Text>
      </LinearGradient>
    </TouchableOpacity>
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
  shadow: {
    shadowColor: "#D6EBF1",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12.78,
    elevation: 12,
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
