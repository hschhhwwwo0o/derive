import React, { FunctionComponent } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import AndroidSafeArea from "styles/AndroidSafeArea";
import Layout from "styles/Layout";

interface ITheLayout {
  withHorizontalPaddings?: boolean;
}

const TheLayout: FunctionComponent<ITheLayout> = ({ children, withHorizontalPaddings = true }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={AndroidSafeArea.AndroidSafeArea}>
          <View style={withHorizontalPaddings ? Layout.Layout : Layout.LayoutWithoutHorizontalPaddings}>
            {children}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TheLayout;
