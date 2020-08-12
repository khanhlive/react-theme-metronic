import RoleStore from "./roleStore";
import TenantStore from "./tenantStore";
import UserStore from "./userStore";
import SessionStore from "./sessionStore";
import AuthenticationStore from "./authenticationStore";
import AccountStore from "./accountStore";
import StoreApp from "./StoreApp";
import AuthStore from "./AuthStore";

export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    roleStore: new RoleStore(),
    tenantStore: new TenantStore(),
    userStore: new UserStore(),
    sessionStore: new SessionStore(),
    accountStore: new AccountStore(),
    storeapp: new AuthStore(),
  };
}
