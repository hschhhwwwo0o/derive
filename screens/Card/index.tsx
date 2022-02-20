import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Card from "components/Custom/Card";
import IncomeButton from "components/Custom/IncomeButton";
import TransferButton from "components/Custom/TransferButton";
import ExpenseButton from "components/Custom/ExpenseButton";
import Transaction from "components/Custom/Transaction";

const CardScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  return (
    <>
      <TheLayout>
        <TopPanel withBack navigation={navigation} />
        <View style={styles.body}>
          <Card />
          <View style={styles.block}>
            <Label>Actions</Label>
            <View style={styles.blockContent}>
              <IncomeButton navigation={navigation} />
              <View style={styles.rightButtons}>
                <TransferButton navigation={navigation} />
                <ExpenseButton navigation={navigation} />
              </View>
            </View>
          </View>
          <View style={styles.block}>
            <Label>Transactions</Label>
            <View style={styles.transactionsData}>
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
            </View>
          </View>
        </View>
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 46,
    paddingBottom: 46,
  },
  block: {
    marginTop: 43,
  },
  blockContent: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightButtons: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  transactionsData: {
    marginTop: 11,
  },
});

export default CardScreen;
