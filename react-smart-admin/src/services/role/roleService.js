import http from '../httpService';

class RoleService {
   async create(createRoleInput){
    let result = await http.post('api/services/app/Role/Create', createRoleInput);
    return result.data.result;
  }

   async getRolesAsync(getRoleAsyncInput){
    let result = await http.get('api/services/app/Role/GetRolesAsync', { params: getRoleAsyncInput });
    return result.data.result;
  }

   async update(updateRoleInput){
    let result = await http.put('api/services/app/Role/Update', updateRoleInput);
    return result.data.result;
  }

   async delete(entityDto) {
    let result = await http.delete('api/services/app/Role/Delete', { params: entityDto });
    return result.data;
  }

   async getAllPermissions() {
    let result = await http.get('api/services/app/Role/GetAllPermissions');
    return result.data.result.items;
  }

   async getRoleForEdit(entityDto) {
    let result = await http.get('api/services/app/Role/GetRoleForEdit', { params: entityDto });
    return result.data.result;
  }

   async get(entityDto) {
    let result = await http.get('api/services/app/Role/Get', { params: entityDto });
    return result.data;
  }

   async getAll(pagedFilterAndSortedRequest){
    let result = await http.get('api/services/app/Role/GetAll', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
}

export default new RoleService();
