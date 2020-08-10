import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as NavigationActions from '../NavigationActions'

class Shortcut extends React.Component {
  onLinkClick = (e)=>{
    this.props.closeShortcut()
  }
  onBackClick = (e)=>{
    e.preventDefault()
    this.props.closeShortcut()
  }
  render() {
    return (
      <Collapse in={this.props.shortcutOpen} mountOnEnter={true} unmountOnExit={true}>
        <div id="shortcut" style={{display: 'block'}}>
          <ul onClick={this.onBackClick}>
            <li>
              <Link onClick={this.onLinkClick}
                to="/outlook"
                title="Inbox"
                className="jarvismetro-tile big-cubes bg-color-blue"
              >
                <span className="iconbox">
                  <i className="fa fa-envelope fa-4x" />
                  <span>
                    Mail
                    <span className="label pull-right bg-color-darken">14</span>
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link onClick={this.onLinkClick}
                to="/calendar"
                className="jarvismetro-tile big-cubes bg-color-orangeDark"
              >
                <span className="iconbox">
                  <i className="fa fa-calendar fa-4x" /> <span>Calendar</span>
                </span>
              </Link>
            </li>
            <li>
              <Link onClick={this.onLinkClick}
                to="/maps"
                className="jarvismetro-tile big-cubes bg-color-purple"
              >
                <span className="iconbox">
                  <i className="fa fa-map-marker fa-4x" /> <span>Maps</span>
                </span>
              </Link>
            </li>
            <li>
              <Link onClick={this.onLinkClick}
                to="/misc/invoice"
                className="jarvismetro-tile big-cubes bg-color-blueDark"
              >
                <span className="iconbox">
                  <i className="fa fa-book fa-4x" />
                  <span>
                    Invoice
                    <span className="label pull-right bg-color-darken">99</span>
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link onClick={this.onLinkClick}
                to="/views/gallery"
                className="jarvismetro-tile big-cubes bg-color-greenLight"
              >
                <span className="iconbox">
                  <i className="fa fa-picture-o fa-4x" /> <span>Gallery </span>
                </span>
              </Link>
            </li>
            <li>
              <Link onClick={this.onLinkClick}
                to="/views/profile"
                className="jarvismetro-tile big-cubes selected bg-color-pinkDark"
              >
                <span className="iconbox">
                  <i className="fa fa-user fa-4x" /> <span>My Profile </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </Collapse>
    );
  }
}


export default connect(
  store => store.navigation,
  dispatch => bindActionCreators(NavigationActions, dispatch)
)(Shortcut);


