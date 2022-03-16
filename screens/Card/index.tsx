import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Database from "sql";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import AppConstants from "styles/constants";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Card from "components/Custom/Card";
import IncomeButton from "components/Custom/IncomeButton";
import TransferButton from "components/Custom/TransferButton";
import ExpenseButton from "components/Custom/ExpenseButton";
import Transaction from "components/Custom/Transaction";

const CardScreen: FunctionComponent<IScreen> = ({ navigation, route }) => {
  const [card, setCard] = useState<ICard>();
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [cardsLength, setCardsLength] = useState<number>(0);

  function onGoToChangeCardInformationHandler(): void {
    navigation.push("EditCard", {
      id: route.params.id,
    });
  }

  useEffect(() => {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM cards WHERE id = ?",
        [route.params.id],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          setCard(result.rows._array[0]);
        }
      );
    });
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM transactions WHERE cardId = ? ORDER BY id DESC",
        [route.params.id],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          setTransactions(result.rows._array);
        }
      );
    });
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql("SELECT * FROM cards WHERE 1", [], (transaction: SQLTransaction, result: SQLResultSet) => {
        setCardsLength(result.rows._array.length);
      });
    });
  }, []);

  return (
    <TheLayout>
      <TopPanel withBack navigation={navigation} backPathname={"Home"} />
      <View style={styles.body}>
        <Card
          number={card?.number}
          colorId={card?.colorId}
          balance={card?.balance}
          paymentSystem={card?.paymentSystem}
          date={card?.endDate}
        />
        <TouchableOpacity onPress={onGoToChangeCardInformationHandler} activeOpacity={AppConstants.ActiveOpacity}>
          <Text style={styles.goChange}>Change a card information</Text>
        </TouchableOpacity>
        <View style={styles.block}>
          <Label>Actions</Label>
          <View style={styles.blockContent}>
            <IncomeButton navigation={navigation} route={route} />
            <View style={styles.rightButtons}>
              <TransferButton navigation={navigation} route={route} isActive={cardsLength > 1} />
              <ExpenseButton navigation={navigation} route={route} />
            </View>
          </View>
        </View>
        {Boolean(transactions.length) && (
          <View style={styles.block}>
            <Label>Transactions</Label>
            <View style={styles.transactionsData}>
              {transactions.map((transaction: ITransaction) => {
                return <Transaction navigation={navigation} key={transaction.id} data={transaction} />;
              })}
            </View>
          </View>
        )}
      </View>
    </TheLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 46,
    paddingBottom: 46,
  },
  block: {
    marginTop: 28,
  },
  blockContent: {
    marginTop: 23,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightButtons: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  transactionsData: {
    marginTop: 11,
  },
  goChange: {
    fontFamily: AppConstants.FontBold,
    textAlign: "center",
    fontSize: 12,
    color: "#F9F9F9",
    marginTop: 28,
  },
});

export default CardScreen;
