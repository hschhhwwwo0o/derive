import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import AndroidSafeArea from "../../styles/AndroidSafeArea";
import Layout from "../../styles/Layout";

const AddCardScreen: FunctionComponent = () => {
  return (
    <>
      <View style={AndroidSafeArea.AndroidSafeArea}>
        <View style={Layout.Layout}>
          <View style={styles.body}></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {},
});

export default AddCardScreen;
