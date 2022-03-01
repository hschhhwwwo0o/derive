import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import { makeAutoObservable } from "mobx";
import Database from "sql";

class _CardsStore {
  cards: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM cards ORDER BY id DESC",
        [],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          this.cards = result.rows._array;
        }
      );
    });
  }
}

export default new _CardsStore();
