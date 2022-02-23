import React, { FunctionComponent, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import AppConstants from "styles/constants";

interface ILabel {
  children: ReactNode;
}

const Label: FunctionComponent<ILabel> = ({ children }) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontFamily: AppConstants.FontExtra,
    fontSize: 18,
    color: "#F9F9F9",
  },
});

export default Label;
