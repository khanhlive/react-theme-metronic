import http from "./httpService";
import { AxiosResponse } from "axios";
import * as AspNetData from "devextreme-aspnet-data-nojquery";

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

class ServiceBase<Dto, CreateDto, UpdateDto>
  implements IServiceBase<Dto, CreateDto, UpdateDto> {
  keyExpr?: string;
  constructor() {}
  async getPaging(
    skipCount: number | null | undefined,
    maxResultCount: number | null | undefined
  ): Promise<any> {
    let res = await http.get("/api/services/app/benhvien/get-paging", {
      params: { skipCount: skipCount, maxResultCount: maxResultCount },
    });
    return this.processResponseData(res);
  }
  async create(input: CreateDto | null | undefined): Promise<Dto> {
    let res = await http.post("/api/services/app/benhvien/create", input);
    return this.processResponseData(res);
  }

  async update(input: UpdateDto | null | undefined): Promise<Dto> {
    let res = await http.put("/api/services/app/benhvien/update", input);
    return this.processResponseData(res);
  }
  async get(id: number | null | undefined): Promise<Dto> {
    let res = await http.get("/api/services/app/benhvien/get", {
      params: { id: id },
    });
    return this.processResponseData(res);
  }
  async delete(id: number | null | undefined): Promise<void> {
    let res = await http.get("/api/services/app/benhvien/delete", {
      params: { id: id },
    });
    return this.processResponseData(res);
  }
  public GetAspNetDataSource(): any {
    return AspNetData.createStore({
      key: this.keyExpr,
      loadUrl: `http://localhost:21021/api/services/app/benhvien/get-devextreme`,
      loadMethod: "POST",
      onBeforeSend: function (method, ajaxOptions) {
        //callback(component, method, ajaxOptions);
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }

  private processResponseData(res: AxiosResponse<any>) {
    return res.data.result;
  }
}
export default ServiceBase;
