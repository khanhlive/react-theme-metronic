import { action, observable, decorate } from 'mobx';
import tenantService from '../services/tenant/tenantService';

class TenantStore {
  tenants//!: PagedResultDto<GetAllTenantOutput>;
  tenantModel//: TenantModel = new TenantModel();

  //@action
  async create(createTenantInput) {
    await tenantService.create(createTenantInput);
  }

  //@action
  async createTenant() {
    this.tenantModel = {
      id: 0,
      isActive: true,
      name: '',
      tenancyName: '',
    };
  }

  //@action
  async update(updateTenantInput) {
    let result = await tenantService.update(updateTenantInput);

    this.tenants.items = this.tenants.items.map((x) => {
      if (x.id === updateTenantInput.id) x = result;
      return x;
    });
  }

  //@action
  async delete(entityDto) {
    await tenantService.delete(entityDto);
    this.tenants.items = this.tenants.items.filter((x) => x.id !== entityDto.id);
  }

  //@action
  async get(entityDto) {
    let result = await tenantService.get(entityDto);
    this.tenantModel = result;
  }

  //@action
  async getAll(pagedFilterAndSortedRequest) {
    let result = await tenantService.getAll(pagedFilterAndSortedRequest);
    this.tenants = result;
  }
}
decorate(TenantStore, {
  create: action,
  getAll: action,
  get: action,
  delete: action,
  createTenant: action,
  tenantModel: observable,
  tenants: observable,
  update: action
})
export default TenantStore;
