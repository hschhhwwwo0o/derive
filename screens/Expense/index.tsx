import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import TheLayout from "layouts";
import Database from "sql";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import returnConfigurationData from "libs/config";
import ExpenseType from "components/Custom/ExpenseType";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const ExpenseScreen: FunctionComponent<IScreen> = ({ navigation, route }) => {
  const [sum, setSum] = useState<string>("");
  const [expenseTypeID, setExpenseTypeID] = useState<number>(returnConfigurationData().ExpenseTypes[0].id);

  function onCreateTransactionPressHandler(): void {
    Database.transaction(async (transaction: SQLTransaction) => {
      await transaction.executeSql(
        "INSERT INTO transactions (cardId, amount, date, type, actionType) VALUES (?, ?, ?, ?, ?);",
        [route.params.cardId, sum, `${new Date().getTime()}`, expenseTypeID, "expense"]
      );
      await transaction.executeSql(
        "SELECT * FROM cards WHERE id = ?",
        [route.params.cardId],
        (t: SQLTransaction, result: SQLResultSet) => {
          transaction.executeSql(
            "UPDATE cards SET balance = ? WHERE id = ?",
            [Number(result.rows._array[0].balance) - Number(sum), route.params.cardId],
            () => {
              navigation.push("Card", {
                id: route.params.cardId,
              });
            }
          );
        }
      );
    });
  }

  function validateData(): boolean {
    if (sum) {
      return true;
    }
    return false;
  }

  return (
    <TheLayout>
      <TopPanel withBack navigation={navigation} backPathname="Card" backParams={{ id: route.params.cardId }} />
      <View style={styles.body}>
        <Label>Expense</Label>
        <View style={styles.headerInput}>
          <Input state={sum} setState={setSum} placeholder="Enter expense sum..." keyboardType="decimal-pad" />
        </View>
        <View style={styles.headerType}>
          <Label>Expense Type</Label>
          <View style={styles.bodyTypes}>
            {returnConfigurationData().ExpenseTypes.map(_expenseType => {
              return (
                <ExpenseType
                  isActive={_expenseType.id === expenseTypeID}
                  key={_expenseType.id}
                  data={_expenseType}
                  onPressHandler={() => {
                    setExpenseTypeID(_expenseType.id);
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.actionButton}>
          <Button variant="danger" onPressHandler={onCreateTransactionPressHandler} isValidate={validateData()}>
            Expense
          </Button>
        </View>
      </View>
    </TheLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 39,
    paddingBottom: 39,
  },
  headerInput: {
    marginTop: 15,
  },
  headerType: {
    marginTop: 25,
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
