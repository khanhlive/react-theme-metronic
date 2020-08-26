import ServiceBase from "../../ServiceBase";

class PhongBanService extends ServiceBase<any, any, any> {
  constructor() {
    super("id", "phongban");
  }

  public async GetCustomData(): Promise<any> {
    let res = await this.httpBase.get("");
    return this.processResponseData(res);
  }
}

export default new PhongBanService();
