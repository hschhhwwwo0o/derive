import { makeAutoObservable } from "mobx";

class _TransactionsStore {
  transactions: ITransaction | [] = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new _TransactionsStore();
