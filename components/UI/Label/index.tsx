import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";

const Label: FunctionComponent = ({ children }) => {
  return (
    <>
      <Text style={styles.label}>{children}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: "Lato-Black",
    fontSize: 18,
    color: "#F9F9F9",
  },
});

export default Label;
