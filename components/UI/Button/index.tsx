import React, { FunctionComponent, ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface IButton {
  children: ReactNode;
  onClickHandler?: () => void;
}

const DefaultButton: FunctionComponent<IButton> = ({ children, onClickHandler }) => {
  return (
    <>
      <LinearGradient colors={["#CCF0FA", "#E2D1F0"]} end={[0.1, -0.1]} style={styles.defaultButton}>
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </>
  );
};

const DangerButton: FunctionComponent<IButton> = ({ children, onClickHandler }) => {
  return (
    <>
      <LinearGradient colors={["#FACCD2", "#FECDF4"]} end={[0.1, -0.1]} style={styles.defaultButton}>
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </>
  );
};

const WarningButton: FunctionComponent<IButton> = ({ children, onClickHandler }) => {
  return (
    <>
      <LinearGradient colors={["#FACCD2", "#FCD4CA"]} end={[0.1, -0.1]} style={styles.defaultButton}>
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </>
  );
};

const PrimaryButton: FunctionComponent<IButton> = ({ children, onClickHandler }) => {
  return (
    <>
      <LinearGradient colors={["#CCF0FA", "#E5E5E5"]} end={[0.1, -0.1]} style={styles.defaultButton}>
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </>
  );
};

interface IMainButton extends IButton {
  variant?: "default" | "warning" | "danger" | "primary";
}

const Button: FunctionComponent<IMainButton> = ({ children, variant = "default", onClickHandler = () => {} }) => {
  return (
    <>
      {variant === "default" && <DefaultButton>{children}</DefaultButton>}
      {variant === "danger" && <DangerButton>{children}</DangerButton>}
      {variant === "warning" && <WarningButton>{children}</WarningButton>}
      {variant === "primary" && <PrimaryButton>{children}</PrimaryButton>}
    </>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    paddingVertical: 28,
    borderRadius: 20,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24.78,
    elevation: 22,
  },
  text: {
    textAlign: "center",
    fontFamily: "Lato-Black",
  },
});

export default Button;
