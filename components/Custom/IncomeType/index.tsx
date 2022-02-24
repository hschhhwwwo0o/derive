import React, { FunctionComponent } from "react";
import { Dimensions, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";

interface IIncomeType {
  onPressHandler: () => any;
  data: {
    id: number;
    image: any;
    title: string;
  };
}

const IncomeType: FunctionComponent<IIncomeType> = ({ onPressHandler = () => {}, data }) => {
  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={onPressHandler}>
      <LinearGradient style={styles.incomeType} colors={["#CCF0FA", "#E5E5E5"]}>
        <Image source={data.image} style={styles.image} />
        <Text style={styles.text}>{data.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
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

export default IncomeType;
