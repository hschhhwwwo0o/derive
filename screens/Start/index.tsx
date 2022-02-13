import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "components/UI/Button";
import Logo from "components/UI/Logo";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";

const StartScreen: FunctionComponent<any> = ({ navigation }) => {
  function onLetsStartPressHandler() {
    navigation.push("AddCard");
  }

  return (
    <>
      <TheLayout>
        <View style={styles.body}>
          <TopPanel />
          <View>
            <Logo variant="big" />
            <Text style={styles.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </Text>
            <View style={styles.bodyButton}>
              <Button onPressHandler={onLetsStartPressHandler}>Let’s start</Button>
            </View>
          </View>
          <View style={styles.footer} />
        </View>
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 43,
  },
  bodyText: {
    fontFamily: "Lato-Regular",
    color: "#F9F9F9",
    marginTop: 13,
  },
  bodyButton: {
    marginTop: 60,
  },
  footer: {
    height: 40,
  },
});

export default StartScreen;
