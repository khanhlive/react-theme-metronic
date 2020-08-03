import { action, observable, decorate } from 'mobx';

import accountService from '../services/account/accountService';

class AccountStore {
  tenant;

  isTenantAvailable = async (tenancyName) => {
    this.tenant = await accountService.isTenantAvailable({ tenancyName: tenancyName });
  };
}
decorate(AccountStore, {
  tenant: observable,
  isTenantAvailable: action
})
export default AccountStore;
