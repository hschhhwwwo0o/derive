import React, { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import AppConstants from "styles/constants";

interface ISkin {
  id: number;
  state: number;
  colors: string[];
  setState: any;
}

const Skin: FunctionComponent<ISkin> = ({ id, state, colors = [], setState = () => {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstants.ActiveOpacity}
      onPress={() => {
        setState(id);
      }}
    >
      <Animatable.View transition="opacity" style={state === id ? {} : { opacity: 0.7 }}>
        <LinearGradient style={[styles.skin, state === id && styles.withShadow]} colors={colors}></LinearGradient>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skin: {
    height: 195,
    backgroundColor: "green",
    width: Dimensions.get("window").width / 5 - 21,
    borderRadius: 20,
  },
  withShadow: {
    opacity: 1,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24.78,
    elevation: 22,
  },
});

export default Skin;
