import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import BackButton from "components/UI/BackButton";
import Logo from "components/UI/Logo";

interface ITopPanel {
  navigation?: INavigation;
  withBack?: boolean;
}

const WithoutBack: FunctionComponent = () => {
  return <Logo textAlign="center" />;
};

const WithBack: FunctionComponent<{ navigation: INavigation | undefined }> = ({ navigation }) => {
  function onPressBackHandler() {
    navigation?.goBack();
  }

  return (
    <View style={styles.topPanel}>
      <BackButton onPressHandler={onPressBackHandler} />
      <Logo textAlign="center" />
      <View style={styles.empty} />
    </View>
  );
};

const TopPanel: FunctionComponent<ITopPanel> = ({ withBack = false, navigation }) => {
  return (
    <>
      {withBack === true && <WithBack navigation={navigation} />}
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
