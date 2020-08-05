import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeIdentifier";

const TinhThanh = inject(Stores.AuthenticationStore,Stores.SessionStore, Stores.AccountStore)(
  observer(
    class TinhThanh extends PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          hasError: false,
        };
      }

      componentWillMount = () => {
        console.log("TinhThanh will mount");
      };

      componentDidMount = () => {
        console.log("TinhThanh mounted");
      };

      componentWillReceiveProps = (nextProps) => {
        console.log("TinhThanh will receive props", nextProps);
      };

      componentWillUpdate = (nextProps, nextState) => {
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
  )
);
TinhThanh.propTypes = {
  // bla: PropTypes.string,
};

TinhThanh.defaultProps = {
  // bla: 'test',
};

export default TinhThanh;
