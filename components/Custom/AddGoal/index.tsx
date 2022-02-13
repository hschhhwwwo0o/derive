import Plus from "components/UI/Plus";
import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface IAddGoal {
  onPressHandler: () => any;
}

const AddGoal: FunctionComponent<IAddGoal> = ({ onPressHandler = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
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
