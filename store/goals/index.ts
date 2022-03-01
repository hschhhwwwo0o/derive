import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import { makeAutoObservable } from "mobx";
import Database from "sql";

class _GoalsStore {
  goals: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM goals ORDER BY id DESC",
        [],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          this.goals = result.rows._array;
        }
      );
    });
  }
}

export default new _GoalsStore();
