import { observable, decorate, action } from 'mobx'
import tokenAuthService from '../services/tokenAuth/tokenAuthService';
import AppConsts from './../lib/appconst';

class StoreApp {
    loginModel;
    setModel(_model) {
        this.loginModel = _model;
    }
    login(model) {
        this.loginModel = model;
        let result = tokenAuthService.authenticate({
            userNameOrEmailAddress: model.userNameOrEmailAddress,
            password: model.password,
            rememberClient: model.rememberMe,
        });

        var tokenExpireDate = model.rememberMe ? new Date(new Date().getTime() + 1000 * result.expireInSeconds) : undefined;
        window.abp.auth.setToken(result.accessToken, tokenExpireDate);
        window.abp.utils.setCookieValue(AppConsts.authorization.encrptedAuthTokenName, result.encryptedAccessToken, tokenExpireDate, window.abp.appPath);

    }
}
decorate(StoreApp, {
    loginModel: observable,
    setModel: action,
    login: action
})
export default new StoreApp();