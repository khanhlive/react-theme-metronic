import React from "react";

import $ from "jquery";
import "smartadmin-plugins/es6/jquery-ui.min";

import { getJSON } from "../../../utils/functions";

export default class UiAjaxAutocomplete extends React.Component {
  componentDidMount() {
    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    function extractFirst(term) {
      return split(term)[0];
    }

    let element = $(this.refs.input);

    element.autocomplete({
      source: (request, response) => {
        getJSON(
          "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" +
            extractLast(request.term)
        ).then(data => {
          response(data);
        });
      },
      minLength: 3,
      select: (event, ui) => {
        var selectedObj = ui.item,
          placeName = selectedObj.value;
        if (typeof placeName === "undefined") placeName = element.val();

        if (placeName) {
          var terms = split(element.val());
          // remove the current input
          terms.pop();
          // add the selected item (city only)
          terms.push(extractFirst(placeName));
          // add placeholder to get the comma-and-space at the end
          terms.push("");

          if (this.props.onFind) this.props.onFind(terms.join(", "));
        }

        return false;
      },
      focus() {
        // prevent value inserted on focus
        return false;
      },
      delay: 100
    });
  }

  render() {
    const { onFind, ...props } = { ...this.props };

    return <input type="text" {...props} ref="input" />;
  }
}
