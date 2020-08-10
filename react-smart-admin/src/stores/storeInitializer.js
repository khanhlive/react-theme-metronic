import RoleStore from './roleStore';
import { observable, decorate } from 'mobx'
import TenantStore from './tenantStore';
import UserStore from './userStore';
import SessionStore from './sessionStore';
import AuthenticationStore from './authenticationStore';
import AccountStore from './accountStore';
class StoreMain {
  authenticationStore;
  roleStore;
  tenantStore;
  userStore;
  sessionStore;
  accountStore;
}
decorate(StoreMain, {
  authenticationStore: observable,
  roleStore: observable,
  tenantStore: observable,
  userStore: observable,
  sessionStore: observable,
  accountStore: observable
})
export default function initializeStores() {
  let _store = new StoreMain();
  _store.accountStore = new AccountStore();
  _store.authenticationStore = new AuthenticationStore();
  _store.roleStore = new RoleStore();
  _store.userStore = new UserStore();
  _store.sessionStore = new SessionStore();
  // return {
  //   authenticationStore: new AuthenticationStore(),
  //   roleStore: new RoleStore(),
  //   tenantStore: new TenantStore(),
  //   userStore: new UserStore(),
  //   sessionStore: new SessionStore(),
  //   accountStore: new AccountStore(),
  // };
  return _store;
}
