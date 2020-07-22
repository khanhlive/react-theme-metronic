import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './HeaderComponent.styles';

class HeaderComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log("HeaderComponent will mount");
  };

  componentDidMount = () => {
    console.log("HeaderComponent mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("HeaderComponent will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("HeaderComponent will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("HeaderComponent did update");
  };

  componentWillUnmount = () => {
    console.log("HeaderComponent will unmount");
  };

  render() {
    
    return (
      <React.Fragment>
        <div className="navbar navbar-default navbar-fixed-top header-highlight">
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
              <img src="/images/logo_light.png"  />
            </a>
            <ul className="nav navbar-nav visible-xs-block">
              <li>
                <a data-toggle="collapse" data-target="#navbar-mobile">
                  <i className="icon-tree5" />
                </a>
              </li>
              <li>
                <a className="sidebar-mobile-main-toggle">
                  <i className="icon-paragraph-justify3" />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-collapse collapse" id="navbar-mobile">
            <ul className="nav navbar-nav">
              <li>
                <a className="sidebar-control sidebar-main-toggle hidden-xs">
                  <i className="icon-paragraph-justify3" />
                </a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="icon-git-compare" />
                  <span className="visible-xs-inline-block position-right">
                    Git updates
                  </span>
                  <span className="badge bg-warning-400">9</span>
                </a>
                <div className="dropdown-menu dropdown-content">
                  <div className="dropdown-content-heading">
                    Git updates
                    <ul className="icons-list">
                      <li>
                        <a href="#">
                          <i className="icon-sync" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="media-list dropdown-content-body width-350">
                    <li className="media">
                      <div className="media-left">
                        <a
                          href="#"
                          className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm"
                        >
                          <i className="icon-git-pull-request" />
                        </a>
                      </div>
                      <div className="media-body">
                        Drop the IE <a href="#">specific hacks</a> for temporal
                        inputs
                        <div className="media-annotation">4 minutes ago</div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <a
                          href="#"
                          className="btn border-warning text-warning btn-flat btn-rounded btn-icon btn-sm"
                        >
                          <i className="icon-git-commit" />
                        </a>
                      </div>
                      <div className="media-body">
                        Add full font overrides for popovers and tooltips
                        <div className="media-annotation">36 minutes ago</div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <a
                          href="#"
                          className="btn border-info text-info btn-flat btn-rounded btn-icon btn-sm"
                        >
                          <i className="icon-git-branch" />
                        </a>
                      </div>
                      <div className="media-body">
                        <a href="#">Chris Arney</a> created a new{" "}
                        <span className="text-semibold">Design</span> branch
                        <div className="media-annotation">2 hours ago</div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <a
                          href="#"
                          className="btn border-success text-success btn-flat btn-rounded btn-icon btn-sm"
                        >
                          <i className="icon-git-merge" />
                        </a>
                      </div>
                      <div className="media-body">
                        <a href="#">Eugene Kopyov</a> merged{" "}
                        <span className="text-semibold">Master</span> and{" "}
                        <span className="text-semibold">Dev</span> branches
                        <div className="media-annotation">Dec 18, 18:36</div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <a
                          href="#"
                          className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm"
                        >
                          <i className="icon-git-pull-request" />
                        </a>
                      </div>
                      <div className="media-body">
                        Have Carousel ignore keyboard events
                        <div className="media-annotation">Dec 12, 05:46</div>
                      </div>
                    </li>
                  </ul>
                  <div className="dropdown-content-footer">
                    <a href="#" data-popup="tooltip" title="All activity">
                      <i className="icon-menu display-block" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <p className="navbar-text">
              <span className="label bg-success">Online</span>
            </p>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown language-switch">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="/images/flags/gb.png"
                    className="position-left"
                    
                  />
                  English
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="deutsch">
                      <img src="/images/flags/de.png"  /> Deutsch
                    </a>
                  </li>
                  <li>
                    <a className="ukrainian">
                      <img src="/images/flags/ua.png"  />{" "}
                      Українська
                    </a>
                  </li>
                  <li>
                    <a className="english">
                      <img src="/images/flags/gb.png"  /> English
                    </a>
                  </li>
                  <li>
                    <a className="espana">
                      <img src="/images/flags/es.png"  /> España
                    </a>
                  </li>
                  <li>
                    <a className="russian">
                      <img src="/images/flags/ru.png"  /> Русский
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="icon-bubbles4" />
                  <span className="visible-xs-inline-block position-right">
                    Messages
                  </span>
                  <span className="badge bg-warning-400">2</span>
                </a>
                <div className="dropdown-menu dropdown-content width-350">
                  <div className="dropdown-content-heading">
                    Messages
                    <ul className="icons-list">
                      <li>
                        <a href="#">
                          <i className="icon-compose" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="media-list dropdown-content-body">
                    <li className="media">
                      <div className="media-left">
                        <img
                          src="/images/placeholder.jpg"
                          className="img-circle img-sm"
                          
                        />
                        <span className="badge bg-danger-400 media-badge">
                          5
                        </span>
                      </div>
                      <div className="media-body">
                        <a href="#" className="media-heading">
                          <span className="text-semibold">James Alexander</span>
                          <span className="media-annotation pull-right">
                            04:58
                          </span>
                        </a>
                        <span className="text-muted">
                          who knows, maybe that would be the best thing for
                          me...
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <img
                          src="/images/placeholder.jpg"
                          className="img-circle img-sm"
                          
                        />
                        <span className="badge bg-danger-400 media-badge">
                          4
                        </span>
                      </div>
                      <div className="media-body">
                        <a href="#" className="media-heading">
                          <span className="text-semibold">Margo Baker</span>
                          <span className="media-annotation pull-right">
                            12:16
                          </span>
                        </a>
                        <span className="text-muted">
                          That was something he was unable to do because...
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <img
                          src="/images/placeholder.jpg"
                          className="img-circle img-sm"
                          
                        />
                      </div>
                      <div className="media-body">
                        <a href="#" className="media-heading">
                          <span className="text-semibold">
                            Jeremy Victorino
                          </span>
                          <span className="media-annotation pull-right">
                            22:48
                          </span>
                        </a>
                        <span className="text-muted">
                          But that would be extremely strained and suspicious...
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <img
                          src="/images/placeholder.jpg"
                          className="img-circle img-sm"
                          
                        />
                      </div>
                      <div className="media-body">
                        <a href="#" className="media-heading">
                          <span className="text-semibold">Beatrix Diaz</span>
                          <span className="media-annotation pull-right">
                            Tue
                          </span>
                        </a>
                        <span className="text-muted">
                          What a strenuous career it is that I've chosen...
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <img
                          src="/images/placeholder.jpg"
                          className="img-circle img-sm"
                          
                        />
                      </div>
                      <div className="media-body">
                        <a href="#" className="media-heading">
                          <span className="text-semibold">Richard Vango</span>
                          <span className="media-annotation pull-right">
                            Mon
                          </span>
                        </a>
                        <span className="text-muted">
                          Other travelling salesmen live a life of luxury...
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="dropdown-content-footer">
                    <a href="#" data-popup="tooltip" title="All messages">
                      <i className="icon-menu display-block" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown dropdown-user">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <img src="/images/placeholder.jpg"  />
                  <span>Victoria</span>
                  <i className="caret" />
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <a href="#">
                      <i className="icon-user-plus" /> My profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-coins" /> My balance
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="badge bg-teal-400 pull-right">58</span>{" "}
                      <i className="icon-comment-discussion" /> Messages
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
                      <i className="icon-cog5" /> Account settings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-switch2" /> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HeaderComponent.propTypes = {
  // bla: PropTypes.string,
};

HeaderComponent.defaultProps = {
  // bla: 'test',
};

export default HeaderComponent;
