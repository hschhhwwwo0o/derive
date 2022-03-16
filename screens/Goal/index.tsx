import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Database from "sql";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import Goal from "components/Custom/Goal";
import toPriceFormat from "libs/toPriceFormat";

const GoalScreen: FunctionComponent<IScreen> = ({ navigation, route }) => {
  const [goal, setGoal] = useState<IGoal>();
  const [left, setLeft] = useState<number>(0);
  const [amountToAdd, setAmountToAdd] = useState<string>("");
  const [amountToWithdraw, setAmountToWithdraw] = useState<string>("");

  useEffect(() => {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM goals WHERE id = ?",
        [route.params.id],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          setGoal(result.rows._array[0]);
          setLeft(result.rows._array[0].finalAmount - result.rows._array[0].currentAmount);
        }
      );
    });
  }, [navigation]);

  function onUpdateGoalPressHandler(): void {
    const currentAmount = goal?.currentAmount || 0;
    const newAmount = currentAmount + Number(amountToAdd) + -Number(amountToWithdraw);
    const completeAmount = newAmount >= 0 ? newAmount : 0;
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "UPDATE goals SET currentAmount = ? WHERE id = ?",
        [completeAmount, route.params.id],
        () => {
          navigation.push("Home");
        }
      );
    });
  }

  function onRemoveGoalPressHandler(): void {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql("DELETE FROM goals WHERE id = ?", [route.params.id], () => {
        navigation.push("Home");
      });
    });
  }

  return (
    <TheLayout>
      <TopPanel withBack navigation={navigation} backPathname="Home" />
      <View style={styles.body}>
        <Label>{goal?.name}</Label>
        <View style={styles.goalProgress}>
          <Goal type="B" currentAmount={goal?.currentAmount} finalAmount={goal?.finalAmount} name={goal?.name} />
        </View>
        <Text style={styles.goalDescription}>{goal?.description}</Text>
        <Text style={styles.left}>Left: {toPriceFormat(left)} ₽</Text>
        <View style={styles.action}>
          <Label>Add amount</Label>
          <View style={styles.actionInput}>
            <Input
              state={amountToAdd}
              setState={setAmountToAdd}
              keyboardType="decimal-pad"
              placeholder="Enter the amount to add..."
            />
          </View>
        </View>
        <View style={styles.action}>
          <Label>Withdraw the amount</Label>
          <View style={styles.actionInput}>
            <Input
              state={amountToWithdraw}
              setState={setAmountToWithdraw}
              keyboardType="decimal-pad"
              placeholder="Enter the amount to withdraw..."
            />
          </View>
        </View>
        <View style={styles.saveButton}>
          <Button onPressHandler={onUpdateGoalPressHandler}>Save</Button>
        </View>
        <View style={styles.removeButton}>
          <Button onPressHandler={onRemoveGoalPressHandler} variant="danger">
            Remove
          </Button>
        </View>
      </View>
    </TheLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 46,
    paddingBottom: 46,
  },
  goalProgress: {
    marginTop: 23,
  },
  progress: {
    height: 75,
    borderRadius: 20,
    marginTop: -75,
  },
  progressLine: {
    backgroundColor: "#1E1E2D",
    width: "100%",
    height: 75,
    borderRadius: 20,
  },
  goalDescription: {
    marginTop: 19,
    fontFamily: "Lato-Bold",
    color: "#F9F9F9",
    fontSize: 12,
  },
  left: {
    marginTop: 19,
    fontFamily: "Lato-Bold",
    color: "#F9F9F9",
    fontSize: 12,
  },
  action: {
    marginTop: 23,
  },
  actionInput: {
    marginTop: 23,
  },
  saveButton: {
    marginTop: 82,
  },
  removeButton: {
    marginTop: 12,
  },
});

export default GoalScreen;
