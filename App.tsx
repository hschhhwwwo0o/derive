import React, { Fragment, FunctionComponent } from "react";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppConstants from "styles/constants";

/** Navigation */
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import router from "router";

const Application: FunctionComponent = () => {
  /** Load fonts */
  const [loadedFonts]: [boolean, Error | null] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  /** Configure application theme */
  const backgroundColor: string = AppConstants.BackgroundColor;
  const AppTheme: typeof DefaultTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: backgroundColor },
  };

  /** Configure application navigation */
  const Stack = createNativeStackNavigator();
  const StackScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "fade",
    animationTypeForReplace: "push",
  };

  /** Render */
  if (!loadedFonts) return null;
  return (
    <Fragment>
      <StatusBar backgroundColor={backgroundColor} style="light" />
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator>
          {router.map(route => {
            return (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
                options={StackScreenOptions}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

export default Application;
