import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Database from "sql";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import TheLayout from "layouts";
import AppConstants from "styles/constants";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Skin from "components/UI/Skin";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import PaymentSystem from "components/UI/PaymentSystem";

const EditCardScreen: FunctionComponent<IScreen> = ({ navigation, route }) => {
  const [activeSkin, setActiveSkin] = useState<number>(0);
  const [activePaymentSystem, setActivePaymentSystem] = useState<"Visa" | "Paypal">("Visa");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  function onUpdateCardHandler(): void {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql("", []);
    });
    navigation.push("Home");
  }

  function onRemoveCardHandler(): void {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql("", []);
    });
    navigation.push("Home");
  }

  useEffect(() => {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM cards WHERE id = ?",
        [route.params.id],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          setActiveSkin(Number(result.rows._array[0].colorId));
          setActivePaymentSystem(result.rows._array[0].paymentSystem);
          setCardNumber(String(result.rows._array[0].number));
          setEndDate(result.rows._array[0].endDate);
        }
      );
    });
  }, []);

  return (
    <TheLayout>
      <TopPanel navigation={navigation} withBack isGoBack />
      <View style={styles.body}>
        <Label>Edit skin</Label>
        <View style={styles.skins}>
          {AppConstants.CardSkins.map(skin => {
            return <Skin key={skin.id} setState={setActiveSkin} state={activeSkin} {...skin} />;
          })}
        </View>
        <View style={styles.mt}>
          <Label>Edit card info</Label>
          <View style={styles.cardInfoContent}>
            <Input
              state={cardNumber}
              setState={setCardNumber}
              keyboardType="decimal-pad"
              placeholder="Enter card number..."
            />
            <Input state={endDate} setState={setEndDate} keyboardType="decimal-pad" placeholder="Enter end date..." />
          </View>
        </View>
        <View style={styles.mt}>
          <Label>Edit payment system</Label>
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
          <Button variant="primary" onPressHandler={onUpdateCardHandler}>
            Save
          </Button>
        </View>
        <View style={styles.removeButton}>
          <Button variant="danger" onPressHandler={onRemoveCardHandler}>
            Remove
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
  },
  removeButton: {
    marginTop: 12,
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
    height: 143,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  paymentSystems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },
});

export default EditCardScreen;
