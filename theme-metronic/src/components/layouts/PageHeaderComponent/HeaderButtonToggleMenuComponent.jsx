import React, { Component } from "react";

export default class HeaderButtonToggleMenuComponent extends Component {
  render() {
    return (
      <a
        href="javascript:;"
        className="menu-toggler responsive-toggler"
        data-toggle="collapse"
        data-target=".navbar-collapse"
      ></a>
    );
  }
}
