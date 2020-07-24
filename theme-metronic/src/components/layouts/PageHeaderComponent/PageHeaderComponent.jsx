import React, { Component } from "react";
import PropTypes from "prop-types";
import PageHeaderLogoComponent from './PageHeaderLogoComponent';
import HeaderButtonToggleMenuComponent from './HeaderButtonToggleMenuComponent';
import HeaderTopMenuComponent from './HeaderTopMenuComponent'

class PageHeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    console.log("PageHeaderComponent will mount");
  };

  componentDidMount = () => {
    console.log("PageHeaderComponent mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("PageHeaderComponent will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("PageHeaderComponent will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("PageHeaderComponent did update");
  };

  componentWillUnmount = () => {
    console.log("PageHeaderComponent will unmount");
  };

  render() {
    return (
      <div className="page-header -i navbar navbar-fixed-top">
        {/* BEGIN HEADER INNER */}
        <div className="page-header-inner">
          {/* BEGIN LOGO */}
          <PageHeaderLogoComponent></PageHeaderLogoComponent>
          {/* END LOGO */}
          {/* BEGIN RESPONSIVE MENU TOGGLER */}
          <HeaderButtonToggleMenuComponent></HeaderButtonToggleMenuComponent>
          {/* END RESPONSIVE MENU TOGGLER */}
          {/* BEGIN TOP NAVIGATION MENU */}
          <HeaderTopMenuComponent></HeaderTopMenuComponent>
          {/* END TOP NAVIGATION MENU */}
        </div>
        {/* END HEADER INNER */}
      </div>
    );
  }
}

PageHeaderComponent.propTypes = {
  // bla: PropTypes.string,
};

PageHeaderComponent.defaultProps = {
  // bla: 'test',
};

export default PageHeaderComponent;
