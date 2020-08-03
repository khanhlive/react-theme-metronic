import { observable, decorate } from 'mobx';

class LoginModel {
  tenancyName;//!: string;
  userNameOrEmailAddress;//!: string;
  password;//!: string;
  rememberMe;//!: boolean;
  showModal;//!: boolean;

  toggleRememberMe = () => {
    this.rememberMe = !this.rememberMe;
  };

  toggleShowModal = () => {
    this.showModal = !this.showModal;
  };
}

decorate(LoginModel, {
  rememberMe: observable,
  showModal: observable
})

export default LoginModel;
