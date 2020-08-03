import { action, observable, decorate } from 'mobx';
import sessionService from '../services/session/sessionService';

class SessionStore {
  currentLogin//: GetCurrentLoginInformations = new GetCurrentLoginInformations();

  //@action
  async getCurrentLoginInformations() {
    let result = await sessionService.getCurrentLoginInformations();
    this.currentLogin = result;
  }
}
decorate(SessionStore, {
  currentLogin: observable,
  getCurrentLoginInformations: action
})
export default SessionStore;
