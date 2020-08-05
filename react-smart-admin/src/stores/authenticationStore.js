import { action, observable, decorate } from 'mobx';

import AppConsts from './../lib/appconst';
import LoginModel from '../models/Login/loginModel';
import tokenAuthService from '../services/tokenAuth/tokenAuthService';
var abp = window.abp;
class AuthenticationStore {
  loginModel

  isAuthenticated() {
    if (!abp.session.userId) return false;

    return true;
  }

  //@action
  async login(model) {
    this.loginModel = model;
    let result = await tokenAuthService.authenticate({
      userNameOrEmailAddress: model.userNameOrEmailAddress,
      password: model.password,
      rememberClient: model.rememberMe,
    });
    debugger
    var tokenExpireDate = model.rememberMe ? new Date(new Date().getTime() + 1000 * result.expireInSeconds) : undefined;
    abp.auth.setToken(result.accessToken, tokenExpireDate);
    abp.utils.setCookieValue(AppConsts.authorization.encrptedAuthTokenName, result.encryptedAccessToken, tokenExpireDate, abp.appPath);
  }

  //@action
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    abp.auth.clearToken();
  }
}
decorate(AuthenticationStore, {
  loginModel: observable,
  isAuthenticated: action,
  login: action,
  logout: action
})

export default AuthenticationStore;
