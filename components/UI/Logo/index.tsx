import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";

interface ILogo {
  variant?: "default" | "big";
}

const DefaultLogo: FunctionComponent = () => {
  return (
    <>
      <Text style={styles.defaultLogo}>Dérive</Text>
    </>
  );
};

const BigLogo: FunctionComponent = () => {
  return (
    <>
      <Text style={styles.bigLogo}>Dérive</Text>
    </>
  );
};

const Logo: FunctionComponent<ILogo> = ({ variant = "default" }) => {
  return (
    <>
      {variant === "default" && <DefaultLogo />}
      {variant === "big" && <BigLogo />}
    </>
  );
};

const styles = StyleSheet.create({
  defaultLogo: {
    fontFamily: "Lato-Black",
    fontSize: 18,
    color: "#F9F9F9",
  },
  bigLogo: {
    fontFamily: "Lato-Black",
    fontSize: 36,
    color: "#F9F9F9",
  },
});

export default Logo;
