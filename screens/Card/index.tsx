import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Card from "components/Custom/Card";
import Label from "components/UI/Label";
import ExpandButton from "components/Custom/ExpandButton";
import TransferButton from "components/Custom/TransferButton";
import SpendButton from "components/Custom/SpendButton";
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
              <ExpandButton />
              <View style={styles.rightButtons}>
                <TransferButton />
                <SpendButton />
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
