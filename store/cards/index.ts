import { makeAutoObservable } from "mobx";

class _CardsStore {
  cards: ICard | [] = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new _CardsStore();
