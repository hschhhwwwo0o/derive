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

const GoalScreen: FunctionComponent<IScreen> = ({ navigation, route }) => {
  const [goal, setGoal] = useState<IGoal>();
  const [amountToAdd, setAmountToAdd] = useState<string>("");
  const [amountToWithdraw, setAmountToWithdraw] = useState<string>("");

  useEffect(() => {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM goals WHERE id = ?",
        [route.params.id],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          setGoal(result.rows._array[0]);
        }
      );
    });
  }, [navigation]);

  function updateGoal() {
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

  return (
    <>
      <TheLayout>
        <TopPanel withBack navigation={navigation} />
        <View style={styles.body}>
          <Label>{goal?.name}</Label>
          <View style={styles.goalProgress}>
            <Goal currentAmount={goal?.currentAmount} finalAmount={goal?.finalAmount} name={goal?.name} />
          </View>
          <Text style={styles.goalDescription}>{goal?.description}</Text>
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
            <Button onPressHandler={updateGoal}>Save</Button>
          </View>
        </View>
      </TheLayout>
    </>
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
    fontFamily: "Lato-Regular",
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
});

export default GoalScreen;
