import http from '../httpService';

class TenantService {
   async create(createTenantInput) {
    let result = await http.post('api/services/app/Tenant/Create', createTenantInput);
    return result.data.result;
  }

   async delete(entityDto) {
    let result = await http.delete('api/services/app/Tenant/Delete', { params: entityDto });
    return result.data;
  }

   async get(entityDto) {
    let result = await http.get('api/services/app/Tenant/Get', { params: entityDto });
    return result.data.result;
  }

   async getAll(pagedFilterAndSortedRequest) {
    let result = await http.get('api/services/app/Tenant/GetAll', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }

   async update(updateTenantInput) {
    let result = await http.put('api/services/app/Tenant/Update', updateTenantInput);
    return result.data.result;
  }
}

export default new TenantService();
