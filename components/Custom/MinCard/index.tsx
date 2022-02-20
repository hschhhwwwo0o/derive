import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";
import toPriceFormat from "libs/toPriceFormat";
import VisaSVG from "components/SVGs/Visa";
import PayPalSVG from "components/SVGs/PayPal";

interface IMinCard {
  navigation: INavigation;
  paymentSystem?: string;
  number?: string;
  id: number;
  balance: number;
  date: string;
  colorId: number;
}

const MinCard: FunctionComponent<IMinCard> = ({
  navigation,
  paymentSystem = "Visa",
  id = 0,
  number = "0000 0000 0000 0000",
  balance = 45000,
  date = "08/23",
  colorId = 0,
}) => {
  function navigateToCard() {
    navigation.push("Card", {
      id,
    });
  }

  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={navigateToCard}>
      <LinearGradient colors={AppConstants.CardSkins[colorId].colors} end={{ x: 0.9, y: 0.2 }} style={styles.minCard}>
        <View style={styles.paymentSystem}>{paymentSystem === "Visa" ? <VisaSVG /> : <PayPalSVG />}</View>
        <View>
          <Text style={styles.price}>{toPriceFormat(balance)} ₽</Text>
          <Text style={styles.typeBalance}>{paymentSystem} Balance</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>
            ****{" "}
            {number[number.length - 4] +
              number[number.length - 3] +
              number[number.length - 2] +
              number[number.length - 1]}
          </Text>
          <Text style={[styles.cardInfoText, styles.cardInfoDate]}>{date.replace(".", "/")}</Text>
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
  paymentSystem: {
    height: 20,
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
