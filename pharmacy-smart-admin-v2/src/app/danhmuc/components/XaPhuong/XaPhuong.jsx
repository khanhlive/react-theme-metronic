import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
//import Stores from "../../../../stores/storeIdentifier";
class XaPhuong extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log("XaPhuong mounted");
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    console.log("XaPhuong will receive props", nextProps);
  };

  UNSAFE_componentWillUpdate = (nextProps, nextState) => {
    console.log("XaPhuong will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("XaPhuong did update");
  };

  componentWillUnmount = () => {
    console.log("XaPhuong will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <div className="XaPhuongWrapper">XaPhuongWrapper</div>;
  }
}
// const XaPhuong = inject(
//   Stores.AuthenticationStore,
//   Stores.SessionStore,
//   Stores.AccountStore
// )(
//   observer(

//   )
// );

// XaPhuong.propTypes = {
//   // bla: PropTypes.string,
// };

// XaPhuong.defaultProps = {
//   // bla: 'test',
// };

export default XaPhuong;
