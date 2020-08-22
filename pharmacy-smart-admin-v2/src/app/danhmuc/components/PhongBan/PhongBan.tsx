import React, { PureComponent } from "react";
import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeIdentifier";
import LoginModel from '../../../../models/Login/loginModel';
import { PagedTenantResultRequestDto } from '../../../../services/tenant/dto/PagedTenantResultRequestDto'
import { PagedResultDto } from '../../../../services/dto/pagedResultDto';
import { GetAllTenantOutput } from '../../../../services/tenant/dto/getAllTenantOutput';
import { BenhvienClient } from '../../../../services/nswag/axios-service';
import AppConsts from '../../../../lib/appconst';
import http from '../../../../services/httpService';
import BenhVienService from '../../../../services/danhmuc/benh-vien/BenhVienService';
import DataGrid, { Column, Paging, Pager } from 'devextreme-react/data-grid';

const store: any = BenhVienService.GetAspNetDataSource();

@inject('storeapp', Stores.AccountStore, Stores.AuthenticationStore, Stores.SessionStore)
@observer
class PhongBan extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);

  }
  service: BenhvienClient = new BenhvienClient(AppConsts.remoteServiceBaseUrl, http);

  componentWillMount = () => {
    console.log("PhongBan will mount");
    let model: PagedTenantResultRequestDto = {
      keyword: '',
      skipCount: 0,
      maxResultCount: 10
    }
  };

  componentDidMount = () => {
    console.log("PhongBan mounted");
    // this.service.getPaging(0, 10).then((res) => {
    //   console.log(res);
    // });
    // BenhVienService.getPaging(0, 10).then(res => {
    //   console.log(res);
    // })
  };

  componentDidUpdate = () => {
    console.log("PhongBan did update");
  };

  componentWillUnmount = () => {
    console.log("PhongBan will unmount");
  };

  onHandleChangeStore() {
    this.props.storeapp.changeName('khanhnd');
    let model = new LoginModel();
    model.userNameOrEmailAddress = 'khanhndsdsdds';
    this.props.authenticationStore.loginModel = model;

    // model = {
    //   userNameOrEmailAddress: "admin",
    //   password: "123qwe",
    //   rememberClient: true,
    // };
    // //this.props.storeapp.setModel(model == "khanhnd" ? "dungtt" : "khanhnd");
    // this.props.storeapp.login(model);
    // this.props.authStore.login(model);
  }

  render() {
    return (
      <div className="PhongBanWrapper">
        <h3>PhongBanWrapper</h3>
        <DataGrid
          dataSource={store}
          showBorders={true}
          remoteOperations={true}
        >
          <Column
            dataField="ma"
            dataType="string"
          />
          <Column
            dataField="ten"
            dataType="string"
          />
          <Column
            dataField="chuQuanMa"
            dataType="string"
          />
          <Column
            dataField="tuyen"
            dataType="string"
          />
          <Column
            dataField="hang"
            dataType="string"
          />
          <Column
            dataField="diaChi"
            dataType="string"
          />
          <Paging defaultPageSize={12} />
          <Pager
            showPageSizeSelector={true}
            allowedPageSizes={[8, 12, 20]}
          />
        </DataGrid>
      </div>
    );
  }
}

export default PhongBan;
