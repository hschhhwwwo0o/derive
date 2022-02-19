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
        {[
          { name: "Start", component: StartScreen },
          { name: "AddCard", component: AddCardScreen },
          { name: "Home", component: HomeScreen },
          { name: "AddGoal", component: AddGoalScreen },
          { name: "Card", component: CardScreen },
          { name: "Goal", component: GoalScreen },
          { name: "Transactions", component: TransactionsScreen },
          { name: "Expense", component: ExpenseScreen },
          { name: "Transfer", component: TransferScreen },
          { name: "Income", component: IncomeScreen },
        ].map(route => {
          return (
            <Stack.Screen key={route.name} name={route.name} component={route.component} options={StackScreenOptions} />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
