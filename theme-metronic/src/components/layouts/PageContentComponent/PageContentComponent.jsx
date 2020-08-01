import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './PageContentComponent.styles';

class PageContentComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    console.log("PageContentComponent will mount");
  };

  componentDidMount = () => {
    console.log("PageContentComponent mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("PageContentComponent will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("PageContentComponent will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("PageContentComponent did update");
  };

  componentWillUnmount = () => {
    console.log("PageContentComponent will unmount");
  };

  render() {
    return (
      <React.Fragment>
        <div className="page-content-wrapper">
          <div className="page-content">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN STYLE CUSTOMIZER */}
            <div className="theme-panel hidden-xs hidden-sm">
              <div className="toggler"></div>
              <div className="toggler-close"></div>
              <div className="theme-options">
                <div className="theme-option theme-colors clearfix">
                  <span>THEME COLOR </span>
                  <ul>
                    <li
                      className="color-default current tooltips"
                      data-style="default"
                      data-container="body"
                      data-original-title="Default"
                    ></li>
                    <li
                      className="color-darkblue tooltips"
                      data-style="darkblue"
                      data-container="body"
                      data-original-title="Dark Blue"
                    ></li>
                    <li
                      className="color-blue tooltips"
                      data-style="blue"
                      data-container="body"
                      data-original-title="Blue"
                    ></li>
                    <li
                      className="color-grey tooltips"
                      data-style="grey"
                      data-container="body"
                      data-original-title="Grey"
                    ></li>
                    <li
                      className="color-light tooltips"
                      data-style="light"
                      data-container="body"
                      data-original-title="Light"
                    ></li>
                    <li
                      className="color-light2 tooltips"
                      data-style="light2"
                      data-container="body"
                      data-html="true"
                      data-original-title="Light 2"
                    ></li>
                  </ul>
                </div>
                <div className="theme-option">
                  <span>Layout </span>
                  <select className="layout-option form-control input-sm">
                    <option value="fluid" selected="selected">
                      Fluid
                    </option>
                    <option value="boxed">Boxed</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Header </span>
                  <select className="page-header-option form-control input-sm">
                    <option value="fixed" selected="selected">
                      Fixed
                    </option>
                    <option value="default">Default</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Top Menu Dropdown</span>
                  <select className="page-header-top-dropdown-style-option form-control input-sm">
                    <option value="light" selected="selected">
                      Light
                    </option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Sidebar Mode</span>
                  <select className="sidebar-option form-control input-sm">
                    <option value="fixed">Fixed</option>
                    <option value="default" selected="selected">
                      Default
                    </option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Sidebar Menu </span>
                  <select className="sidebar-menu-option form-control input-sm">
                    <option value="accordion" selected="selected">
                      Accordion
                    </option>
                    <option value="hover">Hover</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Sidebar Style </span>
                  <select className="sidebar-style-option form-control input-sm">
                    <option value="default" selected="selected">
                      Default
                    </option>
                    <option value="light">Light</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Sidebar Position </span>
                  <select className="sidebar-pos-option form-control input-sm">
                    <option value="left" selected="selected">
                      Left
                    </option>
                    <option value="right">Right</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Footer </span>
                  <select className="page-footer-option form-control input-sm">
                    <option value="fixed">Fixed</option>
                    <option value="default" selected="selected">
                      Default
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* END STYLE CUSTOMIZER */}
            {/* BEGIN PAGE HEADER*/}
            <h3 className="page-title">
              Blank Page <small>blank page</small>
            </h3>
            <div className="page-bar">
              <ul className="page-breadcrumb">
                <li>
                  <i className="fa fa-home" />
                  <a href="index.html">Home</a>
                  <i className="fa fa-angle-right" />
                </li>
                <li>
                  <a href="#">Page Layouts</a>
                  <i className="fa fa-angle-right" />
                </li>
                <li>
                  <a href="#">Blank Page</a>
                </li>
              </ul>
              <div className="page-toolbar">
                <div className="btn-group pull-right">
                  <button
                    type="button"
                    className="btn btn-fit-height grey-salt dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay={1000}
                    data-close-others="true"
                  >
                    Actions <i className="fa fa-angle-down" />
                  </button>
                  <ul className="dropdown-menu pull-right" role="menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* END PAGE HEADER*/}
            {/* BEGIN PAGE CONTENT*/}
            <div className="row">
              <div className="col-md-12">Page content goes here</div>
            </div>
            {/* END PAGE CONTENT*/}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PageContentComponent.propTypes = {
  // bla: PropTypes.string,
};

PageContentComponent.defaultProps = {
  // bla: 'test',
};

export default PageContentComponent;
