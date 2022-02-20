import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TheLayout from "layouts";
import AppConstants from "styles/constants";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Input from "components/UI/Input";
import EmptyCard from "components/Custom/EmptyCard";
import Card from "components/Custom/Card";

const TransferScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [sum, setSum] = useState<string>("");
  const [isOpenChooseCardScreen, setIsOpenChooseCardScreen] = useState<boolean>(false);

  function onChooseCardPressHandler() {
    setIsOpenChooseCardScreen(true);
  }

  return (
    <>
      <TheLayout>
        {isOpenChooseCardScreen ? (
          <>
            <TopPanel />
            <View style={styles.body}>
              <Label>Transfer amount to different card</Label>
              <View style={styles.headerInput}>
                <Card />
              </View>
            </View>
          </>
        ) : (
          <>
            <TopPanel withBack navigation={navigation} />
            <View style={styles.body}>
              <Label>Transfer amount to different card</Label>
              <View style={styles.headerInput}>
                <Input state={sum} setState={setSum} placeholder="Enter transfer sum..." keyboardType="decimal-pad" />
              </View>
              <View style={styles.transferBody}>
                <EmptyCard onPressHandler={onChooseCardPressHandler} />
                <TouchableOpacity onPress={onChooseCardPressHandler} activeOpacity={AppConstants.ActiveOpacity}>
                  <View style={styles.chooseCardButton}>
                    <Text style={styles.chooseCardButtonText}>Choose card</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 39,
    paddingBottom: 39,
  },
  headerInput: {
    marginTop: 23,
  },
  transferBody: {
    marginTop: 23,
  },
  chooseCardButton: {
    width: "100%",
    marginTop: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppConstants.BackgroundSecondColor,
    paddingVertical: 22,
    paddingHorizontal: 22,
    borderRadius: 20,
  },
  chooseCardButtonText: {
    color: "#DCDCDC",
    fontFamily: AppConstants.FontBold,
    fontSize: 14,
  },
});

export default TransferScreen;
