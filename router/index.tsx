import React, { FunctionComponent } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "screens/Start";
import AddCardScreen from "screens/AddCard";
import HomeScreen from "screens/Home";
import AddGoalScreen from "screens/AddGoal";
import CardScreen from "screens/Card";
import GoalScreen from "screens/Goal";
import TransactionsScreen from "screens/Transactions";
import ExpenseScreen from "screens/Expense";
import TransferScreen from "screens/Transfer";
import IncomeScreen from "screens/Income";

const Stack = createNativeStackNavigator();

const Router: FunctionComponent = () => {
  const StackScreenOptions: any = { headerShown: false, animation: "none", animationTypeForReplace: "push" };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} options={StackScreenOptions} />
        <Stack.Screen name="AddCard" component={AddCardScreen} options={StackScreenOptions} />
        <Stack.Screen name="Home" component={HomeScreen} options={StackScreenOptions} />
        <Stack.Screen name="AddGoal" component={AddGoalScreen} options={StackScreenOptions} />
        <Stack.Screen name="Card" component={CardScreen} options={StackScreenOptions} />
        <Stack.Screen name="Goal" component={GoalScreen} options={StackScreenOptions} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} options={StackScreenOptions} />
        <Stack.Screen name="Expense" component={ExpenseScreen} options={StackScreenOptions} />
        <Stack.Screen name="Transfer" component={TransferScreen} options={StackScreenOptions} />
        <Stack.Screen name="Income" component={IncomeScreen} options={StackScreenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
