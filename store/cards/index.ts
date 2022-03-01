import { makeAutoObservable } from "mobx";

class _CardsStore {
  cards = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new _CardsStore();
