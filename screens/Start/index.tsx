import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Database from "sql";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import TheLayout from "layouts";
import AppConstants from "styles/constants";
import Button from "components/UI/Button";
import Logo from "components/UI/Logo";
import TopPanel from "components/UI/TopPanel";

const StartScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function onLetsStartPressHandler() {
    navigation.push("AddCard");
  }

  useEffect(() => {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, balance INT, paymentSystem TEXT, number TEXT, endDate TEXT, colorId INT);"
      );
      transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS goals (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT, description TEXT, finalAmount INT, currentAmount INT);"
      );
      transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, cardId INT, amount INT, date TEXT, type TEXT, actionType TEXT);"
      );
      transaction.executeSql("SELECT * FROM cards", [], (transaction: SQLTransaction, result: SQLResultSet) => {
        if (result.rows.length) {
          navigation.push("Home");
        } else {
          setIsLoading(false);
        }
      });
    });
  }, []);

  return (
    <>
      <TheLayout>
        {!isLoading && (
          <View style={styles.body}>
            <TopPanel />
            <View>
              <Logo variant="big" />
              <Text style={styles.bodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </Text>
              <View style={styles.bodyButton}>
                <Button onPressHandler={onLetsStartPressHandler}>Let’s start</Button>
              </View>
            </View>
            <View style={styles.footer} />
          </View>
        )}
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 43,
  },
  bodyText: {
    fontFamily: AppConstants.FontRegular,
    color: "#F9F9F9",
    marginTop: 13,
  },
  bodyButton: {
    marginTop: 60,
  },
  footer: {
    height: 40,
  },
});

export default StartScreen;
