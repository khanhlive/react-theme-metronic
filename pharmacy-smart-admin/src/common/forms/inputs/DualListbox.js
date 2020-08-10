import React from "react";

import $ from "jquery";
import "bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js";

export default class DualListbox extends React.Component {
  componentDidMount() {
    const element = $(this.refs.select);

    const options = {
      ...(this.props.nonSelectedFilter || {}),
      ...{
        nonSelectedListLabel: "Non-selected",
        selectedListLabel: "Selected",
        preserveSelectionOnMove: "moved",
        moveOnSelect: false,
        size: 10
      }
    };

    element.bootstrapDualListbox(options);
  }

  render() {
    const items = this.props.items || [];
    const selected = items
      .filter(item => {
        return item.selected;
      })
      .map(item => {
        return item.key;
      });
    return (
      <select multiple={true} defaultValue={selected} ref="select">
        {items.map((item, idx) => {
          return (
            <option
              value={item.key}
              key={"duallistbox-" + item.value + item.key + idx}
            >
              {item.value}
            </option>
          );
        })}
      </select>
    );
  }
}
