import { makeAutoObservable } from "mobx";

class _TransactionsStore {
  transactions = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new _TransactionsStore();
