import React, { FunctionComponent } from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import router from "router";

const Stack = createNativeStackNavigator();

const Application: FunctionComponent = () => {
  const [loadedFonts]: [boolean, Error | null] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!loadedFonts) {
    return null;
  }

  const Theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: "#161622" } };

  const StackScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "fade_from_bottom",
    animationTypeForReplace: "push",
  };

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        {router.map(route => {
          return (
            <Stack.Screen key={route.name} name={route.name} component={route.component} options={StackScreenOptions} />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Application;
