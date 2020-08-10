import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';

@inject("storeapp")
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
        </div>
      </div>
    );
  }
}

export default PhongBan;
