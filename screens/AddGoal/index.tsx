import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import Database from "sql";
import { SQLTransaction } from "expo-sqlite";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Input from "components/UI/Input";
import MultilineInput from "components/UI/MultilineInput";
import Button from "components/UI/Button";

const AddGoalScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [goal, setGoal] = useState<string>("");
  const [goalFinalAmount, setGoalFinalAmount] = useState<string>("");
  const [goalDescription, setGoalDescription] = useState<string>("");

  function insertGoal(): void {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "INSERT INTO goals (name, description, finalAmount, currentAmount) VALUES (?, ?, ?, ?);",
        [goal, goalDescription, goalFinalAmount, 0],
        () => {
          navigation.push("Home");
        }
      );
    });
  }

  function validateData() {
    if (goal && goalFinalAmount) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <TheLayout>
      <TopPanel navigation={navigation} withBack backPathname="Home" />
      <View style={styles.body}>
        <Label>Create a Goal</Label>
        <View style={styles.finalAmount}>
          <Input
            state={goalFinalAmount}
            setState={setGoalFinalAmount}
            placeholder="Enter the final amount..."
            keyboardType="decimal-pad"
          />
        </View>
        <View style={styles.goalName}>
          <Input state={goal} setState={setGoal} placeholder="Enter goal name..." />
        </View>
        <View style={styles.goalDescription}>
          <MultilineInput
            state={goalDescription}
            setState={setGoalDescription}
            placeholder="Enter goal description..."
          />
        </View>
        <View style={styles.createButton}>
          <Button onPressHandler={insertGoal} isValidate={validateData()}>
            Create
          </Button>
        </View>
      </View>
    </TheLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 39,
  },
  goalName: {
    marginTop: 12,
  },
  goalDescription: {
    marginTop: 12,
  },
  finalAmount: {
    marginTop: 23,
  },
  createButton: {
    marginTop: 82,
  },
});

export default AddGoalScreen;
