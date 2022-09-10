import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppConstants from "styles/constants";
import Plus from "components/SVGs/Plus";

interface IAddCard {
  navigation: INavigation;
}

const AddCard: FunctionComponent<IAddCard> = ({ navigation }) => {
  function onAddCardPressHandler(): void {
    navigation.push("AddCard");
  }

  return (
    <TouchableOpacity onPress={onAddCardPressHandler} activeOpacity={AppConstants.ActiveOpacity}>
      <View style={styles.addCard}>
        <Plus />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addCard: {
    height: 175,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F202F",
    borderRadius: 20,
  },
});

export default AddCard;
