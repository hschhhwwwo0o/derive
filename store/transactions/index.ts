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

  income(cardId: string, sum: string, activeIncomeTypeID: string, callback: () => {}) {
    Database.transaction(async (transaction: SQLTransaction) => {
      await transaction.executeSql(
        "INSERT INTO transactions (cardId, amount, date, type, actionType) VALUES (?, ?, ?, ?, ?);",
        [sum, `${new Date().getTime()}`, activeIncomeTypeID, "income"]
      );
      await transaction.executeSql(
        "SELECT * FROM cards WHERE id = ?",
        [cardId],
        (t: SQLTransaction, result: SQLResultSet) => {
          transaction.executeSql(
            "UPDATE cards SET balance = ? WHERE id = ?",
            [Number(result.rows._array[0].balance) + Number(sum), cardId],
            () => {
              this.init();
              callback();
            }
          );
        }
      );
    });
  }

  expense(cardId: string, sum: string, activeExpenseTypeID: string, callback: () => {}) {
    Database.transaction(async (transaction: SQLTransaction) => {
      await transaction.executeSql(
        "INSERT INTO transactions (cardId, amount, date, type, actionType) VALUES (?, ?, ?, ?, ?);",
        [cardId, sum, `${new Date().getTime()}`, activeExpenseTypeID, "expense"]
      );
      await transaction.executeSql(
        "SELECT * FROM cards WHERE id = ?",
        [cardId],
        (t: SQLTransaction, result: SQLResultSet) => {
          transaction.executeSql(
            "UPDATE cards SET balance = ? WHERE id = ?",
            [Number(result.rows._array[0].balance) - Number(sum), cardId],
            () => {
              this.init();
              callback();
            }
          );
        }
      );
    });
  }

  transfer(cardId: string, sum: string, selectedCardId: string, callback: () => {}) {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql("SELECT * FROM cards WHERE id = ?", [cardId], (t, result: SQLResultSet) => {
        transaction.executeSql("UPDATE cards SET balance = ? WHERE id = ?", [
          result.rows._array[0].balance - Number(sum),
          cardId,
        ]);
      });
      transaction.executeSql(
        "SELECT * FROM cards WHERE id = ?",
        [Number(selectedCardId)],
        (t, result: SQLResultSet) => {
          transaction.executeSql(
            "UPDATE cards SET balance = ? WHERE id = ?",
            [result.rows._array[0].balance + Number(sum), Number(selectedCardId)],
            () => {
              this.init();
              callback();
            }
          );
        }
      );
    });
  }
}

export default new _TransactionsStore();
