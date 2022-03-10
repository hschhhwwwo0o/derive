import React, { Fragment, FunctionComponent, ReactNode } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import AndroidSafeArea from "styles/AndroidSafeArea";
import Layout from "styles/Layout";

interface ITheLayout {
  children: ReactNode;
  withHorizontalPaddings?: boolean;
}

const TheLayout: FunctionComponent<ITheLayout> = ({ children, withHorizontalPaddings = true }) => {
  return (
    <Fragment>
      <StatusBar hidden={true} />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={AndroidSafeArea.AndroidSafeArea}>
          <View style={withHorizontalPaddings ? Layout.Layout : Layout.LayoutWithoutHorizontalPaddings}>
            {children}
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default TheLayout;
