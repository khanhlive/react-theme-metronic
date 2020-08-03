import { action, observable, decorate } from 'mobx';
import userService from '../services/user/userService';

class UserStore {
  users//!: PagedResultDto<GetUserOutput>;
  editUser//!: CreateOrUpdateUserInput;
  roles//: GetRoles[] = [];

  //@action
  async create(createUserInput) {
    let result = await userService.create(createUserInput);
    this.users.items.push(result);
  }

  //@action
  async update(updateUserInput) {
    let result = await userService.update(updateUserInput);
    this.users.items = this.users.items.map((x) => {
      if (x.id === updateUserInput.id) x = result;
      return x;
    });
  }

  //@action
  async delete(entityDto) {
    await userService.delete(entityDto);
    this.users.items = this.users.items.filter((x) => x.id !== entityDto.id);
  }

  //@action
  async getRoles() {
    let result = await userService.getRoles();
    this.roles = result;
  }

  //@action
  async get(entityDto) {
    let result = await userService.get(entityDto);
    this.editUser = result;
  }

  //@action
  async createUser() {
    this.editUser = {
      userName: '',
      name: '',
      surname: '',
      emailAddress: '',
      isActive: false,
      roleNames: [],
      password: '',
      id: 0,
    };
    this.roles = [];
  }

  //@action
  async getAll(pagedFilterAndSortedRequest) {
    let result = await userService.getAll(pagedFilterAndSortedRequest);
    this.users = result;
  }

  async changeLanguage(languageName) {
    await userService.changeLanguage({ languageName: languageName });
  }
}
decorate(UserStore, {
  changeLanguage: action,
  create: action,
  createUser: action,
  delete: action,
  editUser: observable,
  get: action,
  update: action,
  getAll: action,
  getRoles: action,
  roles: observable,
  users: observable
})
export default UserStore;
