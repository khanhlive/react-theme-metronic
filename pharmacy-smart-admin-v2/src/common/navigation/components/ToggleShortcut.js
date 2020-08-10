import React from "react";

import { bindActionCreators } from "redux";
import {connect} from 'react-redux'

import * as NavigationActions from '../NavigationActions'

class ToggleShortcut extends React.Component {
  toggleShortcut = (e)=> {
    e.preventDefault();
    this.props.openShortcut()        
  }
  render() {
    return (
      <a href="#/" onClick={this.toggleShortcut}>
        {this.props.children}
      </a>
    );
  }
}


export default connect(
  store => store.navigation,
  dispatch => bindActionCreators(NavigationActions, dispatch)
)(ToggleShortcut);