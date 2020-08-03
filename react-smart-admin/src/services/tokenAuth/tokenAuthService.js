import http from '../httpService';

class TokenAuthService {
  async authenticate(authenticationInput) {
    let result = await http.post('api/TokenAuth/Authenticate', authenticationInput);
    return result.data.result;
  }
}

export default new TokenAuthService();
