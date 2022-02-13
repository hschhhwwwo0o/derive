import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import AppConstants from "styles/constants";

interface ILogo {
  textAlign?: "center" | "left";
}

interface IMainLogo extends ILogo {
  variant?: "default" | "big";
}

const DefaultLogo: FunctionComponent<ILogo> = ({ textAlign = "left" }) => {
  return (
    <>
      <Text style={[styles.defaultLogo, { textAlign }]}>Dérive</Text>
    </>
  );
};

const BigLogo: FunctionComponent<ILogo> = ({ textAlign = "left" }) => {
  return (
    <>
      <Text style={[styles.bigLogo, { textAlign }]}>Dérive</Text>
    </>
  );
};

const Logo: FunctionComponent<IMainLogo> = ({ variant = "default", textAlign = "left" }) => {
  return (
    <>
      {variant === "default" && <DefaultLogo textAlign={textAlign} />}
      {variant === "big" && <BigLogo textAlign={textAlign} />}
    </>
  );
};

const styles = StyleSheet.create({
  defaultLogo: {
    fontFamily: AppConstants.FontExtra,
    fontSize: 18,
    color: "#F9F9F9",
  },
  bigLogo: {
    fontFamily: AppConstants.FontExtra,
    fontSize: 36,
    color: "#F9F9F9",
  },
});

export default Logo;
