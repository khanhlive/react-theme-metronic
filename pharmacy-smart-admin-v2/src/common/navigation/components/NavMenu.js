import React from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import { config } from "../../../config/config";
import store from "../../../store/configureStore";
import { navigationInit } from "../NavigationActions";
import NavMenuList from "./NavMenuList";



const navItems = require("../../../config/navigation.json").items.map(addId);

export default class NavMenu extends React.Component {
  UNSAFE_componentWillMount() {
    store.dispatch(navigationInit(navItems));
  }

  componentDidMount() {
    const defaults = {
      accordion: true,
      speed: config.menu_speed,
      closedSign: "[+]",
      openedSign: "[-]"
    };

    //@todo get rid of jquery stuff

    // Extend our default options with those provided.
    const opts = $.extend({}, defaults, this.props);
    //Assign current element to variable, in this case is UL element
    const $this = $(findDOMNode(this));

    //add a mark [+] to a multilevel menu
    $this.find("li").each(function() {
      if ($(this).find("ul").length !== 0) {
        //add the multilevel sign next to the link
        $(this)
          .find("a:first")
          .append("<b class='collapse-sign'>" + opts.closedSign + "</b>");

        //avoid jumping to the top of the page when the href is an #
        if (
          $(this)
            .find("a:first")
            .attr("href") === "#"
        ) {
          $(this)
            .find("a:first")
            .click(function() {
              return false;
            });
        }
      }
    });

    //open active level
    $this.find("a.active").each(function(li) {
      $(this)
        .parents("ul")
        .slideDown(opts.speed);
      $(this)
        .parents("ul")
        .parent("li")
        .find("b:first")
        .html(opts.openedSign);
      $(this)
        .parents("ul")
        .parent("li")
        .addClass("open");
    });

    $this.find("li a").click(function() {
      if (
        $(this)
          .parent()
          .find("ul").length !== 0
      ) {
        if (opts.accordion) {
          //Do nothing when the list is open
          if (
            !$(this)
              .parent()
              .find("ul")
              .is(":visible")
          ) {
            const parents = $(this)
              .parent()
              .parents("ul");
            const visible = $this.find("ul:visible");
            visible.each(function(visibleIndex) {
              var close = true;
              parents.each(function(parentIndex) {
                if (parents[parentIndex] === visible[visibleIndex]) {
                  close = false;
                  return false;
                }
              });
              if (close) {
                if (
                  $(this)
                    .parent()
                    .find("ul") !== visible[visibleIndex]
                ) {
                  $(visible[visibleIndex]).slideUp(opts.speed, function() {
                    $(this)
                      .parent("li")
                      .find("b:first")
                      .html(opts.closedSign);
                    $(this)
                      .parent("li")
                      .removeClass("open");
                  });
                }
              }
            });
          }
        }
        if (
          $(this)
            .parent()
            .find("ul:first")
            .is(":visible") &&
          !$(this)
            .parent()
            .find("ul:first")
            .hasClass("active")
        ) {
          $(this)
            .parent()
            .find("ul:first")
            .slideUp(opts.speed, function() {
              $(this)
                .parent("li")
                .removeClass("open");
              $(this)
                .parent("li")
                .find("b:first")
                .delay(opts.speed)
                .html(opts.closedSign);
            });
        } else {
          $(this)
            .parent()
            .find("ul:first")
            .slideDown(opts.speed, function() {
              $(this)
                .parent("li")
                .addClass("open");
              $(this)
                .parent("li")
                .find("b:first")
                .delay(opts.speed)
                .html(opts.openedSign);
            });
        } 
      } 
    });
  }

  render() {
    return navItems ? <NavMenuList items={navItems} /> : this.props.children;
  }
}

NavMenu.propTypes = {
  accordion: PropTypes.bool,
  speed: PropTypes.number,
  closedSign: PropTypes.string,
  openedSign: PropTypes.string
};

// emsure item have id
function addId(item) {
  if (item.items) {
    item.items = item.items.map(addId);
  }

  if (!item.id) {
    item.id = Math.random()
      .toString(36)
      .slice(2);
  }
  return item;
}