import { makeAutoObservable } from "mobx";

class _GoalsStore {
  goals: IGoal | [] = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new _GoalsStore();
