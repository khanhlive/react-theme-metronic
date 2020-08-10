import React, { Component } from "react";

import { JarvisWidget } from "../../../common/widgets";

import { Tab, Nav, NavItem } from "react-bootstrap";
import LiveStats from "./LiveStats";
import SocialNetwork from "./SocialNetwork";
import Revenue from "./Revenue";

export default class LiveFeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "stats"
    };
  }

  handleSelect = key => {
    this.setState({ key });
  };
  render() {
    return (
      <Tab.Container
        id="live-feeds-tabs"
        activeKey={this.state.key}
        onSelect={this.handleSelect}
      >
        <JarvisWidget id="LiveFeeds"
          togglebutton={false}
          editbutton={false}
          fullscreenbutton={false}
          colorbutton={false}
          deletebutton={false}
        >
          <header>
            <span className="widget-icon">
              <i className="glyphicon glyphicon-stats txt-color-darken" />
            </span>

            <h2>Live Feeds </h2>

            <Nav bsStyle="tabs" className="pull-right dashboard-widget-tabs" >
              <NavItem eventKey="stats">
                <i className="fa fa-clock-o padding-5" />
                <span className="hidden-mobile hidden-tablet">Live Stats</span>
              </NavItem>
              <NavItem eventKey="social">
                <i className="fa fa-facebook padding-5" />
                <span className="hidden-mobile hidden-tablet">
                  Social Network
                </span>
              </NavItem>
              <NavItem eventKey="revenue">
                <i className="fa fa-dollar padding-5" />
                <span className="hidden-mobile hidden-tablet">Revenue</span>
              </NavItem>
            </Nav>
          </header>

          <div className="no-padding">
            <div className="widget-body">
              <Tab.Content animation mountOnEnter={true} unmountOnExit={true}>
                <Tab.Pane eventKey="stats">
                  <div className="padding-10 no-padding-bottom">
                    <LiveStats tab={this.state.key} />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="social">
                  <SocialNetwork tab={this.state.key} />
                </Tab.Pane>
                <Tab.Pane eventKey="revenue">
                  <Revenue tab={this.state.key} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </JarvisWidget>
      </Tab.Container>
    );
  }
}
