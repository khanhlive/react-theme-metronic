import http from './httpService';

class AbpUserConfigurationService {
  async getAll() {
    const result = await http.get('/AbpUserConfiguration/GetAll');
    return result;
  }
}

export default new AbpUserConfigurationService();
