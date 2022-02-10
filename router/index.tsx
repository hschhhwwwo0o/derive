import React, { FunctionComponent } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "../screens/Start";
import AddCardScreen from "../screens/AddCard";

const Stack = createNativeStackNavigator();

const Router: FunctionComponent = () => {
  const StackScreenOptions: any = { headerShown: false, animation: "none", animationTypeForReplace: "push" };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} options={StackScreenOptions} />
        <Stack.Screen name="AddCard" component={AddCardScreen} options={StackScreenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
