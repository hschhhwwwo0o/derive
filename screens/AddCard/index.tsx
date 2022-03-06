import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import Database from "sql";
import { SQLTransaction } from "expo-sqlite";
import TheLayout from "layouts";
import AppConstants from "styles/constants";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Skin from "components/UI/Skin";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import PaymentSystem from "components/UI/PaymentSystem";

const AddCardScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [activePaymentSystem, setActivePaymentSystem] = useState<"Visa" | "Paypal">("Visa");
  const [activeSkin, setActiveSkin] = useState<number>(0);
  const [initialSum, setInitialSum] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  function onCreateCardHandler(): void {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "INSERT INTO cards (balance, paymentSystem, number, endDate, colorId) VALUES (?, ?, ?, ?, ?);",
        [initialSum, activePaymentSystem, cardNumber, endDate, activeSkin]
      );
    });
    navigation.push("Home");
  }

  function validateData(): boolean {
    if (initialSum !== "" && cardNumber.length === 19 && endDate.length === 10) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <TheLayout>
      <TopPanel navigation={navigation} withBack isGoBack />
      <View style={styles.body}>
        <Label>Choose skin</Label>
        <View style={styles.skins}>
          {AppConstants.CardSkins.map(skin => {
            return <Skin key={skin.id} setState={setActiveSkin} state={activeSkin} {...skin} />;
          })}
        </View>
        <View style={styles.mt}>
          <Label>Card info</Label>
          <View style={styles.cardInfoContent}>
            <Input
              state={initialSum}
              setState={setInitialSum}
              keyboardType="decimal-pad"
              placeholder="Enter initial sum..."
            />
            <Input
              mask="9999 9999 9999 9999"
              state={cardNumber}
              setState={setCardNumber}
              keyboardType="decimal-pad"
              placeholder="Enter card number..."
            />
            <Input
              mask="99/99/9999"
              state={endDate}
              setState={setEndDate}
              keyboardType="decimal-pad"
              placeholder="Enter end date..."
            />
          </View>
        </View>
        <View style={styles.mt}>
          <Label>Payment System</Label>
          <View style={styles.paymentSystems}>
            <PaymentSystem
              system="visa"
              isActive={activePaymentSystem === "Visa"}
              onPress={() => setActivePaymentSystem("Visa")}
            />
            <PaymentSystem
              system="paypal"
              isActive={activePaymentSystem === "Paypal"}
              onPress={() => setActivePaymentSystem("Paypal")}
            />
          </View>
        </View>
        <View style={styles.createButton}>
          <Button variant="primary" onPressHandler={onCreateCardHandler} isValidate={validateData()}>
            Create
          </Button>
        </View>
      </View>
    </TheLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 46,
  },
  mt: {
    marginTop: 42,
  },
  createButton: {
    marginTop: 82,
    paddingBottom: 43,
  },
  skins: {
    marginTop: 23,
    height: 195,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardInfoContent: {
    marginTop: 23,
    height: 215,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  paymentSystems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },
});

export default AddCardScreen;
