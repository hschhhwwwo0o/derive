import React, { FunctionComponent } from "react";
import { Dimensions, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";

interface IIncomeType {
  onPressHandler: () => any;
  isActive: boolean;
  data: {
    id: number;
    image: any;
    title: string;
  };
}

const IncomeType: FunctionComponent<IIncomeType> = ({ onPressHandler = () => {}, data, isActive = false }) => {
  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={onPressHandler}>
      <LinearGradient
        style={[styles.incomeType, { opacity: isActive ? 1 : 0.85 }, isActive ? styles.shadow : {}]}
        colors={["#CCF0FA", "#E5E5E5"]}
      >
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
  shadow: {
    shadowColor: "#eeeeee",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.78,
    elevation: 14,
  },
});

export default IncomeType;
