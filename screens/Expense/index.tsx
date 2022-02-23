import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import ExpenseType from "components/Custom/ExpenseType";

const ExpenseScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [sum, setSum] = useState<string>("");

  return (
    <>
      <TheLayout>
        <TopPanel withBack navigation={navigation} />
        <View style={styles.body}>
          <Label>Expense</Label>
          <View style={styles.headerInput}>
            <Input state={sum} setState={setSum} placeholder="Enter expense sum..." keyboardType="decimal-pad" />
          </View>
          <View style={styles.headerType}>
            <Label>Expense Type</Label>
            <View style={styles.bodyTypes}>
              <ExpenseType />
            </View>
          </View>
          <View style={styles.actionButton}>
            <Button variant="danger">Expense</Button>
          </View>
        </View>
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 39,
    paddingBottom: 39,
  },
  headerInput: {
    marginTop: 23,
  },
  headerType: {
    marginTop: 39,
  },
  bodyTypes: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    marginTop: 92,
  },
});

export default ExpenseScreen;
