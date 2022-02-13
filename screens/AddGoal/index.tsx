import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Input from "components/UI/Input";
import MultilineInput from "components/UI/MultilineInput";
import Button from "components/UI/Button";

const AddGoalScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [goal, setGoal] = useState<string>("");
  const [goalDescription, setGoalDescription] = useState<string>("");

  return (
    <>
      <TheLayout>
        <TopPanel navigation={navigation} withBack />
        <View style={styles.body}>
          <Label>Create a Goal</Label>
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
            <Button>Create</Button>
          </View>
        </View>
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 39,
  },
  goalName: {
    marginTop: 23,
  },
  goalDescription: {
    marginTop: 12,
  },
  createButton: {
    marginTop: 82,
  },
});

export default AddGoalScreen;
