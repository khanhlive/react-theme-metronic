import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
//import Stores from "../../../../stores/storeIdentifier";
class TinhThanh extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  componentDidMount = () => {
    console.log("TinhThanh mounted");
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    console.log("TinhThanh will receive props", nextProps);
  };

  UNSAFE_componentWillUpdate = (nextProps, nextState) => {
    console.log("TinhThanh will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("TinhThanh did update");
  };

  componentWillUnmount = () => {
    console.log("TinhThanh will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <div className="TinhThanhWrapper">TinhThanhWrapper</div>;
  }
}
// const TinhThanh = inject(
//   Stores.AuthenticationStore,
//   Stores.SessionStore,
//   Stores.AccountStore
// )(
//   observer(

//   )
// );
// TinhThanh.propTypes = {
//   // bla: PropTypes.string,
// };

// TinhThanh.defaultProps = {
//   // bla: 'test',
// };

export default TinhThanh;
