import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Card from "components/Custom/Card";

const CardScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  return (
    <>
      <TheLayout>
        <TopPanel withBack navigation={navigation} />
        <View style={styles.body}>
          <Card />
        </View>
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
