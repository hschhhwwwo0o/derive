import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";

interface IMultilineInput {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const MultilineInput: FunctionComponent<IMultilineInput> = ({
  placeholder = "Enter a value...",
  state = "",
  setState = () => {},
}) => {
  return (
    <>
      <TextInput
        multiline={true}
        numberOfLines={6}
        value={state}
        onChangeText={newText => setState(newText)}
        keyboardAppearance="dark"
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#595968"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    textAlignVertical: "top",
    fontSize: 14,
    fontFamily: "Lato-Bold",
    color: "#9393A2",
    paddingVertical: 18,
    paddingHorizontal: 18,
    backgroundColor: "#1E1E2D",
    borderRadius: 20,
  },
});

export default MultilineInput;
