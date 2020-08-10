import React from "react";
import $ from "jquery";
import "to-markdown/dist/to-markdown.js";
import "markdown/lib/markdown.js";
import "he/he.js";
import "bootstrap-markdown/js/bootstrap-markdown.js";

export default class MarkdownEditor extends React.Component {
  componentDidMount() {
    $(this.refs.editor).markdown();
  }

  render() {
    return (
      <textarea
        ref="editor"
        defaultValue={this.props.value}
        className={this.props.className}
      />
    );
  }
}
