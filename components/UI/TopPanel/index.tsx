import React, { Fragment, FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import BackButton from "components/UI/BackButton";
import Logo from "components/UI/Logo";

interface ITopPanel {
  navigation?: INavigation;
  withBack?: boolean;
  backPathname?: string;
  backParams?: any;
  isGoBack?: boolean;
}

const WithoutBack: FunctionComponent = () => {
  return <Logo textAlign="center" />;
};

const WithBack: FunctionComponent<{
  navigation: INavigation | undefined;
  backPathname?: string;
  backParams?: any;
  isGoBack?: boolean;
}> = ({ navigation, backPathname, backParams, isGoBack }) => {
  function onPressBackHandler(): void {
    if (isGoBack) {
      navigation?.goBack();
    } else {
      if (backParams) {
        navigation?.push(String(backPathname), {
          ...backParams,
        });
      } else {
        navigation?.push(String(backPathname));
      }
    }
  }

  return (
    <View style={styles.topPanel}>
      <BackButton onPressHandler={onPressBackHandler} />
      <Logo textAlign="center" />
      <View style={styles.empty} />
    </View>
  );
};

const TopPanel: FunctionComponent<ITopPanel> = ({
  withBack = false,
  navigation,
  backPathname,
  backParams,
  isGoBack = false,
}) => {
  return (
    <Fragment>
      {withBack === true && (
        <WithBack navigation={navigation} backPathname={backPathname} backParams={backParams} isGoBack={isGoBack} />
      )}
      {withBack === false && <WithoutBack />}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  topPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  empty: {
    width: 42,
    height: 42,
  },
});

export default TopPanel;
