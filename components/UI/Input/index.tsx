import React, { FunctionComponent } from "react";
import { StyleSheet, TextInput } from "react-native";

interface IInput {
  placeholder: string;
  keyboardType?: "default" | "decimal-pad" | "number-pad";
}

const Input: FunctionComponent<IInput> = ({ placeholder = "Enter a value...", keyboardType = "default" }) => {
  return (
    <>
      <TextInput
        keyboardAppearance="dark"
        keyboardType={keyboardType}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#595968"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontFamily: "Lato-Bold",
    color: "#9393A2",
    paddingVertical: 18,
    paddingHorizontal: 18,
    backgroundColor: "#1E1E2D",
    borderRadius: 20,
  },
});

export default Input;
