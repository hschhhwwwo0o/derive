import Plus from "components/UI/Plus";
import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

const AddGoal: FunctionComponent = () => {
  return (
    <View style={styles.addGoal}>
      <Plus />
    </View>
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
