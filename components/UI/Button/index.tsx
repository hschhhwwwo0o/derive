import React, { FunctionComponent, ReactNode } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";

interface IButton {
  children: ReactNode;
}

const DefaultButton: FunctionComponent<IButton> = ({ children }) => {
  return (
    <LinearGradient colors={["#CCF0FA", "#E2D1F0"]} end={{ x: 0.9, y: 0.2 }} style={styles.defaultButton}>
      <Text style={styles.text}>{children}</Text>
    </LinearGradient>
  );
};

const DangerButton: FunctionComponent<IButton> = ({ children }) => {
  return (
    <LinearGradient colors={["#FACCD2", "#FECDF4"]} end={{ x: 0.9, y: 0.2 }} style={styles.defaultButton}>
      <Text style={styles.text}>{children}</Text>
    </LinearGradient>
  );
};

const WarningButton: FunctionComponent<IButton> = ({ children }) => {
  return (
    <LinearGradient colors={["#FACCD2", "#FCD4CA"]} end={{ x: 0.9, y: 0.2 }} style={styles.defaultButton}>
      <Text style={styles.text}>{children}</Text>
    </LinearGradient>
  );
};

const PrimaryButton: FunctionComponent<IButton> = ({ children }) => {
  return (
    <LinearGradient colors={["#CCF0FA", "#E5E5E5"]} end={{ x: 0.9, y: 0.2 }} style={styles.defaultButton}>
      <Text style={styles.text}>{children}</Text>
    </LinearGradient>
  );
};

interface IMainButton extends IButton {
  variant?: "default" | "warning" | "danger" | "primary";
  onPressHandler?: () => void;
  isValidate?: boolean;
}

const Button: FunctionComponent<IMainButton> = ({
  children,
  variant = "default",
  onPressHandler = () => {},
  isValidate = true,
}) => {
  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={isValidate ? onPressHandler : () => {}}>
      <Animatable.View duration={2000} transition="opacity" style={isValidate ? styles.validate : styles.noValidate}>
        {variant === "default" && <DefaultButton>{children}</DefaultButton>}
        {variant === "danger" && <DangerButton>{children}</DangerButton>}
        {variant === "warning" && <WarningButton>{children}</WarningButton>}
        {variant === "primary" && <PrimaryButton>{children}</PrimaryButton>}
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    paddingVertical: 28,
    borderRadius: 20,
    shadowColor: "#eeeeee",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.78,
    elevation: 14,
  },
  text: {
    textAlign: "center",
    fontFamily: AppConstants.FontExtra,
  },
  validate: {
    opacity: 1,
  },
  noValidate: {
    opacity: 0.6,
  },
});

export default Button;
