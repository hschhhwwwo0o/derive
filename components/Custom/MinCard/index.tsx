import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";
import toPriceFormat from "libs/toPriceFormat";
import VisaSVG from "components/SVGs/Visa";
import PayPalSVG from "components/SVGs/PayPal";

interface IMinCard {
  navigation: INavigation;
  paymentSystem?: "Visa" | "PayPal";
  balance: number;
  date: string;
}

const MinCard: FunctionComponent<IMinCard> = ({
  navigation,
  paymentSystem = "Visa",
  balance = 45000,
  date = "08/23",
}) => {
  function navigateToCard() {
    navigation.push("Card", {
      id: 1,
    });
  }

  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={navigateToCard}>
      <LinearGradient colors={["#CCF0FA", "#E5E5E5"]} end={{ x: 0.9, y: 0.2 }} style={styles.minCard}>
        {paymentSystem === "Visa" ? <VisaSVG /> : <PayPalSVG />}
        <View>
          <Text style={styles.price}>{toPriceFormat(balance)} ₽</Text>
          <Text style={styles.typeBalance}>{paymentSystem} Balance</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>**** 5454</Text>
          <Text style={[styles.cardInfoText, styles.cardInfoDate]}>{date}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  minCard: {
    height: 195,
    width: 161,
    borderRadius: 20,
    marginLeft: 12,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 32,
    paddingTop: 36,
    shadowColor: "#eeeeee",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.78,
    elevation: 14,
  },
  price: {
    fontFamily: AppConstants.FontExtra,
    fontSize: 16,
  },
  typeBalance: {
    fontSize: 11,
    marginTop: 7,
    fontFamily: AppConstants.FontRegular,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 11,
    fontFamily: AppConstants.FontRegular,
  },
  cardInfoText: {
    fontSize: 11,
  },
  cardInfoDate: {
    fontFamily: AppConstants.FontExtra,
  },
});

export default MinCard;
