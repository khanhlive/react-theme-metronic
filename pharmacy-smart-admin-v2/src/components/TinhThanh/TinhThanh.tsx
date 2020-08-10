import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import AuthStore from '../../stores/AuthStore'

@inject("storeapp")
@observer
class TinhThanh extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
    };
  }

  componentWillMount = () => {
    console.log('TinhThanh will mount');
  }

  componentDidMount = () => {
    console.log('TinhThanh mounted');
  }

  componentDidUpdate = () => {
    console.log('TinhThanh did update');
  }

  componentWillUnmount = () => {
    console.log('TinhThanh will unmount');
  }
  changeName(): void {
    this.props.storeapp.changeName(this.state.name);
  }
  render() {
    return (
      <div className="TinhThanhWrapper">
        TinhThanhWrapper
        <div>
          storeapp name: {this.props.storeapp.name}
        </div>
        <div>
          <input type="text" onChange={(e) => this.setState({ name: e.target.value })}></input>
          <button type="button" onClick={this.changeName.bind(this)}>Change Name</button>
        </div>
      </div>
    );
  }
}

export default TinhThanh;
