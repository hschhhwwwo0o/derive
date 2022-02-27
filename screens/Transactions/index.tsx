import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import TheLayout from "layouts";
import Database from "sql";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Transaction from "components/Custom/Transaction";

const TransactionsScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql("SELECT * FROM transactions", [], (transaction: SQLTransaction, result: SQLResultSet) => {
        setTransactions(result.rows._array);
      });
    });
  }, []);

  return (
    <TheLayout>
      <TopPanel withBack navigation={navigation} backPathname="Home" />
      <View style={styles.body}>
        <Label>All Transactions</Label>
        <View style={styles.data}>
          {transactions.map((transaction: ITransaction) => {
            return <Transaction key={transaction.id} data={transaction} />;
          })}
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
  data: {
    marginTop: 11,
  },
});

export default TransactionsScreen;
