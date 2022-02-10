import React, { FunctionComponent } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import AndroidSafeArea from "../../styles/AndroidSafeArea";
import Layout from "../../styles/Layout";
import Button from "../../components/UI/Button";
import Logo from "../../components/UI/Logo";

const StartScreen: FunctionComponent<any> = ({ navigation }) => {
  function onLetsStartPressHandler() {
    navigation.push("AddCard");
  }

  return (
    <>
      <StatusBar hidden={true} />
      <View style={AndroidSafeArea.AndroidSafeArea}>
        <View style={Layout.Layout}>
          <View style={styles.body}>
            <Logo textAlign="center" />
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
        </View>
      </View>
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
