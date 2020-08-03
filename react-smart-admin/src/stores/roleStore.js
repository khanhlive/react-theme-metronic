import { action, observable, decorate } from 'mobx';
import roleService from '../services/role/roleService';

class RoleStore {
  roles;//!: PagedResultDto<GetAllRoleOutput>;
  roleEdit;//: RoleEditModel = new RoleEditModel();
  allPermissions;//: GetAllPermissionsOutput[] = [];

  //@action
  async create(createRoleInput) {
    await roleService.create(createRoleInput);
  }

  //@action
  async createRole() {
    this.roleEdit = {
      grantedPermissionNames: [],
      role: {
        name: '',
        displayName: '',
        description: '',
        id: 0,
      },
      permissions: [{ name: '', displayName: '', description: '' }],
    };
  }

  //@action
  async getRolesAsync(getRoleAsyncInput) {
    await roleService.getRolesAsync(getRoleAsyncInput);
  }

  //@action
  async update(updateRoleInput) {
    await roleService.update(updateRoleInput);
    this.roles.items
      .filter((x) => x.id === updateRoleInput.id)
      .map((x) => {
        return (x = updateRoleInput);
      });
  }

  //@action
  async delete(entityDto) {
    await roleService.delete(entityDto);
    this.roles.items = this.roles.items.filter((x) => x.id !== entityDto.id);
  }

  //@action
  async getAllPermissions() {
    var result = await roleService.getAllPermissions();
    this.allPermissions = result;
  }

  //@action
  async getRoleForEdit(entityDto) {
    let result = await roleService.getRoleForEdit(entityDto);
    this.roleEdit.grantedPermissionNames = result.grantedPermissionNames;
    this.roleEdit.permissions = result.permissions;
    this.roleEdit.role = result.role;
  }

  //@action
  async get(entityDto) {
    var result = await roleService.get(entityDto);
    this.roles = result.data.result;
  }

  //@action
  async getAll(pagedFilterAndSortedRequest) {
    let result = await roleService.getAll(pagedFilterAndSortedRequest);
    this.roles = result;
  }
}
decorate(RoleStore, {
  roles: observable,
  roleEdit: observable,
  allPermissions: observable,
  create: action,
  createRole: action,
  getRolesAsync: action,
  update: action,
  delete: action,
  get: action,
  getAll: action,
  getAllPermissions: action,
  getRoleForEdit: action
})
export default RoleStore;
