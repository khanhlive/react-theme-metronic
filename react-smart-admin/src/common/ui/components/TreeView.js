import React from "react";

import { newid } from "../../utils/functions";
import classnames from "classnames";
import HtmlRender from "../../utils/components/HtmlRender";
import { findDOMNode } from "react-dom";
import $ from "jquery";

export class TreeViewItem extends React.Component {
  handleExpand = e => {
    e.stopPropagation();
    let item = this.props.item;
    if (item.children && item.children.length) {
      item.expanded = !item.expanded;
      this.forceUpdate();
    }
  };
  render() {
    let item = this.props.item;

    let children = item.children ? (
      <TreeView
        className={classnames({
          "smart-treeview-group": true,
          hidden: !item.expanded
        })}
        items={item.children}
        role="group"
      />
    ) : null;

    return (
      <li
        className={classnames({
          parent_li: item.children && item.children.length
        })}
        onClick={this._handleExpand}
      >
        <HtmlRender html={item.content} />
        {children}
      </li>
    );
  }
  componentDidUpdate = () => {
    this.handleIcon();
  };
  componentDidMount = () => {
    this.handleIcon();
  };
  handleIcon = () => {
    let item = this.props.item;
    if (item.children && item.children.length) {
      $(findDOMNode(this))
        .find(">p>span>i")
        .toggleClass("fa-plus-circle", !item.expanded)
        .toggleClass("fa-minus-circle", !!item.expanded);
    }
  };
}

export default class TreeView extends React.Component {
  render() {
    let items = this.props.items;
    return (
      <ul role={this.props.role} className={this.props.className}>
        {items.map(function(item) {
          return <TreeViewItem key={newid("treeview-item")} item={item} />;
        })}
      </ul>
    );
  }
}
