import React from "react";

import { BigBreadcrumbs, Stats, WidgetGrid } from "../../../common";

export default class Profile extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Home", "Profile"]}
            icon="fa fa-user"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <WidgetGrid>
          <div className="row">
            <div className="col-sm-12">
              <div className="well well-sm">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="well well-light well-sm no-margin no-padding">
                      <div className="row">
                        <div className="col-sm-12">
                          <div
                            id="myCarousel"
                            className="carousel fade profile-carousel"
                          >
                            <div className="air air-bottom-right padding-10">
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn txt-color-white bg-color-teal btn-sm"
                              >
                                <i className="fa fa-check" />
                                Follow
                              </a>
                              &nbsp;
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn txt-color-white bg-color-pinkDark btn-sm"
                              >
                                <i className="fa fa-link" />
                                Connect
                              </a>
                            </div>
                            <div className="air air-top-left padding-10">
                              <h4 className="txt-color-white font-md">
                                Jan 1, 2014
                              </h4>
                            </div>
                            <ol className="carousel-indicators">
                              <li
                                data-target="#myCarousel"
                                data-slide-to={0}
                                className="active"
                              />
                              <li data-target="#myCarousel" data-slide-to={1} />
                              <li data-target="#myCarousel" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                              {/* Slide 1 */}
                              <div className="item active">
                                <img
                                  src="assets/img/demo/s1.jpg"
                                  alt="demo user"
                                />
                              </div>
                              {/* Slide 2 */}
                              <div className="item">
                                <img
                                  src="assets/img/demo/s2.jpg"
                                  alt="demo user"
                                />
                              </div>
                              {/* Slide 3 */}
                              <div className="item">
                                <img
                                  src="assets/img/demo/m3.jpg"
                                  alt="demo user"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="row">
                            <div className="col-sm-3 profile-pic">
                              <img
                                src="assets/img/avatars/sunny-big.png"
                                alt="demo user"
                              />
                              <div className="padding-10">
                                <h4 className="font-md">
                                  <strong>1,543</strong>
                                  <br />
                                  <small>Followers</small>
                                </h4>
                                <br />
                                <h4 className="font-md">
                                  <strong>419</strong>
                                  <br />
                                  <small>Connections</small>
                                </h4>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <h1>
                                John <span className="semi-bold">Doe</span>
                                <br />
                                <small> CEO, SmartAdmin</small>
                              </h1>
                              <ul className="list-unstyled">
                                <li>
                                  <p className="text-muted">
                                    <i className="fa fa-phone" />
                                    &nbsp;&nbsp;(
                                    <span className="txt-color-darken">
                                      313
                                    </span>
                                    )
                                    <span className="txt-color-darken">
                                      464
                                    </span>
                                    -
                                    <span className="txt-color-darken">
                                      6473
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="text-muted">
                                    <i className="fa fa-envelope" />
                                    &nbsp;&nbsp;
                                    <a href="mailto:simmons@smartadmin">
                                      ceo@smartadmin.com
                                    </a>
                                  </p>
                                </li>
                                <li>
                                  <p className="text-muted">
                                    <i className="fa fa-skype" />
                                    &nbsp;&nbsp;
                                    <span className="txt-color-darken">
                                      john12
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="text-muted">
                                    <i className="fa fa-calendar" />
                                    &nbsp;&nbsp;
                                    <span className="txt-color-darken">
                                      Free after
                                      <a href="#/"
                                        onClick={this.onClick}
                                        rel="tooltip"
                                        data-placement="top"
                                        data-original-title="Create an Appointment"
                                      >
                                        4:30 PM
                                      </a>
                                    </span>
                                  </p>
                                </li>
                              </ul>
                              <br />
                              <p className="font-md">
                                <i>A little about me...</i>
                              </p>
                              <p>
                                Et harum quidem rerum facilis est et expedita
                                distinctio. Nam libero tempore, cum soluta nobis
                                est eligendi optio cumque nihil impedit quo
                                minus id quod maxime placeat facere
                              </p>
                              <br />
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-default btn-xs"
                              >
                                <i className="fa fa-envelope-o" /> Send Message
                              </a>
                              <br />
                              <br />
                            </div>
                            <div className="col-sm-3">
                              <h1>
                                <small>Connections</small>
                              </h1>
                              <ul className="list-inline friends-list">
                                <li>
                                  <img
                                    src="assets/img/avatars/1.png"
                                    alt="friend-1"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/img/avatars/2.png"
                                    alt="friend-2"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/img/avatars/3.png"
                                    alt="friend-3"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/img/avatars/4.png"
                                    alt="friend-4"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/img/avatars/5.png"
                                    alt="friend-5"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="friend-6"
                                  />
                                </li>
                                <li>
                                  <a href="#/" onClick={this.onClick}>413 more</a>
                                </li>
                              </ul>
                              <h1>
                                <small>Recent visitors</small>
                              </h1>
                              <ul className="list-inline friends-list">
                                <li>
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="friend-1"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/img/avatars/female.png"
                                    alt="friend-2"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/img/avatars/female.png"
                                    alt="friend-3"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <hr />
                          <div className="padding-10">
                            <ul className="nav nav-tabs tabs-pull-right">
                              <li className="active">
                                <a href="#a1" data-toggle="tab">
                                  Recent Articles
                                </a>
                              </li>
                              <li>
                                <a href="#a2" data-toggle="tab">
                                  New Members
                                </a>
                              </li>
                              <li className="pull-left">
                                <span className="margin-top-10 display-inline">
                                  <i className="fa fa-rss text-success" />
                                  Activity
                                </span>
                              </li>
                            </ul>
                            <div className="tab-content padding-top-10">
                              <div className="tab-pane fade in active" id="a1">
                                <div className="row">
                                  <div className="col-xs-2 col-sm-1">
                                    <time
                                      dateTime="2014-09-20"
                                      className="icon"
                                    >
                                      <strong>Jan</strong>
                                      <span>10</span>
                                    </time>
                                  </div>
                                  <div className="col-xs-10 col-sm-11">
                                    <h6 className="no-margin">
                                      <a href="#/" onClick={this.onClick}>
                                        Allice in Wonderland
                                      </a>
                                    </h6>
                                    <p>
                                      Etiam ultricies nisi vel augue. Curabitur
                                      ullamcorper ultricies nisi Nam eget dui.
                                      Etiam rhoncus. Maecenas tempus, tellus
                                      eget condimentum rhoncus, sem quam semper
                                      libero, sit amet adipiscing sem neque sed
                                      ipsum. Nam quam nunc, blandit vel.
                                    </p>
                                  </div>
                                  <div className="col-sm-12">
                                    <hr />
                                  </div>
                                  <div className="col-xs-2 col-sm-1">
                                    <time
                                      dateTime="2014-09-20"
                                      className="icon"
                                    >
                                      <strong>Jan</strong>
                                      <span>10</span>
                                    </time>
                                  </div>
                                  <div className="col-xs-10 col-sm-11">
                                    <h6 className="no-margin">
                                      <a href="#/" onClick={this.onClick}>World Report</a>
                                    </h6>
                                    <p>
                                      Morning our be dry. Life also third land
                                      after first beginning to evening cattle
                                      created let subdue you'll winged don't
                                      Face firmament. You winged you're was
                                      Fruit divided signs lights i living cattle
                                      yielding over light life life sea, so
                                      deep. Abundantly given years bring were
                                      after. Greater you're meat beast creeping
                                      behold he unto She'd doesn't. Replenish
                                      brought kind gathering Meat.
                                    </p>
                                  </div>
                                  <div className="col-sm-12">
                                    <br />
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="a2">
                                <div className="alert alert-info fade in">
                                  <button
                                    className="close"
                                    data-dismiss="alert"
                                  >
                                    ×
                                  </button>
                                  <i className="fa-fw fa fa-info" />
                                  <strong>51 new members </strong>joined today!
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/female.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Jenn Wilson</a>
                                  <div className="email">
                                    travis@company.com
                                  </div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Marshall Hitt</a>
                                  <div className="email">
                                    marshall@company.com
                                  </div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Joe Cadena</a>
                                  <div className="email">joe@company.com</div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Mike McBride</a>
                                  <div className="email">mike@company.com</div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Travis Wilson</a>
                                  <div className="email">
                                    travis@company.com
                                  </div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Marshall Hitt</a>
                                  <div className="email">
                                    marshall@company.com
                                  </div>
                                </div>
                                <div
                                  className="user"
                                  title="Joe Cadena joe@company.com"
                                >
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Joe Cadena</a>
                                  <div className="email">joe@company.com</div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Mike McBride</a>
                                  <div className="email">mike@company.com</div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Marshall Hitt</a>
                                  <div className="email">
                                    marshall@company.com
                                  </div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}>Joe Cadena</a>
                                  <div className="email">joe@company.com</div>
                                </div>
                                <div className="user" title="email@company.com">
                                  <img
                                    src="assets/img/avatars/male.png"
                                    alt="demo user"
                                  />
                                  <a href="#/" onClick={this.onClick}> Mike McBride</a>
                                  <div className="email">mike@company.com</div>
                                </div>
                                <div className="text-center">
                                  <ul className="pagination pagination-sm">
                                    <li className="disabled">
                                      <a href="#/" onClick={this.onClick}>Prev</a>
                                    </li>
                                    <li className="active">
                                      <a href="#/" onClick={this.onClick}>1</a>
                                    </li>
                                    <li>
                                      <a href="#/" onClick={this.onClick}>2</a>
                                    </li>
                                    <li>
                                      <a href="#/" onClick={this.onClick}>3</a>
                                    </li>
                                    <li>
                                      <a href="#/" onClick={this.onClick}>...</a>
                                    </li>
                                    <li>
                                      <a href="#/" onClick={this.onClick}>99</a>
                                    </li>
                                    <li>
                                      <a href="#/" onClick={this.onClick}>Next</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* end tab */}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <form
                      method="post"
                      className="well padding-bottom-10"
                      onSubmit={this.onSubmit}
                    >
                      <textarea
                        rows={2}
                        className="form-control"
                        placeholder="What are you thinking?"
                        defaultValue={""}
                      />
                      <div className="margin-top-10">
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary pull-right"
                        >
                          Post
                        </button>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title="Add Location"
                        >
                          <i className="fa fa-location-arrow" />
                        </a>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title="Add Voice"
                        >
                          <i className="fa fa-microphone" />
                        </a>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title="Add Photo"
                        >
                          <i className="fa fa-camera" />
                        </a>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-link profile-link-btn"
                          rel="tooltip"
                          data-placement="bottom"
                          title="Add File"
                        >
                          <i className="fa fa-file" />
                        </a>
                      </div>
                    </form>
                    <div className="timeline-seperator text-center">
                      <span>10:30PM January 1st, 2013</span>
                      <div className="btn-group pull-right">
                        <a href="#/"
                          onClick={this.onClick}
                          data-toggle="dropdown"
                          className="btn btn-default btn-xs dropdown-toggle"
                        >
                          <span className="caret single" />
                        </a>
                        <ul className="dropdown-menu text-left">
                          <li>
                            <a href="#/" onClick={this.onClick}>Hide this post</a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>
                              Hide future posts from this user
                            </a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>Mark as spam</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-body no-padding profile-message">
                      <ul>
                        <li className="message">
                          <img
                            src="assets/img/avatars/sunny.png"
                            className="online"
                            alt="sunny"
                          />
                          <span className="message-text">
                            <a href="#/" onClick={this.onClick} className="username">
                              John Doe
                              <small className="text-muted pull-right ultra-light">
                                2 Minutes ago
                              </small>
                            </a>
                            Can't divide were divide fish forth fish to. Was
                            can't form the, living life grass darkness very
                            image let unto fowl isn't in blessed fill life
                            yielding above all moved
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-info">
                                <i className="fa fa-reply" /> Reply
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-danger">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-muted">
                                Show All Comments (14)
                              </a>
                            </li>
                            <li>
                              <a href="#/"
                                onClick={this.onClick}
                                className="text-primary"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-danger">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="message message-reply">
                          <img
                            src="assets/img/avatars/3.png"
                            className="online"
                            alt="user"
                          />
                          <span className="message-text">
                            <a href="#/" onClick={this.onClick} className="username">
                              Serman Syla
                            </a>
                            Haha! Yeah I know what you mean. Thanks for the file
                            Sadi!
                            <i className="fa fa-smile-o txt-color-orange" />
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-muted">
                                1 minute ago
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-danger">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="message message-reply">
                          <img
                            src="assets/img/avatars/4.png"
                            className="online"
                            alt="user"
                          />
                          <span className="message-text">
                            <a href="#/" onClick={this.onClick} className="username">
                              Sadi Orlaf
                            </a>
                            Haha! Yeah I know what you mean. Thanks for the file
                            Sadi!
                            <i className="fa fa-smile-o txt-color-orange" />
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-muted">
                                a moment ago
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-danger">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                          </ul>
                          <input
                            className="form-control input-xs"
                            placeholder="Type and enter"
                            type="text"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="timeline-seperator text-center">
                      <span>11:30PM November 27th, 2013</span>
                      <div className="btn-group pull-right">
                        <a href="#/"
                          onClick={this.onClick}
                          data-toggle="dropdown"
                          className="btn btn-default btn-xs dropdown-toggle"
                        >
                          <span className="caret single" />
                        </a>
                        <ul className="dropdown-menu text-left">
                          <li>
                            <a href="#/" onClick={this.onClick}>Hide this post</a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>
                              Hide future posts from this user
                            </a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>Mark as spam</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-body no-padding profile-message">
                      <ul>
                        <li className="message">
                          <img
                            src="assets/img/avatars/1.png"
                            className="online"
                            alt="user"
                          />
                          <span className="message-text">
                            <a href="#/" onClick={this.onClick} className="username">
                              John Doe
                              <small className="text-muted pull-right ultra-light">
                                2 Minutes ago
                              </small>
                            </a>
                            Can't divide were divide fish forth fish to. Was
                            can't form the, living life grass darkness very
                            image let unto fowl isn't in blessed fill life
                            yielding above all moved
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-info">
                                <i className="fa fa-reply" /> Reply
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-danger">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-muted">
                                Show All Comments (14)
                              </a>
                            </li>
                            <li>
                              <a href="#/"
                                onClick={this.onClick}
                                className="text-primary"
                              >
                                Hide
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="message message-reply">
                          <img
                            src="assets/img/avatars/3.png"
                            className="online"
                            alt="user"
                          />
                          <span className="message-text">
                            <a href="#/" onClick={this.onClick} className="username">
                              Serman Syla
                            </a>
                            Haha! Yeah I know what you mean. Thanks for the file
                            Sadi!
                            <i className="fa fa-smile-o txt-color-orange" />
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-muted">
                                1 minute ago
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-danger">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="message message-reply">
                          <img
                            src="assets/img/avatars/4.png"
                            className="online"
                            alt="user"
                          />
                          <span className="message-text">
                            <a href="#/" onClick={this.onClick} className="username">
                              Sadi Orlaf
                            </a>
                            Haha! Yeah I know what you mean. Thanks for the file
                            Sadi!
                            <i className="fa fa-smile-o txt-color-orange" />
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-muted">
                                a moment ago
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-danger">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="message message-reply">
                          <img
                            src="assets/img/avatars/4.png"
                            className="online"
                            alt="user"
                          />
                          <span className="message-text">
                            <a href="#/" onClick={this.onClick} className="username">
                              Sadi Orlaf
                            </a>
                            Haha! Yeah I know what you mean. Thanks for the file
                            Sadi!
                            <i className="fa fa-smile-o txt-color-orange" />
                          </span>
                          <ul className="list-inline font-xs">
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-muted">
                                a moment ago
                              </a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick} className="text-danger">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="input-group wall-comment-reply">
                            <input
                              id="btn-input"
                              type="text"
                              className="form-control"
                              placeholder="Type your message here..."
                            />
                            <span className="input-group-btn">
                              <button className="btn btn-primary" id="btn-chat">
                                <i className="fa fa-reply" /> Reply
                              </button>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
