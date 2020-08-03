import { IsTenantAvaibleInput } from './dto/isTenantAvailableInput';
import { RegisterInput } from './dto/registerInput';
import IsTenantAvaibleOutput from './dto/isTenantAvailableOutput';
import { RegisterOutput } from './dto/registerOutput';
import http from '../httpService';

class AccountService {
  async isTenantAvailable(isTenantAvaibleInput) {
    let result = await http.post('api/services/app/Account/IsTenantAvailable', isTenantAvaibleInput);
    return result.data.result;
  }

  async register(registerInput) {
    let result = await http.post('api/services/app/Account/Register', registerInput);
    return result.data.result;
  }
}

export default new AccountService();
