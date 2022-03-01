import { makeAutoObservable } from "mobx";

class _GoalsStore {
  goals = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new _GoalsStore();
