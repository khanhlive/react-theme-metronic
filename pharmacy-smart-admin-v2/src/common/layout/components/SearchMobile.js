import React from "react";
import $ from "jquery";

export default class SearchMobile extends React.Component {
  componentDidMount() {
    $("#cancel-search-js").on("click", e => {
      e.preventDefault();
      $("body").removeClass("search-mobile");
    });
  }
  toggleSearch(e) {
    e.preventDefault();
    $("body").addClass("search-mobile");
  }
  render() {
    return (
      <div id="search-mobile" className={this.props.className}>
        <span>
          <a href="#/" onClick={this.toggleSearch} title="Search">
            <i className="fa fa-search" />
          </a>
        </span>
      </div>
    );
  }
}
