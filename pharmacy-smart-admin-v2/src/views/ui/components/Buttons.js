import React from "react";

import {
  BigBreadcrumbs,
  Stats,
  WidgetGrid,
  JarvisWidget
} from "../../../common";

export default class Buttons extends React.Component {
  onClick = e => {};
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["UI", "Buttons"]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <WidgetGrid>
          <div className="row">
            {/* NEW WIDGET START */}
            <article className="col-sm-12">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                className="well"
                id="wid-id-0a"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Buttons at a glance </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <h1>Buttons at a glance...</h1>
                    <p>
                      See how aspects of the Bootstrap button system look and
                      feel like at a glance.
                    </p>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Button</th>
                            <th>btn-lg Button</th>
                            <th>Small Button</th>
                            <th>Small Mini</th>
                            <th>Disabled Button</th>
                            <th>Button with Icon</th>
                            <th>Split Button</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#/"
                                className="btn btn-default"
                                onClick={this.onClick}
                              >
                                Default
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-default btn-lg"
                                onClick={this.onClick}
                              >
                                Default
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-default btn-sm"
                                onClick={this.onClick}
                              >
                                Default
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-default btn-xs"
                                onClick={this.onClick}
                              >
                                Default
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-default disabled"
                                onClick={this.onClick}
                              >
                                Default
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-default"
                                onClick={this.onClick}
                              >
                                <i className="fa fa-cog" /> Default
                              </a>
                            </td>
                            <td>
                              <div className="btn-group dropdown">
                                <a href="#/"
                                  className="btn btn-default"
                                  onClick={this.onClick}
                                >
                                  Default
                                </a>
                                <a href="#/"
                                  className="btn btn-default dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <span className="caret" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Another action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>
                                      Something else here
                                    </a>
                                  </li>
                                  <li className="divider" />
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Separated link</a>
                                  </li>
                                </ul>
                              </div>
                              {/* /btn-group */}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#/"
                                className="btn btn-primary"
                                onClick={this.onClick}
                              >
                                Primary
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-primary btn-lg"
                                onClick={this.onClick}
                              >
                                Primary
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-primary btn-sm"
                                onClick={this.onClick}
                              >
                                Primary
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-primary btn-xs"
                                onClick={this.onClick}
                              >
                                Primary
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-primary disabled"
                                onClick={this.onClick}
                              >
                                Primary
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-primary"
                                onClick={this.onClick}
                              >
                                <i className="fa fa-shopping-cart" /> Primary
                              </a>
                            </td>
                            <td>
                              <div className="btn-group dropdown">
                                <a href="#/"
                                  className="btn btn-primary"
                                  onClick={this.onClick}
                                >
                                  Primary
                                </a>
                                <a href="#/"
                                  className="btn btn-primary dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <span className="caret" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Another action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>
                                      Something else here
                                    </a>
                                  </li>
                                  <li className="divider" />
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Separated link</a>
                                  </li>
                                </ul>
                              </div>
                              {/* /btn-group */}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#/"
                                className="btn btn-info"
                                onClick={this.onClick}
                              >
                                Info
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-info btn-lg"
                                onClick={this.onClick}
                              >
                                Info
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-info btn-sm"
                                onClick={this.onClick}
                              >
                                Info
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-info btn-xs"
                                onClick={this.onClick}
                              >
                                Info
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-info disabled"
                                onClick={this.onClick}
                              >
                                Info
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-info"
                                onClick={this.onClick}
                              >
                                <i className="fa fa-exclamation-sign" /> Info
                              </a>
                            </td>
                            <td>
                              <div className="btn-group dropdown">
                                <a href="#/"
                                  className="btn btn-info"
                                  onClick={this.onClick}
                                >
                                  Info
                                </a>
                                <a href="#/"
                                  className="btn btn-info dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <span className="caret" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Another action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>
                                      Something else here
                                    </a>
                                  </li>
                                  <li className="divider" />
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Separated link</a>
                                  </li>
                                </ul>
                              </div>
                              {/* /btn-group */}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#/"
                                className="btn btn-success"
                                onClick={this.onClick}
                              >
                                Success
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-success btn-lg"
                                onClick={this.onClick}
                              >
                                Success
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-success btn-sm"
                                onClick={this.onClick}
                              >
                                Success
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-success btn-xs"
                                onClick={this.onClick}
                              >
                                Success
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-success disabled"
                                onClick={this.onClick}
                              >
                                Success
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-success"
                                onClick={this.onClick}
                              >
                                <i className="fa fa-check" /> Success
                              </a>
                            </td>
                            <td>
                              <div className="btn-group dropdown">
                                <a href="#/"
                                  className="btn btn-success"
                                  onClick={this.onClick}
                                >
                                  Success
                                </a>
                                <a href="#/"
                                  className="btn btn-success dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <span className="caret" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Another action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>
                                      Something else here
                                    </a>
                                  </li>
                                  <li className="divider" />
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Separated link</a>
                                  </li>
                                </ul>
                              </div>
                              {/* /btn-group */}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#/"
                                className="btn btn-warning"
                                onClick={this.onClick}
                              >
                                Warning
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-warning btn-lg"
                                onClick={this.onClick}
                              >
                                Warning
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-warning btn-sm"
                                onClick={this.onClick}
                              >
                                Warning
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-warning btn-xs"
                                onClick={this.onClick}
                              >
                                Warning
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-warning disabled"
                                onClick={this.onClick}
                              >
                                Warning
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-warning"
                                onClick={this.onClick}
                              >
                                <i className="fa fa-warning-sign" /> Warning
                              </a>
                            </td>
                            <td>
                              <div className="btn-group dropdown">
                                <a href="#/"
                                  className="btn btn-warning"
                                  onClick={this.onClick}
                                >
                                  Warning
                                </a>
                                <a href="#/"
                                  className="btn btn-warning dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <span className="caret" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Another action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>
                                      Something else here
                                    </a>
                                  </li>
                                  <li className="divider" />
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Separated link</a>
                                  </li>
                                </ul>
                              </div>
                              {/* /btn-group */}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#/"
                                className="btn btn-danger"
                                onClick={this.onClick}
                              >
                                Danger
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-danger btn-lg"
                                onClick={this.onClick}
                              >
                                Danger
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-danger btn-sm"
                                onClick={this.onClick}
                              >
                                Danger
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-danger btn-xs"
                                onClick={this.onClick}
                              >
                                Danger
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-danger disabled"
                                onClick={this.onClick}
                              >
                                Danger
                              </a>
                            </td>
                            <td>
                              <a href="#/"
                                className="btn btn-danger"
                                onClick={this.onClick}
                              >
                                <i className="fa fa-remove" /> Danger
                              </a>
                            </td>
                            <td>
                              <div className="btn-group dropdown">
                                <a href="#/"
                                  className="btn btn-danger"
                                  onClick={this.onClick}
                                >
                                  Danger
                                </a>
                                <a href="#/"
                                  className="btn btn-danger dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <span className="caret" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Another action</a>
                                  </li>
                                  <li>
                                    <a href="#/" onClick={this.onClick}>
                                      Something else here
                                    </a>
                                  </li>
                                  <li className="divider" />
                                  <li>
                                    <a href="#/" onClick={this.onClick}>Separated link</a>
                                  </li>
                                </ul>
                              </div>
                              {/* /btn-group */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
            </article>
            {/* WIDGET END */}
          </div>
          {/* end row */}
          {/* row */}
          <div className="row">
            {/* NEW WIDGET START */}
            <article className="col-sm-12 col-md-12 col-lg-6">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-0"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Basic Buttons</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p className="alert alert-info">
                      The icons below are the most basic ones, without any icons
                      or additional css applied to it
                    </p>
                    <p>
                      Buttons come in 6 different default color sets
                      <code>.btn .btn-*</code>
                      <code>
                        .btn-default, .btn-primary, .btn-success... etc
                      </code>
                    </p>
                    <a href="#/" onClick={this.onClick} className="btn btn-default">
                      Default
                    </a>
                    <a href="#/" onClick={this.onClick} className="btn btn-primary">
                      Primary
                    </a>
                    <a href="#/" onClick={this.onClick} className="btn btn-success">
                      Success
                    </a>
                    <a href="#/" onClick={this.onClick} className="btn btn-info">
                      Info
                    </a>
                    <a href="#/" onClick={this.onClick} className="btn btn-warning">
                      Warning
                    </a>
                    <a href="#/" onClick={this.onClick} className="btn btn-danger">
                      Danger
                    </a>
                    <a href="#/"
                      onClick={this.onClick}
                      className="btn btn-default disabled"
                    >
                      Disabled
                    </a>
                    <a href="#/" onClick={this.onClick} className="btn btn-link">
                      Link
                    </a>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-2"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Button Sizes </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p>
                      Large buttons to attract call to action
                      <code>.btn .btn-lg</code>
                    </p>
                    <a href="#/"
                      onClick={this.onClick}
                      className="btn btn-primary btn-lg"
                    >
                      Large button
                    </a>
                    &nbsp;
                    <a href="#/"
                      onClick={this.onClick}
                      className="btn btn-default btn-lg"
                    >
                      Large button
                    </a>
                    <hr className="simple" />
                    <p>
                      The Default button
                      <code>.btn .btn-default</code>
                    </p>
                    <a href="#/" onClick={this.onClick} className="btn btn-primary">
                      Default button
                    </a>
                    &nbsp;
                    <a href="#/" onClick={this.onClick} className="btn btn-default">
                      Default button
                    </a>
                    <hr className="simple" />
                    <p>
                      Small button for elegance
                      <code>.btn .btn-sm</code>
                    </p>
                    <a href="#/"
                      onClick={this.onClick}
                      className="btn btn-primary btn-sm"
                    >
                      Small button
                    </a>
                    &nbsp;
                    <a href="#/"
                      onClick={this.onClick}
                      className="btn btn-default btn-sm"
                    >
                      Small button
                    </a>
                    <hr className="simple" />
                    <p>
                      Extra small button for added info
                      <code>.btn .btn-xs</code>
                    </p>
                    <a href="#/"
                      onClick={this.onClick}
                      className="btn btn-primary btn-xs"
                    >
                      Mini button
                    </a>
                    &nbsp;
                    <a href="#/"
                      onClick={this.onClick}
                      className="btn btn-default btn-xs"
                    >
                      Mini button
                    </a>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-4"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Circle Buttons </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p>
                      Extra Large round buttons
                      <code>.btn-circle .btn-xl</code>
                    </p>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-primary btn-circle btn-xl"
                        >
                          <i className="glyphicon glyphicon-list" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default btn-circle btn-xl"
                        >
                          <i className="glyphicon glyphicon-ok" />
                        </a>
                      </li>
                    </ul>
                    <p>
                      Large round buttons
                      <code>.btn-circle .btn-lg</code>
                    </p>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-primary btn-circle btn-lg"
                        >
                          <i className="glyphicon glyphicon-list" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default btn-circle btn-lg"
                        >
                          <i className="glyphicon glyphicon-ok" />
                        </a>
                      </li>
                    </ul>
                    <p>
                      Default round buttons
                      <code>.btn-circle</code>
                    </p>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-primary btn-circle"
                        >
                          <i className="glyphicon glyphicon-list" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default btn-circle"
                        >
                          <i className="glyphicon glyphicon-ok" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-6"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Drop Down buttons </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p>
                      Button group with dropup/dropdown toggle
                      <code>.btn-group</code>
                    </p>
                    <div className="btn-group dropdown">
                      <button className="btn btn-primary">Drop Down</button>
                      <button
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Another action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#/" onClick={this.onClick}>Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group dropup dropdown">
                      <button className="btn btn-default">Drop Up</button>
                      <button
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Another action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#/" onClick={this.onClick}>Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <hr className="simple" />
                    <p>
                      Default button dropdowns
                      <code>.dropdown-toggle</code>
                    </p>
                    <div className="btn-group dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Action <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Another action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#/" onClick={this.onClick}>Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group dropdown">
                      <button
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Action <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Another action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#/" onClick={this.onClick}>Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <hr className="simple" />
                    <p>
                      Smaller button dropdowns
                      <code>.btn-sm .dropdown-toggle</code>
                    </p>
                    <div className="btn-group dropdown">
                      <button
                        className="btn btn-primary btn-sm dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Action <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Another action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#/" onClick={this.onClick}>Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group dropdown">
                      <button
                        className="btn btn-default btn-sm dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Action <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Another action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#/" onClick={this.onClick}>Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <hr className="simple" />
                    <p>
                      Extra small button dropdowns
                      <code>.btn-xs .dropdown-toggle</code>
                    </p>
                    <div className="btn-group dropdown">
                      <button
                        className="btn btn-primary btn-xs dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Action <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Another action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#/" onClick={this.onClick}>Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group dropdown">
                      <button
                        className="btn btn-default btn-xs dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Action <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Another action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#/" onClick={this.onClick}>Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <hr className="simple" />
                    <h3>
                      Multiple Level Dropdown
                      <small>
                        <span className="label label-warning">New!</span>
                      </small>
                    </h3>
                    <p>
                      Custom created Multiple Level dropdown that works with
                      ease! Simply use the class
                      <code>.dropdown-menu .multi-level</code>
                    </p>
                    <div className="dropdown">
                      <a href="#/"
                        id="dLabel"
                        role="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={this.onClick}
                      >
                        Multi Level <span className="caret" />
                      </a>
                      <ul className="dropdown-menu multi-level" role="menu">
                        <li>
                          <a href="#/" onClick={this.onClick}>Some action</a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>Some other action</a>
                        </li>
                        <li className="divider" />
                        <li className="dropdown-submenu">
                          <a href="#/" tabIndex={-1} onClick={this.onClick}>
                            Hover me for more options
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#/" tabIndex={-1} onClick={this.onClick}>
                                Second level
                              </a>
                            </li>
                            <li className="dropdown-submenu">
                              <a href="#/" onClick={this.onClick}>Even More..</a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="#/" onClick={this.onClick}>3rd level</a>
                                </li>
                                <li>
                                  <a href="#/" onClick={this.onClick}>3rd level</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick}>Second level</a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick}>Second level</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-8"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Button Groups </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p>
                      Group a series of buttons together on a single line with
                      the button group. Wrap a series of buttons with
                      <code>.btn</code>
                      in
                      <code>.btn-group</code>.
                    </p>
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th style={{ width: "25%" }}>Horizontal Group</th>
                              <th style={{ width: "25%" }}>With Icons</th>
                              <th style={{ width: "50%" }}>
                                Multiple Button Groups
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    Left
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    Middle
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    Right
                                  </button>
                                </div>
                              </td>
                              <td>
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    <i className="fa fa-align-left" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    <i className="fa fa-align-center" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    <i className="fa fa-align-right" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    <i className="fa fa-align-justify" />
                                  </button>
                                </div>
                              </td>
                              <td>
                                <div className="btn-toolbar">
                                  <div className="btn-group">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      1
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      2
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      3
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      4
                                    </button>
                                  </div>
                                  <div className="btn-group">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      5
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      6
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      7
                                    </button>
                                  </div>
                                  <div className="btn-group">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      8
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <hr className="simple" />
                    <p>
                      Make a set of buttons appear vertically stacked rather
                      than horizontally by putting it in
                      <code>.btn-group-vertical</code>.
                    </p>
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th style={{ width: "25%" }}>Vertical Group</th>
                              <th style={{ width: "25%" }}>With Dropdown</th>
                              <th style={{ width: "25%" }}>With Icons</th>
                              <th style={{ width: "25%" }}>
                                Multiple Button Groups
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="btn-group-vertical">
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    Top
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    Middle
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                  >
                                    Bottom
                                  </button>
                                </div>
                              </td>
                              <td>
                                <div className="btn-group-vertical">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Button 1
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Button 2
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Button 3
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    Dropdown
                                    <i className="fa fa-caret-down" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a href="#/" onClick={this.onClick}>
                                        Dropdown link
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#/" onClick={this.onClick}>
                                        Dropdown link
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td>
                                <div className="btn btn-group-vertical">
                                  <a href="#/"
                                    className="btn btn-default"
                                    onClick={this.onClick}
                                  >
                                    <i className="fa fa-align-left" />
                                  </a>
                                  <a href="#/"
                                    className="btn btn-default"
                                    onClick={this.onClick}
                                  >
                                    <i className="fa fa-align-center" />
                                  </a>
                                  <a href="#/"
                                    className="btn btn-default"
                                    onClick={this.onClick}
                                  >
                                    <i className="fa fa-align-right" />
                                  </a>
                                  <a href="#/"
                                    className="btn btn-default"
                                    onClick={this.onClick}
                                  >
                                    <i className="fa fa-align-justify" />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="btn-toolbar">
                                  <div className="btn-group-vertical">
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Page 1
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Page 2
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Page 3
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Page 4
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
            </article>
            {/* WIDGET END */}
            {/* NEW WIDGET START */}
            <article className="col-sm-12 col-md-12 col-lg-6">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-1"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2> Mix and match colors </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p className="alert alert-info">
                      Custom buttons with core CSS elements. Mix and match
                      existing classes to come up with unique style buttons.
                      <strong>For example:</strong>
                      <code>.btn .bg-color-blueLight .txt-color-white</code>
                    </p>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-blueLight txt-color-white"
                        >
                          .bg-color-blueLight
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-blue txt-color-white"
                        >
                          .bg-color-blue
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-teal txt-color-white"
                        >
                          .bg-color-teal
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-blueDark txt-color-white"
                        >
                          .bg-color-blueDark
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-green txt-color-white"
                        >
                          .bg-color-green
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-greenDark txt-color-white"
                        >
                          .bg-color-greenDark
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-greenLight txt-color-white"
                        >
                          .bg-color-greenLight
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-purple txt-color-white"
                        >
                          .bg-color-purple
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-magenta txt-color-white"
                        >
                          .bg-color-magenta
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-pink txt-color-white"
                        >
                          .bg-color-pink
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-pinkDark txt-color-white"
                        >
                          .bg-color-pinkDark
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-yellow txt-color-white"
                        >
                          .bg-color-yellow
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-orange txt-color-white"
                        >
                          .bg-color-orange
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-red txt-color-white"
                        >
                          .bg-color-red
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-redLight txt-color-white"
                        >
                          .bg-color-redLight
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-dark"
                        >
                          .btn-default
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-3"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2> Mix and match colors </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p className="alert alert-info">
                      Custom text colors can also be applied
                      <strong>For example:</strong>
                      <code>.txt-color-red</code>
                    </p>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-blueLight"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-blue"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-teal"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-blueDark"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-green"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-greenDark"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-greenLight"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-purple"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-magenta"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-pink"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-pinkDark"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-yellow"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-orange"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default txt-color-red"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                    </ul>
                    <hr className="simple" />
                    <p>
                      Mix and match color with backgrounds
                      <code>.btn .bg-color-blueLight .txt-color-magenta</code>
                    </p>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-blueLight txt-color-magenta"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-blueDark txt-color-teal"
                        >
                          <i className="fa fa-gear fa-3x" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn bg-color-red txt-color-white"
                        >
                          <i className="fa fa-gear fa-4x fa-spin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-5"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Button with icons </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p>
                      Default buttons have a single line of text with or without
                      one or two icons aligned left or right.
                    </p>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/" onClick={this.onClick} className="btn btn-primary">
                          <i className="fa fa-gear" /> Icon Left
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick} className="btn btn-success">
                          <i className="fa fa-gear" /> Both Sides
                          <i className="fa fa-gear" />
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick} className="btn btn-danger">
                          Icon Right <i className="fa fa-gear" />
                        </a>
                      </li>
                    </ul>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/" onClick={this.onClick} className="btn btn-default">
                          <i className="fa fa-gear" /> Icon Left
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick} className="btn btn-default">
                          <i className="fa fa-gear" /> Both Sides
                          <i className="fa fa-gear" />
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick} className="btn btn-default">
                          Icon Right <i className="fa fa-gear" />
                        </a>
                      </li>
                    </ul>
                    <hr className="simple" />
                    <ul className="demo-btns">
                      <li>
                        <div className="btn-group dropdown">
                          <button className="btn bg-color-blueDark txt-color-white">
                            <i className="fa fa-gear" /> Drop Down
                          </button>
                          <button
                            className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <span className="caret" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="btn-group dropdown">
                          <button className="btn bg-color-blueDark txt-color-white">
                            <i className="fa fa-gear" /> Drop Down
                            <i className="fa fa-gear" />
                          </button>
                          <button
                            className="btn btn-success dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <span className="caret" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="btn-group dropdown">
                          <button className="btn bg-color-blueDark txt-color-white">
                            Drop Down <i className="fa fa-gear" />
                          </button>
                          <button
                            className="btn btn-danger dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <span className="caret" />
                          </button>
                        </div>
                      </li>
                    </ul>
                    <ul className="demo-btns">
                      <li>
                        <div className="btn-group dropdown">
                          <button className="btn btn-default">
                            <i className="fa fa-gear" /> Drop Down
                          </button>
                          <button
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <span className="caret" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="btn-group dropdown">
                          <button className="btn btn-default">
                            <i className="fa fa-gear" /> Drop Down
                            <i className="fa fa-gear" />
                          </button>
                          <button
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <span className="caret" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="btn-group dropdown">
                          <button className="btn btn-default">
                            Drop Down <i className="fa fa-gear" />
                          </button>
                          <button
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <span className="caret" />
                          </button>
                        </div>
                      </li>
                    </ul>
                    <hr className="simple" />
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-primary btn-xs"
                        >
                          <i className="fa fa-gear" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default btn-sm"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick} className="btn btn-primary">
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-primary btn-lg"
                        >
                          <i className="fa fa-gear fa-lg" />
                        </a>
                      </li>
                    </ul>
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-primary btn-xs"
                        >
                          <i className="fa fa-gear" />
                          <i className="fa fa-caret-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-default btn-sm"
                        >
                          <i className="fa fa-gear fa-lg" />
                          <i className="fa fa-caret-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick} className="btn btn-primary">
                          <i className="fa fa-gear fa-lg" />
                          <i className="fa fa-caret-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-primary btn-lg"
                        >
                          <i className="fa fa-gear fa-lg" />
                          <i className="fa fa-caret-down" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-7"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Label Buttons </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <ul className="demo-btns">
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-success"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-ok" />
                          </span>
                          Success
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-danger"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-remove" />
                          </span>
                          Cancel
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-warning"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-bookmark" />
                          </span>
                          Bookmark
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-primary"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-camera" />
                          </span>
                          Camera
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-default"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-chevron-left" />
                          </span>
                          Left
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-default"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-chevron-right" />
                          </span>
                          Right
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-success"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-thumbs-up" />
                          </span>
                          Thumbs Up
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-danger"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-thumbs-down" />
                          </span>
                          Thumbs Down
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-info"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-refresh" />
                          </span>
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-labeled btn-danger"
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-trash" />
                          </span>
                          Trash
                        </a>
                      </li>
                      <li>
                        <a href="#/"
                          className="btn btn-success btn-labeled"
                          onClick={this.onClick}
                        >
                          <span className="btn-label">
                            <i className="glyphicon glyphicon-info-sign" />
                          </span>
                          Info Web
                        </a>
                      </li>
                    </ul>
                    <pre>
                      &lt;button type="button" class="btn btn-labeled
                      btn-success"&gt;{"\n"} &lt;span class="btn-label"&gt;
                      {"\n"}
                      {"  "}&lt;i class="glyphicon glyphicon-ok"&gt;&lt;/i&gt;
                      {"\n"} &lt;/&gt;Success{"\n"}&lt;/button&gt;{"\n"}
                    </pre>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-9"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
                sortable={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-hand-o-up" />
                  </span>
                  <h2>Block Buttons </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <p>
                      Block buttons
                      <code>.btn .btn-block</code>
                    </p>
                    <div className="well">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Block level button
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-sm btn-block"
                      >
                        Block level small button
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-xs btn-block"
                      >
                        Block level extra small button
                      </button>
                    </div>
                    <hr className="simple" />
                    <p>
                      Block group buttons
                      <code>.btn-group .btn-group-justified</code>
                    </p>
                    <div className="well">
                      <div className="btn-group btn-group-justified">
                        <a href="#/" onClick={this.onClick} className="btn btn-default">
                          Left
                        </a>
                        <a href="#/" onClick={this.onClick} className="btn btn-default">
                          Middle
                        </a>
                        <a href="#/" onClick={this.onClick} className="btn btn-default">
                          Right
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
            </article>
            {/* WIDGET END */}
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
