import React, { FunctionComponent } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import AndroidSafeArea from "../styles/AndroidSafeArea";
import Layout from "../styles/Layout";

const TheLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={AndroidSafeArea.AndroidSafeArea}>
          <View style={Layout.Layout}>{children}</View>
        </View>
      </ScrollView>
    </>
  );
};

export default TheLayout;
