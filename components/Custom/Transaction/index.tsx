import React, { FunctionComponent } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppConstants from "styles/constants";

interface ITransaction {
  date?: string;
  typeTransaction?: "Income" | "Expense" | "Transfer";
  image?: string;
  price?: number;
}

const Transaction: FunctionComponent<ITransaction> = ({
  typeTransaction = "Income",
  date = "12/02/2022",
  price = 2250,
}) => {
  return (
    <View style={styles.transaction}>
      <View style={styles.transactionInfo}>
        <View style={styles.transactionType}>
          <Image source={require("assets/payments-types/salary.png")} style={styles.transactionImage} />
        </View>
        <View style={styles.transactionInfoText}>
          <Text style={styles.transactionInfoHeader}>{typeTransaction}</Text>
          <Text style={styles.transactionInfoDate}>{date}</Text>
        </View>
      </View>
      <Text style={styles.transactionText}>+ {price} ₽ </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  transaction: {
    backgroundColor: "#1E1E2D",
    height: 75,
    width: "100%",
    paddingHorizontal: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 12,
  },
  transactionInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionInfoText: {
    marginTop: -3,
    marginLeft: 10,
  },
  transactionType: {
    borderRadius: 80,
    width: 47,
    height: 47,
    backgroundColor: "#161622",
    alignItems: "center",
    justifyContent: "center",
  },
  transactionInfoHeader: {
    fontFamily: AppConstants.FontExtra,
    color: "#E2E2E2",
  },
  transactionInfoDate: {
    fontFamily: AppConstants.FontRegular,
    fontSize: 11,
    color: "#9E9E9E",
    marginTop: 4,
  },
  transactionImage: {
    width: 24,
    height: 24,
  },
  transactionText: {
    fontFamily: AppConstants.FontExtra,
    color: "#E2E2E2",
  },
});

export default Transaction;
