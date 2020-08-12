import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import Stores from "../../stores/storeIdentifier";

@inject('storeapp', Stores.AccountStore, Stores.AuthenticationStore, Stores.SessionStore)
@observer
class PhongBan extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount = () => {
    console.log('PhongBan mounted');
  }

  render() {
    return (
      <div className="PhongBanWrapper">
        PhongBanWrapper
        <div>
          storeapp name: {this.props.storeapp.name}
          <br />
        </div>
      </div>
    );
  }
}

export default PhongBan;
