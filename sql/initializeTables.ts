import { SQLTransaction } from "expo-sqlite";

function initializeTables(transaction: SQLTransaction) {
  transaction.executeSql(
    "CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, balance INT, paymentSystem TEXT, number TEXT, endDate TEXT, colorId INT);"
  );
  transaction.executeSql(
    "CREATE TABLE IF NOT EXISTS goals (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT, description TEXT, finalAmount INT, currentAmount INT);"
  );
  transaction.executeSql(
    "CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, cardId INT, amount INT, date TEXT, type TEXT, actionType TEXT);"
  );
}

export default initializeTables;
