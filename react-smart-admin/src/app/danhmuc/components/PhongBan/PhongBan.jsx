import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeInitializer";

const PhongBan = inject((stores) => ({
  ...stores,
}))(
  observer(
    class PhongBan extends PureComponent {
      constructor(props) {
        super(props);
debugger
        this.state = {
          hasError: false,
        };
      }

      componentWillMount = () => {
        console.log("PhongBan will mount");
      };

      componentDidMount = () => {
        console.log("PhongBan mounted");
      };

      componentWillReceiveProps = (nextProps) => {
        console.log("PhongBan will receive props", nextProps);
      };

      componentWillUpdate = (nextProps, nextState) => {
        console.log("PhongBan will update", nextProps, nextState);
      };

      componentDidUpdate = () => {
        console.log("PhongBan did update");
      };

      componentWillUnmount = () => {
        console.log("PhongBan will unmount");
      };

      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
        return <div className="PhongBanWrapper">PhongBanWrapper</div>;
      }
    }
  )
);

PhongBan.propTypes = {
  // bla: PropTypes.string,
};

PhongBan.defaultProps = {
  // bla: 'test',
};

export default PhongBan;
