import ServiceBase from "../../ServiceBase";

class BenhVienService extends ServiceBase<any, any, any> {
  constructor() {
    super();
    this.keyExpr = "id";
  }
}

export default new BenhVienService();
