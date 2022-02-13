import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import BackButton from "components/UI/BackButton";
import Logo from "components/UI/Logo";

interface ITopPanel {
  withBack?: boolean;
}

const WithoutBack: FunctionComponent = () => {
  return <Logo textAlign="center" />;
};

const WithBack: FunctionComponent = () => {
  return (
    <View style={styles.topPanel}>
      <BackButton />
      <Logo textAlign="center" />
      <View style={styles.empty} />
    </View>
  );
};

const TopPanel: FunctionComponent<ITopPanel> = ({ withBack = false }) => {
  return (
    <>
      {withBack === true && <WithBack />}
      {withBack === false && <WithoutBack />}
    </>
  );
};

const styles = StyleSheet.create({
  topPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  empty: { width: 42, height: 42 },
});

export default TopPanel;
