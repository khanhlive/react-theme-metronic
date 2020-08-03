import http from '../httpService';

class UserService {
   async create(createUserInput) {
    let result = await http.post('api/services/app/User/Create', createUserInput);
    return result.data.result;
  }

   async update(updateUserInput) {
    let result = await http.put('api/services/app/User/Update', updateUserInput);
    return result.data;
  }

   async delete(entityDto) {
    let result = await http.delete('api/services/app/User/Delete', { params: entityDto });
    return result.data;
  }

   async getRoles() {
    let result = await http.get('api/services/app/User/GetRoles');
    return result.data.result.items;
  }

   async changeLanguage(changeLanguageInput) {
    let result = await http.post('api/services/app/User/ChangeLanguage', changeLanguageInput);
    return result.data;
  }

   async get(entityDto) {
    let result = await http.get('api/services/app/User/Get', { params: entityDto });
    return result.data.result;
  }

     async getAll(pagedFilterAndSortedRequest) {
    let result = await http.get('api/services/app/User/GetAll', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
}

export default new UserService();
