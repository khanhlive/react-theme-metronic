import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Test } from './PageFooterComponent.styles';

class PageFooterComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    console.log("PageFooterComponent will mount");
  };

  componentDidMount = () => {
    console.log("PageFooterComponent mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("PageFooterComponent will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("PageFooterComponent will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("PageFooterComponent did update");
  };

  componentWillUnmount = () => {
    console.log("PageFooterComponent will unmount");
  };

  render() {
    return (
      <div className="page-footer">
        <div className="page-footer-inner">2014 © Metronic by keenthemes.</div>
        <div className="scroll-to-top">
          <i className="icon-arrow-up" />
        </div>
      </div>
    );
  }
}

PageFooterComponent.propTypes = {
  // bla: PropTypes.string,
};

PageFooterComponent.defaultProps = {
  // bla: 'test',
};

export default PageFooterComponent;
