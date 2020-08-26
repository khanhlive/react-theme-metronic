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
import PhongBanService from '../../../../services/danhmuc/phong-ban/PhongBanService';
import { JarvisWidget, WidgetGrid, Stats, BigBreadcrumbs } from '../../../../common';
import DataGridCustom from '../../../../common/tables/components/DataGridCustom';

const store: any = PhongBanService.GetAspNetDataSource();

@inject('storeapp', Stores.AccountStore, Stores.AuthenticationStore, Stores.SessionStore)
@observer
class PhongBan extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);

  }
  service: BenhvienClient = new BenhvienClient(AppConsts.remoteServiceBaseUrl, http);

  componentDidMount = () => {
    console.log("PhongBan mounted");
    // this.service.getPaging(0, 10).then((res) => {
    //   console.log(res);
    // });
    PhongBanService.getPaging(0, 10).then(res => {
      console.log(res);
    })
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

      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Danh mục", "Phòng ban"]}
            icon="fa fa-fw fa-table"

          />
          <Stats />
        </div>
        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12">
              <JarvisWidget id="wid-id-0" editbutton={false} color="darken" refresh={true}>
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-table" />
                  </span>
                  <h2>Standard Data Tables</h2>
                </header>
                <div>
                  <div className="widget-body no-padding">
                    <DataGridCustom
                      dataSource={store}
                      selectionMode="single"
                      onSelectionChanged={(e: any) => console.log(e)}
                    >
                      <Column
                        dataField="ma"
                        caption="Mã"
                        dataType="string"
                      />
                      <Column
                        dataField="ten"
                        caption="Tên"
                        dataType="string"
                      />
                      <Column
                        dataField="nhom"
                        caption="Nhóm"
                        dataType="string"
                      />
                      <Column
                        dataField="chuyenKhoaTen"
                        caption="Chuyên khoa"
                        dataType="string"
                      />
                      <Column
                        dataField="isTrongBenhVien"
                        caption="Trong bệnh viện"
                        dataType="boolean"
                        width={100}
                      />
                      <Column
                        dataField="diaChi"
                        caption="Địa chỉ"
                        dataType="string"
                      />
                    </DataGridCustom>
                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12">
              <JarvisWidget id="wid-id-0" editbutton={false} color="darken" refresh={true}>
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-table" />
                  </span>
                  <h2>Standard Data Tables</h2>
                </header>
                <div>
                  <div className="widget-body no-padding">
                    <DataGrid
                      dataSource={store}
                      showBorders={true}
                      remoteOperations={true}
                      rowAlternationEnabled={true}
                      showRowLines={true}
                      loadPanel={{ text: 'Đang tải...' }}
                      selection={
                        {
                          mode: 'multiple',
                          selectAllMode: 'page',
                          allowSelectAll: true,
                          showCheckBoxesMode: 'always'
                        }
                      }
                      onInitialized={(e) => {
                        e.element?.classList.add('dx-datagrid-smart');
                      }}
                      filterRow={{ visible: true }}
                      searchPanel={{ visible: true, width: 350, placeholder: 'Tìm kiếm...' }}
                    >
                      <Column
                        dataField="ma"
                        caption="Mã"
                        dataType="string"
                      />
                      <Column
                        dataField="ten"
                        caption="Tên"
                        dataType="string"
                      />
                      <Column
                        dataField="nhom"
                        caption="Nhóm"
                        dataType="string"
                      />
                      <Column
                        dataField="chuyenKhoaTen"
                        caption="Chuyên khoa"
                        dataType="string"
                      />
                      <Column
                        dataField="isTrongBenhVien"
                        caption="Trong bệnh viện"
                        dataType="boolean"
                      />
                      <Column
                        dataField="diaChi"
                        caption="Địa chỉ"
                        dataType="string"
                      />
                      <Paging defaultPageSize={10} />
                      <Pager
                        showPageSizeSelector={true}
                        showNavigationButtons={true}
                        allowedPageSizes={[5, 10, 25, 50, 100]}
                      />
                    </DataGrid>
                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
      </div>

    );
  }
}

export default PhongBan;
