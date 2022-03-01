import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import Database from "sql";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import TheLayout from "layouts";
import returnConfigurationData from "libs/config";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import IncomeType from "components/Custom/IncomeType";

const IncomeScreen: FunctionComponent<IScreen> = ({ navigation, route }) => {
  const [sum, setSum] = useState<string>("");
  const [activeIncomeTypeID, setActiveIncomeTypeID] = useState<number>(returnConfigurationData().IncomeTypes[0].id);

  function createTransaction() {
    Database.transaction(async (transaction: SQLTransaction) => {
      await transaction.executeSql(
        "INSERT INTO transactions (cardId, amount, date, type, actionType) VALUES (?, ?, ?, ?, ?);",
        [route.params.cardId, sum, `${new Date().getTime()}`, activeIncomeTypeID, "income"]
      );
      await transaction.executeSql(
        "SELECT * FROM cards WHERE id = ?",
        [route.params.cardId],
        (t: SQLTransaction, result: SQLResultSet) => {
          transaction.executeSql(
            "UPDATE cards SET balance = ? WHERE id = ?",
            [Number(result.rows._array[0].balance) + Number(sum), route.params.cardId],
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

  function validateData() {
    if (sum) {
      return true;
    }
    return false;
  }

  return (
    <TheLayout>
      <TopPanel withBack navigation={navigation} backPathname="Card" backParams={{ id: route.params.cardId }} />
      <View style={styles.body}>
        <Label>Income</Label>
        <View style={styles.headerInput}>
          <Input state={sum} setState={setSum} placeholder="Enter income sum..." keyboardType="decimal-pad" />
        </View>
        <View style={styles.headerType}>
          <Label>Income Type</Label>
          <View style={styles.bodyTypes}>
            {returnConfigurationData().IncomeTypes.map(incomeType => {
              return (
                <IncomeType
                  key={incomeType.id}
                  data={incomeType}
                  isActive={incomeType.id === activeIncomeTypeID}
                  onPressHandler={() => {
                    setActiveIncomeTypeID(incomeType.id);
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.actionButton}>
          <Button onPressHandler={createTransaction} isValidate={validateData()}>
            Income
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

export default IncomeScreen;
