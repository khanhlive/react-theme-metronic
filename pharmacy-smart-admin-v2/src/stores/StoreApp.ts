import { observable, action } from "mobx";
//import tokenAuthService from "../services/tokenAuth/tokenAuthService";
//import AppConsts from "./../lib/appconst";

class StoreApp {
  constructor() {
    this.items = [];
    this.name = "";
  }
  @observable name?: string;
  @observable items?: any[];
  @action
  setModel(name: string) {
    debugger;
    this.name = name;
  }
  @action
  add(item: any) {
    this.items = this.items ? this.items : [];
    this.items.push(item);
  }
}
export default StoreApp;
