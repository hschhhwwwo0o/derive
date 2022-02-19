import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import { LinearGradient } from "expo-linear-gradient";
import Label from "components/UI/Label";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const GoalScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  return (
    <>
      <TheLayout>
        <TopPanel withBack navigation={navigation} />
        <View style={styles.body}>
          <Label>For a Gift</Label>
          <View style={styles.goalProgress}>
            <View style={styles.progressLine} />
            <LinearGradient
              style={[styles.progress, { width: "30%" }]}
              colors={["#A8D2DF", "#CAD7A5"]}
              end={{ x: 0.9, y: 0.2 }}
            />
          </View>
          <Text style={styles.goalDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Text>
          <View style={styles.action}>
            <Label>Add amount</Label>
            <View style={styles.actionInput}>
              <Input />
            </View>
          </View>
          <View style={styles.action}>
            <Label>Withdraw the amount</Label>
            <View style={styles.actionInput}>
              <Input />
            </View>
          </View>
          <View style={styles.saveButton}>
            <Button>Save</Button>
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
