import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";
import AppConstants from "styles/constants";

interface IInput {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder: string;
  keyboardType?: "default" | "decimal-pad" | "number-pad";
}

const Input: FunctionComponent<IInput> = ({
  placeholder = "Enter a value...",
  keyboardType = "default",
  state = "",
  setState = () => {},
}) => {
  return (
    <TextInput
      value={state}
      onChangeText={newText => setState(newText)}
      keyboardAppearance="dark"
      keyboardType={keyboardType}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#595968"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontFamily: AppConstants.FontBold,
    color: "#9393A2",
    paddingVertical: 18,
    paddingHorizontal: 18,
    backgroundColor: "#1E1E2D",
    borderRadius: 20,
  },
});

export default Input;
