import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppConstants from "styles/constants";

interface IEmptyCard {
  onPressHandler: () => any;
}

const EmptyCard: FunctionComponent<IEmptyCard> = ({ onPressHandler = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={AppConstants.ActiveOpacity}>
      <View style={styles.emptyCard} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emptyCard: {
    height: 195,
    width: "100%",
    borderRadius: 20,
    backgroundColor: AppConstants.BackgroundSecondColor,
  },
});

export default EmptyCard;
