import React, { PureComponent } from "react";
import { inject, observer } from "mobx-react";
//import Stores from "../../../../stores/storeIdentifier";

@inject('storeapp')
@observer
class QuanHuyen extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount = () => {
    console.log("QuanHuyen mounted");
  };

  componentDidUpdate = () => {
    console.log("QuanHuyen did update");
  };

  componentWillUnmount = () => {
    console.log("QuanHuyen will unmount");
  };

  render() {
    return (
      <div className="QuanHuyenWrapper">QuanHuyenWrapper
      PhongBanWrapper storeapp:{this.props.storeapp.name}
        <br />
      </div>);
  }
}

export default QuanHuyen;
