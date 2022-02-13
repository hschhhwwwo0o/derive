import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";

const CardScreen: FunctionComponent = () => {
  return (
    <>
      <TheLayout>
        <TopPanel />
        <View style={styles.body}></View>
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 46,
  },
});

export default CardScreen;
