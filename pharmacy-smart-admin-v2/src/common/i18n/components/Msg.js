import React from "react";

import { connect } from "react-redux";

class Msg extends React.Component {
  render() {
    const key = this.props.phrase;
    const phrase = this.props.phrases[key] || key;
    return <span>{phrase}</span>;
  }
}

const mapStateToProps = state => state.i18n;

export default connect(mapStateToProps)(Msg);
