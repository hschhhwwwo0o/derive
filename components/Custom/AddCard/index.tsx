import Plus from "components/UI/Plus";
import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppConstants from "styles/constants";

interface IAddCard {
  navigation: INavigation;
}

const AddCard: FunctionComponent<IAddCard> = ({ navigation }) => {
  function onAddCardPressHandler() {
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
    height: 195,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F202F",
    borderRadius: 20,
  },
});

export default AddCard;
