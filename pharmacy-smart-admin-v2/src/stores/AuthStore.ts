import { observable, action } from "mobx";

export default class AuthStore {
  @observable name?: string;
  @action
  changeName(name: string) {
    this.name = name;
  }
}
