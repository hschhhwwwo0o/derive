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
        "CREATE TABLE IF NOT EXISTS goals (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT, description TEXT, finalAmount INT, currentAmount INT);"
      );
      transaction.executeSql(
        "SELECT * FROM goals ORDER BY id DESC",
        [],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          this.goals = result.rows._array;
        }
      );
    });
  }

  insert(goal: string, goalDescription: string, goalFinalAmount: string, callback: () => {}) {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "INSERT INTO goals (name, description, finalAmount, currentAmount) VALUES (?, ?, ?, ?);",
        [goal, goalDescription, goalFinalAmount, 0],
        () => {
          this.init();
          callback();
        }
      );
    });
  }
}

export default new _GoalsStore();
