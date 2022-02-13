import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Label from "components/UI/Label";
import Logo from "components/UI/Logo";
import Skin from "components/UI/Skin";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import PaymentSystem from "components/UI/PaymentSystem";
import TheLayout from "layouts";

const Skins = [
  { colors: ["#FFDEC2", "#FACCD1", "#C7F0FC"], id: 0 },
  { colors: ["#F5BCE9", "#C7F0FC"], id: 1 },
  { colors: ["#CCF0FA", "#E6F5BC"], id: 2 },
  { colors: ["#FFDEC2", "#C7F0FC"], id: 3 },
  { colors: ["#C7F0FC", "#FACCD1", "#FFDEC2"], id: 4 },
];

const AddCardScreen: FunctionComponent<any> = ({ navigation }) => {
  const [activeSkin, setActiveSkin] = useState<number>(0);
  const [activePaymentSystem, setActivePaymentSystem] = useState<"visa" | "paypal">("visa");
  const [initialSum, setInitialSum] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  async function onCreateCardHandler() {
    navigation.push("Home");
  }

  return (
    <>
      <TheLayout>
        <Logo textAlign="center" />
        <View style={styles.body}>
          <Label>Choose skin</Label>
          <View style={styles.skins}>
            {Skins.map(skin => {
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
                state={cardNumber}
                setState={setCardNumber}
                keyboardType="decimal-pad"
                placeholder="Enter card number..."
              />
              <Input state={endDate} setState={setEndDate} keyboardType="decimal-pad" placeholder="Enter end date..." />
            </View>
          </View>
          <View style={styles.mt}>
            <Label>Payment System</Label>
            <View style={styles.paymentSystyms}>
              <PaymentSystem
                system="visa"
                isActive={activePaymentSystem === "visa"}
                onPress={() => setActivePaymentSystem("visa")}
              />
              <PaymentSystem
                system="paypal"
                isActive={activePaymentSystem === "paypal"}
                onPress={() => setActivePaymentSystem("paypal")}
              />
            </View>
          </View>
          <View style={styles.createButton}>
            <Button variant="primary" onPressHandler={onCreateCardHandler}>
              Create
            </Button>
          </View>
        </View>
      </TheLayout>
    </>
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
  paymentSystyms: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },
});

export default AddCardScreen;
