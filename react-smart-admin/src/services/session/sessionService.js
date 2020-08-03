import http from '../httpService';
var abp = window.abp;
class SessionService {
  async getCurrentLoginInformations() {
    let result = await http.get('api/services/app/Session/GetCurrentLoginInformations', {
      headers: {
        'Abp.TenantId': abp.multiTenancy.getTenantIdCookie(),
      },
    });

    return result.data.result;
  }
}

export default new SessionService();
