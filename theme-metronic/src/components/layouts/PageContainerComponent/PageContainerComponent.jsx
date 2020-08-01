import React, { Component } from "react";
import PropTypes from "prop-types";
import PageSidebarComponent from "../PageSidebarComponent/PageSidebarComponent";
import PageContentComponent from '../PageContentComponent/PageContentComponent';
import PageQuickSidebarComponent from '../PageQuickSidebarComponent/PageQuickSidebarComponent';
//import { Test } from './PageContainerComponent.styles';

class PageContainerComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    console.log("PageContainerComponent will mount");
  };

  componentDidMount = () => {
    console.log("PageContainerComponent mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("PageContainerComponent will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("PageContainerComponent will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("PageContainerComponent did update");
  };

  componentWillUnmount = () => {
    console.log("PageContainerComponent will unmount");
  };

  render() {
    return (
      <div className="page-container">
        {/* BEGIN SIDEBAR */}
        <PageSidebarComponent></PageSidebarComponent>
        {/* END SIDEBAR */}
        {/* BEGIN CONTENT */}
        <PageContentComponent></PageContentComponent>
        {/* END CONTENT */}
        {/* BEGIN QUICK SIDEBAR */}
        <PageQuickSidebarComponent></PageQuickSidebarComponent>
        {/* END QUICK SIDEBAR */}
      </div>
    );
  }
}

PageContainerComponent.propTypes = {
  // bla: PropTypes.string,
};

PageContainerComponent.defaultProps = {
  // bla: 'test',
};

export default PageContainerComponent;
