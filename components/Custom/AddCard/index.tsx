import Plus from "components/UI/Plus";
import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface IAddCard {
  onPressHandler: () => any;
}

const AddCard: FunctionComponent<IAddCard> = ({ onPressHandler = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.95}>
      <View style={styles.addCard}>
        <Plus />
      </View>
    </TouchableOpacity>
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
