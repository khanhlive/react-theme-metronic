import http from "./httpService";
import { AxiosResponse, AxiosInstance } from "axios";
import * as AspNetData from "devextreme-aspnet-data-nojquery";
import AppConsts from "../lib/appconst";

export interface IServiceBase<Dto, CreateDto, UpdateDto> {
  /**
   * @param input (optional)
   * @return Success
   */
  create(input: CreateDto | null | undefined): Promise<Dto>;
  /**
   * @param input (optional)
   * @return Success
   */
  update(input: UpdateDto | null | undefined): Promise<Dto>;
  //   /**
  //    * @param request (optional)
  //    * @return Success
  //    */
  //   getKendo(request: any | null | undefined): Promise<DataSourceResult>;
  // /**
  //  * @param loadOptions (optional)
  //  * @return Success
  //  */
  // getDevextreme(
  //   loadOptions: DataSourceLoadOptions | null | undefined
  // ): Promise<LoadResult>;
  /**
   * @param skipCount (optional)
   * @param maxResultCount (optional)
   * @return Success
   */
  getPaging(
    skipCount: number | null | undefined,
    maxResultCount: number | null | undefined
  ): Promise<any>;
  /**
   * @param id (optional)
   * @return Success
   */
  get(id: number | null | undefined): Promise<Dto>;
  /**
   * @param id (optional)
   * @return Success
   */
  delete(id: number | null | undefined): Promise<void>;
}

interface IAbp_Actions {
  GetPaging?: string;
  Create?: string;
  Edit?: string;
  Delete?: string;
  Get?: string;
  GetJson?: string;
  Existed?: string;
  DevExtreme?: string;
}

export const Abp_Actions: IAbp_Actions = {
  GetPaging: "get-paging",
  Create: "create",
  Edit: "update",
  Delete: "delete",
  Get: "get",
  GetJson: "get-kendo",
  Existed: "existed",
  DevExtreme: "get-devextreme",
};

class ServiceBase<Dto, CreateDto, UpdateDto>
  implements IServiceBase<Dto, CreateDto, UpdateDto> {
  keyExpr?: string;
  baseUrl?: string = AppConsts.remoteServiceBaseUrl;
  protected httpBase: AxiosInstance = http;
  protected entityName?: string;
  constructor(keyExpr: string, entityName: string) {
    this.keyExpr = keyExpr;
    this.entityName = entityName;
  }
  public async getPaging(
    skipCount: number | null | undefined,
    maxResultCount: number | null | undefined
  ): Promise<any> {
    let res = await this.httpBase.get(
      `/api/services/app/${this.entityName}/${Abp_Actions.GetPaging}`,
      {
        params: { skipCount: skipCount, maxResultCount: maxResultCount },
      }
    );
    return this.processResponseData(res);
  }
  public async create(input: CreateDto | null | undefined): Promise<Dto> {
    let res = await this.httpBase.post(
      `/api/services/app/${this.entityName}/${Abp_Actions.Create}`,
      input
    );
    return this.processResponseData(res);
  }

  public async update(input: UpdateDto | null | undefined): Promise<Dto> {
    let res = await this.httpBase.put(
      `/api/services/app/${this.entityName}/${Abp_Actions.Edit}`,
      input
    );
    return this.processResponseData(res);
  }
  public async get(id: number | null | undefined): Promise<Dto> {
    let res = await this.httpBase.get(
      `/api/services/app/${this.entityName}/${Abp_Actions.Get}`,
      {
        params: { id: id },
      }
    );
    return this.processResponseData(res);
  }
  public async delete(id: number | null | undefined): Promise<void> {
    let res = await this.httpBase.get(
      `/api/services/app/${this.entityName}/${Abp_Actions.Delete}`,
      {
        params: { id: id },
      }
    );
    return this.processResponseData(res);
  }
  public GetAspNetDataSource(): any {
    return AspNetData.createStore({
      key: this.keyExpr,
      loadUrl: `${this.baseUrl}/api/services/app/${this.entityName}/${Abp_Actions.DevExtreme}`,
      loadMethod: "POST",
      onBeforeSend: function (method, ajaxOptions) {
        //callback(component, method, ajaxOptions);
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }

  protected processResponseData(res: AxiosResponse<any>) {
    return res.data.result;
  }
}
export default ServiceBase;
