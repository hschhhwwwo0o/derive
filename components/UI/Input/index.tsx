import React, { Dispatch, Fragment, FunctionComponent, SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import AppConstants from "styles/constants";

interface IInput {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder: string;
  keyboardType?: "default" | "decimal-pad" | "number-pad";
  mask?: string;
  defaultValue?: string;
}

const Input: FunctionComponent<IInput> = ({
  placeholder = "Enter a value...",
  keyboardType = "default",
  state = "",
  setState = () => {},
  mask = "",
  defaultValue = "",
}) => {
  return (
    <Fragment>
      {!mask ? (
        <TextInput
          value={state}
          onChangeText={newText => setState(newText)}
          keyboardAppearance="dark"
          keyboardType={keyboardType}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#595968"
        />
      ) : (
        <MaskedTextInput
          mask={mask}
          defaultValue={defaultValue}
          value={state}
          onChangeText={newText => setState(newText)}
          keyboardAppearance="dark"
          keyboardType={keyboardType}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#595968"
        />
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontFamily: AppConstants.FontBold,
    color: "#9393A2",
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: "#1E1E2D",
    borderRadius: 14,
  },
});

export default Input;
