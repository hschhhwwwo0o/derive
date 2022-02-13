import Plus from "components/UI/Plus";
import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

interface IAddCard {}

const AddCard: FunctionComponent = () => {
  return (
    <>
      <View style={styles.addCard}>
        <Plus />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  addCard: {
    height: 195,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F202F",
    borderRadius: 20,
  },
});

export default AddCard;
