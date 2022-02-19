import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppConstants from "styles/constants";
import Plus from "components/UI/Plus";

interface IAddGoal {
  navigation: INavigation;
}

const AddGoal: FunctionComponent<IAddGoal> = ({ navigation }) => {
  function onAddGoalPressHandler() {
    navigation.push("AddGoal");
  }

  return (
    <TouchableOpacity onPress={onAddGoalPressHandler} activeOpacity={AppConstants.ActiveOpacity}>
      <View style={styles.addGoal}>
        <Plus />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addGoal: {
    width: "100%",
    height: 55,
    backgroundColor: "#1E1E2D",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddGoal;
