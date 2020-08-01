import React from "react";
import $ from "jquery";
import "summernote/dist/summernote.min";

export default class Summernote extends React.Component {
  componentDidMount() {
    $(this.refs.editor).summernote({
      height: this.props.height || 270
    });
  }

  componentWillUnmount() {
    $(this.refs.editor).summernote("destroy");
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <div {...props} ref="editor">
        {children}
      </div>
    );
  }
}
