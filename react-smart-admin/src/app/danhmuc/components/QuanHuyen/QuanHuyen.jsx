import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeInitializer";

const QuanHuyen = inject((stores) => ({
  ...stores,
}))(
  observer(
    class QuanHuyen extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          hasError: false,
        };
      }

      componentWillMount = () => {
        console.log("QuanHuyen will mount");
      };

      componentDidMount = () => {
        console.log("QuanHuyen mounted");
      };

      componentWillReceiveProps = (nextProps) => {
        console.log("QuanHuyen will receive props", nextProps);
      };

      componentWillUpdate = (nextProps, nextState) => {
        console.log("QuanHuyen will update", nextProps, nextState);
      };

      componentDidUpdate = () => {
        console.log("QuanHuyen did update");
      };

      componentWillUnmount = () => {
        console.log("QuanHuyen will unmount");
      };

      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
        return <div className="QuanHuyenWrapper">QuanHuyenWrapper</div>;
      }
    }
  )
);
QuanHuyen.propTypes = {
  // bla: PropTypes.string,
};

QuanHuyen.defaultProps = {
  // bla: 'test',
};

export default QuanHuyen;
