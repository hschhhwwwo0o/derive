import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import { makeAutoObservable } from "mobx";
import Database from "sql";

class _TransactionsStore {
  transactions: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM transactions ORDER BY id DESC LIMIT 5",
        [],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          this.transactions = result.rows._array;
        }
      );
    });
  }
}

export default new _TransactionsStore();
