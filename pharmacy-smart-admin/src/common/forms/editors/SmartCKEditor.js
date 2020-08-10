import React from "react";

import $script from "scriptjs";

export default class SmartCKEditor extends React.Component {
  componentDidMount() {
    $script("https://cdn.ckeditor.com/4.5.11/standard/ckeditor.js", () => {
      const CKEDITOR = window["CKEDITOR"];

      this.editor = CKEDITOR.replace(this.props.container, this.props.options);
    });
  }

  componentWillUnmount() {
    this.editor && this.editor.destroy();
  }

  render() {
    const { container, options, ...props } = { ...this.props };
    return (
      <textarea style={{ opacity: 0 }} id={container} {...props} ref="editor" />
    );
  }
}
