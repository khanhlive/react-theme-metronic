import React, { Component } from "react";

export default class PageHeaderLogoComponent extends Component {
  render() {
    return (
      <div className="page-logo">
        <a href="index.html">
          <img
            src="/assets/admin/layout/img/logo.png"
            alt="logo"
            className="logo-default"
          />
        </a>
        <div className="menu-toggler sidebar-toggler hide">
          {/* DOC: Remove the above "hide" to enable the sidebar toggler button on header */}
        </div>
      </div>
    );
  }
}
