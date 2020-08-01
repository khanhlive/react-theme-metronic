import React from "react";

import { WidgetGrid, JarvisWidget } from "../../../common";

export default class BlankPage extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <WidgetGrid>
          <div className="well">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search..."
              />
              <div className="input-group-btn">
                <button className="btn btn-default btn-primary" type="button">
                  <i className="fa fa-search" /> Search
                </button>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row">
            {/* NEW WIDGET START */}
            <article className="col-sm-12 col-md-12 col-lg-6">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-0"
                colorbutton={false}
                editbutton={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-eye" />
                  </span>
                  <h2>Default Elements</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <form className="form-horizontal">
                      <fieldset>
                        <legend>Default Form Elements</legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Text field
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              placeholder="Default Text Field"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Auto Complete
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              placeholder="Type somethine..."
                              type="text"
                              list="list"
                            />
                            <datalist id="list">
                              <option value="Alexandra">Alexandra</option>
                              <option value="Alice">Alice</option>
                              <option value="Anastasia">Anastasia</option>
                              <option value="Avelina">Avelina</option>
                              <option value="Basilia">Basilia</option>
                              <option value="Beatrice">Beatrice</option>
                              <option value="Cassandra">Cassandra</option>
                              <option value="Cecil">Cecil</option>
                              <option value="Clemencia">Clemencia</option>
                              <option value="Desiderata">Desiderata</option>
                              <option value="Dionisia">Dionisia</option>
                              <option value="Edith">Edith</option>
                              <option value="Eleanora">Eleanora</option>
                              <option value="Elizabeth">Elizabeth</option>
                              <option value="Emma">Emma</option>
                              <option value="Felicia">Felicia</option>
                              <option value="Florence">Florence</option>
                              <option value="Galiana">Galiana</option>
                              <option value="Grecia">Grecia</option>
                              <option value="Helen">Helen</option>
                              <option value="Helewisa">Helewisa</option>
                              <option value="Idonea">Idonea</option>
                              <option value="Isabel">Isabel</option>
                              <option value="Joan">Joan</option>
                              <option value="Juliana">Juliana</option>
                              <option value="Karla">Karla</option>
                              <option value="Karyn">Karyn</option>
                              <option value="Kate">Kate</option>
                              <option value="Lakisha">Lakisha</option>
                              <option value="Lana">Lana</option>
                              <option value="Laura">Laura</option>
                              <option value="Leona">Leona</option>
                              <option value="Mandy">Mandy</option>
                              <option value="Margaret">Margaret</option>
                              <option value="Maria">Maria</option>
                              <option value="Nanacy">Nanacy</option>
                              <option value="Nicole">Nicole</option>
                              <option value="Olga">Olga</option>
                              <option value="Pamela">Pamela</option>
                              <option value="Patricia">Patricia</option>
                              <option value="Qiana">Qiana</option>
                              <option value="Rachel">Rachel</option>
                              <option value="Ramona">Ramona</option>
                              <option value="Samantha">Samantha</option>
                              <option value="Sandra">Sandra</option>
                              <option value="Tanya">Tanya</option>
                              <option value="Teresa">Teresa</option>
                              <option value="Ursula">Ursula</option>
                              <option value="Valerie">Valerie</option>
                              <option value="Veronica">Veronica</option>
                              <option value="Wilma">Wilma</option>
                              <option value="Yasmin">Yasmin</option>
                              <option value="Zelma">Zelma</option>
                            </datalist>
                            <p className="note">
                              <strong>Note:</strong> works in Chrome, Firefox,
                              Opera and IE10.
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Password field
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              placeholder="Password field"
                              type="password"
                              defaultValue="mypassword"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Textarea
                          </label>
                          <div className="col-md-10">
                            <textarea
                              className="form-control"
                              placeholder="Textarea"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Unstyled Checkbox</legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Checkbox default
                          </label>
                          <div className="col-md-10">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" />
                                Checkbox 1
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" />
                                Checkbox 2
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" />
                                Checkbox 3
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Inline
                          </label>
                          <div className="col-md-10">
                            <label className="checkbox-inline">
                              <input type="checkbox" />
                              Checkbox 2
                            </label>
                            <label className="checkbox-inline">
                              <input type="checkbox" />
                              Checkbox 2
                            </label>
                            <label className="checkbox-inline">
                              <input type="checkbox" />
                              Checkbox 3
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Unstyled Radiobox</legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Radios default
                          </label>
                          <div className="col-md-10">
                            <div className="radio">
                              <label>
                                <input type="radio" />
                                Radiobox 1
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" />
                                Radiobox 2
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" />
                                Radiobox 3
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Inline
                          </label>
                          <div className="col-md-10">
                            <label className="radio radio-inline">
                              <input type="radio" />
                              Radiobox 1
                            </label>
                            <label className="radio radio-inline">
                              <input type="radio" />
                              Radiobox 2
                            </label>
                            <label className="radio radio-inline">
                              <input type="radio" />
                              Radiobox 3
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>File inputs</legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            File input
                          </label>
                          <div className="col-md-10">
                            <input
                              type="file"
                              className="btn btn-default"
                              id="exampleInputFile1"
                            />
                            <p className="help-block">some help text here.</p>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="demo-switcher-1">
                        <legend>Styled Checkbox and Radiobox</legend>
                        <span className="toggle-demo">
                          <span>Styles: </span>
                          <span
                            className="btn-group btn-group-justified"
                            data-toggle="buttons"
                          >
                            <label className="btn btn-default btn-xs active">
                              <input
                                type="radio"
                                name="demo-switcher-1"
                                defaultValue="style-0"
                                ng-model="activeStyle"
                              />
                              1
                            </label>
                            <label className="btn btn-default btn-xs">
                              <input
                                type="radio"
                                name="demo-switcher-1"
                                defaultValue="style-1"
                                ng-model="activeStyle"
                              />
                              2
                            </label>
                            <label className="btn btn-default btn-xs">
                              <input
                                type="radio"
                                name="demo-switcher-1"
                                defaultValue="style-2"
                                ng-model="activeStyle"
                              />
                              3
                            </label>
                            <label className="btn btn-default btn-xs">
                              <input
                                type="radio"
                                name="demo-switcher-1"
                                defaultValue="style-3"
                              />
                              4
                            </label>
                          </span>
                        </span>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Checkbox Styles
                          </label>
                          <div className="col-md-10">
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  className="checkbox style-0"
                                  defaultChecked="checked"
                                />
                                <span>Checkbox 1</span>
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  className="checkbox style-0"
                                />
                                <span>Checkbox 2</span>
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  className="checkbox style-0"
                                />
                                <span>Checkbox 3</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Inline
                          </label>
                          <div className="col-md-10">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                className="checkbox style-0"
                              />
                              <span>Checkbox 1</span>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                className="checkbox style-0"
                              />
                              <span>Checkbox 2</span>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                className="checkbox style-0"
                              />
                              <span>Checkbox 3</span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="demo-switcher-1">
                        <legend />
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Radios Styles
                          </label>
                          <div className="col-md-10">
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  className="radiobox style-0"
                                  defaultChecked="checked"
                                  name="style-0"
                                />
                                <span>Radiobox 1</span>
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  className="radiobox style-0"
                                  name="style-0"
                                />
                                <span>Radiobox 2</span>
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  className="radiobox style-0"
                                  name="style-0"
                                />
                                <span>Radiobox 3</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Inline
                          </label>
                          <div className="col-md-10">
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                className="radiobox"
                                name="style-0a"
                              />
                              <span>Radiobox 1</span>
                            </label>
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                className="radiobox"
                                name="style-0a"
                              />
                              <span>Radiobox 2</span>
                            </label>
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                className="radiobox"
                                name="style-0a"
                              />
                              <span>Radiobox 3</span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Unstyled Select</legend>
                        <div className="form-group">
                          <label
                            className="col-md-2 control-label"
                            htmlFor="select-1"
                          >
                            Select
                          </label>
                          <div className="col-md-10">
                            <select className="form-control" id="select-1">
                              <option>Amsterdam</option>
                              <option>Atlanta</option>
                              <option>Baltimore</option>
                              <option>Boston</option>
                              <option>Buenos Aires</option>
                              <option>Calgary</option>
                              <option>Chicago</option>
                              <option>Denver</option>
                              <option>Dubai</option>
                              <option>Frankfurt</option>
                              <option>Hong Kong</option>
                              <option>Honolulu</option>
                              <option>Houston</option>
                              <option>Kuala Lumpur</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>Melbourne</option>
                              <option>Mexico City</option>
                              <option>Miami</option>
                              <option>Minneapolis</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="col-md-2 control-label"
                            htmlFor="multiselect1"
                          >
                            Multiple select
                          </label>
                          <div className="col-md-10">
                            <select
                              multiple="multiple"
                              id="multiselect1"
                              className="form-control custom-scroll"
                              title="Click to Select a City"
                              defaultValue={["Atlanta", "Denver"]}
                            >
                              <option value="Amsterdam">Amsterdam</option>
                              <option value="Atlanta">Atlanta</option>
                              <option value="Baltimore">Baltimore</option>
                              <option value="Boston">Boston</option>
                              <option value="Buenos Aires">Buenos Aires</option>
                              <option value="Calgary">Calgary</option>
                              <option value="Chicago">Chicago</option>
                              <option value="Denver">Denver</option>
                              <option value="Dubai">Dubai</option>
                              <option value="Frankfurt">Frankfurt</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Honolulu">Honolulu</option>
                              <option value="Houston">Houston</option>
                              <option value="Kuala Lumpur">Kuala Lumpur</option>
                              <option value="London">London</option>
                              <option value="Los Angeles">Los Angeles</option>
                              <option value="Melbourne">Melbourne</option>
                              <option value="Mexico City">Mexico City</option>
                              <option value="Miami">Miami</option>
                              <option value="Minneapolis">Minneapolis</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Input States</legend>
                        <div className="form-group has-warning">
                          <label className="col-md-2 control-label">
                            Input warning
                          </label>
                          <div className="col-md-10">
                            <div className="input-group">
                              <input className="form-control" type="text" />
                              <span className="input-group-addon">
                                <i className="fa fa-warning" />
                              </span>
                            </div>
                            <span className="help-block">
                              Something may have gone wrong
                            </span>
                          </div>
                        </div>
                        <div className="form-group has-error">
                          <label className="col-md-2 control-label">
                            Input error
                          </label>
                          <div className="col-md-10">
                            <div className="input-group">
                              <input className="form-control" type="text" />
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-remove-circle" />
                              </span>
                            </div>
                            <span className="help-block">
                              <i className="fa fa-warning" /> Please correct the
                              error
                            </span>
                          </div>
                        </div>
                        <div className="form-group has-success">
                          <label className="col-md-2 control-label">
                            Input success
                          </label>
                          <div className="col-md-10">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="fa fa-dollar" />
                              </span>
                              <input className="form-control" type="text" />
                              <span className="input-group-addon">
                                <i className="fa fa-check" />
                              </span>
                            </div>
                            <span className="help-block">
                              Something may have gone wrong
                            </span>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Input sizes</legend>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Extra Small Input
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control input-xs"
                              placeholder=".input-xs"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Small Input
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control input-sm"
                              placeholder=".input-sm"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Default Input
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              placeholder="Default input"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Large Input
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control input-lg"
                              placeholder=".input-lg"
                              type="text"
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Select Sizes</legend>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Small Select
                          </label>
                          <div className="col-md-10">
                            <select className="form-control input-sm">
                              <option>Amsterdam</option>
                              <option>Atlanta</option>
                              <option>Baltimore</option>
                              <option>Boston</option>
                              <option>Buenos Aires</option>
                              <option>Calgary</option>
                              <option>Chicago</option>
                              <option>Denver</option>
                              <option>Dubai</option>
                              <option>Frankfurt</option>
                              <option>Hong Kong</option>
                              <option>Honolulu</option>
                              <option>Houston</option>
                              <option>Kuala Lumpur</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>Melbourne</option>
                              <option>Mexico City</option>
                              <option>Miami</option>
                              <option>Minneapolis</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Default Select
                          </label>
                          <div className="col-md-10">
                            <select className="form-control">
                              <option>Amsterdam</option>
                              <option>Atlanta</option>
                              <option>Baltimore</option>
                              <option>Boston</option>
                              <option>Buenos Aires</option>
                              <option>Calgary</option>
                              <option>Chicago</option>
                              <option>Denver</option>
                              <option>Dubai</option>
                              <option>Frankfurt</option>
                              <option>Hong Kong</option>
                              <option>Honolulu</option>
                              <option>Houston</option>
                              <option>Kuala Lumpur</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>Melbourne</option>
                              <option>Mexico City</option>
                              <option>Miami</option>
                              <option>Minneapolis</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Large Select
                          </label>
                          <div className="col-md-10">
                            <select className="form-control input-lg">
                              <option>Amsterdam</option>
                              <option>Atlanta</option>
                              <option>Baltimore</option>
                              <option>Boston</option>
                              <option>Buenos Aires</option>
                              <option>Calgary</option>
                              <option>Chicago</option>
                              <option>Denver</option>
                              <option>Dubai</option>
                              <option>Frankfurt</option>
                              <option>Hong Kong</option>
                              <option>Honolulu</option>
                              <option>Houston</option>
                              <option>Kuala Lumpur</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>Melbourne</option>
                              <option>Mexico City</option>
                              <option>Miami</option>
                              <option>Minneapolis</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Prepend &amp; Append</legend>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Prepended Input
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <span className="input-group-addon">@</span>
                                  <input
                                    className="form-control"
                                    id="prepend"
                                    placeholder="Username"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            W/ input &amp; radios
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <span className="checkbox">
                                      <label>
                                        <input
                                          type="checkbox"
                                          className="checkbox style-0"
                                          defaultChecked="checked"
                                        />
                                        <span />
                                      </label>
                                    </span>
                                  </span>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2" />
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <input
                                    className="form-control"
                                    placeholder="With switch"
                                    type="text"
                                  />
                                  <span className="input-group-addon">
                                    <span className="onoffswitch">
                                      <input
                                        type="checkbox"
                                        name="start_interval"
                                        className="onoffswitch-checkbox"
                                        id="st3"
                                      />
                                      <label
                                        className="onoffswitch-label"
                                        htmlFor="st3"
                                      >
                                        <span
                                          className="onoffswitch-inner"
                                          data-swchon-text="YES"
                                          data-swchoff-text="NO"
                                        />
                                        <span className="onoffswitch-switch" />
                                      </label>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2" />
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <span className="radio">
                                      <label>
                                        <input
                                          type="radio"
                                          className="radiobox style-0"
                                          name="style-0a2"
                                        />
                                        <span> Left</span>
                                      </label>
                                    </span>
                                  </span>
                                  <input className="form-control" type="text" />
                                  <span className="input-group-addon">
                                    <span className="radio">
                                      <label>
                                        <input
                                          type="radio"
                                          className="radiobox style-0"
                                          name="style-0a2"
                                        />
                                        <span> Right</span>
                                      </label>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="append"
                          >
                            Appended Input
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <input
                                    className="form-control"
                                    id="append"
                                    type="text"
                                  />
                                  <span className="input-group-addon">.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="appendprepend"
                          >
                            Combined
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <span className="input-group-addon">$</span>
                                  <input
                                    className="form-control"
                                    id="appendprepend"
                                    type="text"
                                  />
                                  <span className="input-group-addon">.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="appendbutton"
                          >
                            With buttons
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <input
                                    className="form-control"
                                    id="appendbutton"
                                    type="text"
                                  />
                                  <div className="input-group-btn">
                                    <button
                                      className="btn btn-default"
                                      type="button"
                                    >
                                      Search
                                    </button>
                                    <button
                                      className="btn btn-default"
                                      type="button"
                                    >
                                      Options
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            With dropdowns
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <input type="text" className="form-control" />
                                  <div className="input-group-btn">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                      tabIndex={-1}
                                    >
                                      Action
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default dropdown-toggle"
                                      data-toggle="dropdown"
                                      tabIndex={-1}
                                    >
                                      <span className="caret" />
                                    </button>
                                    <ul
                                      className="dropdown-menu pull-right"
                                      role="menu"
                                    >
                                      <li>
                                        <a href="#/" onClick={this.onClick}>Action</a>
                                      </li>
                                      <li>
                                        <a href="#/" onClick={this.onClick}>
                                          Another action
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#/" onClick={this.onClick}>
                                          Something else here
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#/" onClick={this.onClick}>Cancel</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2" />
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <div className="input-group-btn">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                      tabIndex={-1}
                                    >
                                      Action
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default dropdown-toggle"
                                      data-toggle="dropdown"
                                      tabIndex={-1}
                                    >
                                      <span className="caret" />
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                      <li>
                                        <a href="#/" onClick={this.onClick}>Action</a>
                                      </li>
                                      <li>
                                        <a href="#/" onClick={this.onClick}>
                                          Another action
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#/" onClick={this.onClick}>
                                          Something else here
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#/" onClick={this.onClick}>Cancel</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Flexible Input fields with icons</legend>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Addon Large
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-lg">
                              <input
                                type="text"
                                placeholder="Email"
                                className="form-control"
                              />
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Addon Medium
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-md">
                              <input
                                type="text"
                                placeholder="Email"
                                className="form-control"
                              />
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Addon Small
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-sm">
                              <input
                                type="text"
                                placeholder="Email"
                                className="form-control"
                              />
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Select Large
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-lg">
                              <select className="form-control">
                                <option>Select Option</option>
                                <option>Sample</option>
                                <option>Sample</option>
                              </select>
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Select Medium
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-md">
                              <select className="form-control">
                                <option>Select Option</option>
                                <option>Sample</option>
                                <option>Sample</option>
                              </select>
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Select Small
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-sm">
                              <select className="form-control">
                                <option>Select Option</option>
                                <option>Sample</option>
                                <option>Sample</option>
                              </select>
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Prepended Large
                          </label>
                          <div className="col-md-10">
                            <div className="input-group input-group-lg">
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-filter" />
                              </span>
                              <div className="icon-addon addon-lg">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="form-control"
                                />
                                <label
                                  htmlFor="email"
                                  className="glyphicon glyphicon-search"
                                  rel="tooltip"
                                  title="email"
                                />
                              </div>
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default"
                                  type="button"
                                >
                                  Go!
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Prepended Medium
                          </label>
                          <div className="col-md-10">
                            <div className="input-group input-group-md">
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-filter" />
                              </span>
                              <div className="icon-addon addon-md">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="form-control"
                                />
                                <label
                                  htmlFor="email"
                                  className="glyphicon glyphicon-search"
                                  rel="tooltip"
                                  title="email"
                                />
                              </div>
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default"
                                  type="button"
                                >
                                  Go!
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Prepended Small
                          </label>
                          <div className="col-md-10">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-filter" />
                              </span>
                              <div className="icon-addon addon-sm">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="form-control"
                                />
                                <label
                                  htmlFor="email"
                                  className="glyphicon glyphicon-search"
                                  rel="tooltip"
                                  title="email"
                                />
                              </div>
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default"
                                  type="button"
                                >
                                  Go!
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Simple input with icons</legend>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Input with icon
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-icon-left">
                                  <i className="fa fa-microphone" />
                                  <input
                                    className="form-control"
                                    placeholder="Left Icon"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            With right icon
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-icon-right">
                                  <i className="fa fa-microphone" />
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Input with spinner
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <input
                                  className="form-control ui-autocomplete-loading"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="form-actions">
                        <div className="row">
                          <div className="col-md-12">
                            <button className="btn btn-default" type="submit">
                              Cancel
                            </button>
                            <button className="btn btn-primary" type="submit">
                              <i className="fa fa-save" />
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-eye" />
                  </span>
                  <h2>Horizontal Form</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <form>
                      <fieldset>
                        <input name="authenticity_token" type="hidden" />
                        <div className="form-group">
                          <label>Text field</label>
                          <input
                            className="form-control"
                            placeholder="Text field"
                            type="text"
                          />
                        </div>
                        <div className="form-group">
                          <label>Password field</label>
                          <input
                            className="form-control"
                            placeholder="Password"
                            type="password"
                            defaultValue="mypassword"
                          />
                        </div>
                        <div className="form-group">
                          <label>Textarea</label>
                          <textarea
                            className="form-control"
                            placeholder="Textarea"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <label>Readonly</label>
                          <span className="form-control">Read only text</span>
                        </div>
                      </fieldset>
                      <div className="form-actions">
                        <div className="btn btn-primary btn-lg">
                          <i className="fa fa-save" />
                          Submit
                        </div>
                      </div>
                    </form>
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
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-eye" />
                  </span>
                  <h2>Inline Form</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <div
                      className="alert adjusted alert-info fade in"
                      data-dismiss="alert"
                    >
                      <i className="fa-fw fa-lg fa fa-exclamation" />
                      <strong>Hey hey!</strong> This is an inline form!
                    </div>
                    <form className="form-inline">
                      <fieldset>
                        <div className="form-group">
                          <label
                            className="sr-only"
                            htmlFor="exampleInputEmail2"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail2"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="form-group">
                          <label
                            className="sr-only"
                            htmlFor="exampleInputPassword2"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword2"
                            placeholder="Password"
                          />
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" className="checkbox" />
                            <span>Remember me </span>
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Sign in
                        </button>
                      </fieldset>
                    </form>
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
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-eye-slash" />
                  </span>
                  <h2>Disabled Elements</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <form className="form-horizontal">
                      <fieldset>
                        <legend>Disabled Form Elements</legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Text field
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              disabled="disabled"
                              placeholder="Default Text Field"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Auto Complete
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              disabled="disabled"
                              placeholder="Type somethine..."
                              type="text"
                              list="list"
                            />
                            <p className="note">
                              <strong>Note:</strong> works in Chrome, Firefox,
                              Opera and IE10.
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Password field
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              disabled="disabled"
                              placeholder="Password field"
                              type="password"
                              defaultValue="mypassword"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Textarea
                          </label>
                          <div className="col-md-10">
                            <textarea
                              className="form-control"
                              disabled="disabled"
                              placeholder="Textarea"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>
                          Unstyled Checkbox <small>(disabled)</small>
                        </legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Checkbox
                          </label>
                          <div className="col-md-10">
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  disabled="disabled"
                                  name="checkbox-3"
                                  defaultValue
                                />
                                Checkbox 1
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  disabled="disabled"
                                  name="checkbox-3"
                                  defaultValue
                                />
                                Checkbox 2
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  disabled="disabled"
                                  name="checkbox-3"
                                  defaultValue
                                />
                                Checkbox 3
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Inline Checkbox
                          </label>
                          <div className="col-md-10">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                disabled="disabled"
                                name="checkbox-4"
                                defaultValue
                              />
                              Checkbox 1
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                disabled="disabled"
                                name="checkbox-4"
                                defaultValue
                              />
                              Checkbox 2
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                disabled="disabled"
                                name="checkbox-4"
                                defaultValue
                              />
                              Checkbox 3
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>
                          Unstyled Radiobox <small>(disabled)</small>
                        </legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Radios
                          </label>
                          <div className="col-md-10">
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  disabled="disabled"
                                  name="radio-3"
                                  defaultValue
                                />
                                Radiobox 1
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  disabled="disabled"
                                  name="radio-3"
                                  defaultValue
                                />
                                Radiobox 2
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  disabled="disabled"
                                  name="radio-3"
                                  defaultValue
                                />
                                Radiobox 3
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Inline Radiobox
                          </label>
                          <div className="col-md-10">
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                disabled="disabled"
                                name="radio-4"
                                defaultValue
                              />
                              Radiobox 1
                            </label>
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                disabled="disabled"
                                name="radio-4"
                                defaultValue
                              />
                              Radiobox 2
                            </label>
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                disabled="disabled"
                                name="radio-4"
                                defaultValue
                              />
                              Radiobox 3
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>
                          File inputs <small>(disabled)</small>
                        </legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            File input
                          </label>
                          <div className="col-md-10">
                            <input
                              type="file"
                              className="btn btn-default"
                              disabled="disabled"
                              id="exampleInputFile2"
                            />
                            <p className="help-block">some help text here.</p>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="demo-switcher-1">
                        <legend>
                          Styled Checkbox and Radiobox <small>(disabled)</small>
                        </legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Checkbox Styles
                          </label>
                          <div className="col-md-10">
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  className="checkbox style-0"
                                  defaultChecked="checked"
                                  disabled="disabled"
                                />
                                <span>Checkbox 1</span>
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  className="checkbox style-0"
                                  disabled="disabled"
                                />
                                <span>Checkbox 2</span>
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  className="checkbox style-0"
                                  disabled="disabled"
                                />
                                <span>Checkbox 3</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Inline
                          </label>
                          <div className="col-md-10">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                className="checkbox style-0"
                                disabled="disabled"
                              />
                              <span>Checkbox 1</span>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                className="checkbox style-0"
                                disabled="disabled"
                              />
                              <span>Checkbox 2</span>
                            </label>
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                className="checkbox style-0"
                                disabled="disabled"
                              />
                              <span>Checkbox 3</span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="demo-switcher-1">
                        <legend />
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Radios Styles
                          </label>
                          <div className="col-md-10">
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  className="radiobox style-0"
                                  defaultChecked="checked"
                                  disabled="disabled"
                                  name="style-0"
                                />
                                <span>Radiobox 1</span>
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  className="radiobox style-0"
                                  disabled="disabled"
                                  name="style-0"
                                />
                                <span>Radiobox 2</span>
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  className="radiobox style-0"
                                  disabled="disabled"
                                  name="style-0"
                                />
                                <span>Radiobox 3</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Inline
                          </label>
                          <div className="col-md-10">
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                className="radiobox style-0"
                                disabled="disabled"
                                name="style-0a"
                              />
                              <span>Radiobox 1</span>
                            </label>
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                className="radiobox style-0"
                                disabled="disabled"
                                name="style-0a"
                              />
                              <span>Radiobox 2</span>
                            </label>
                            <label className="radio radio-inline">
                              <input
                                type="radio"
                                className="radiobox style-0"
                                disabled="disabled"
                                name="style-0a"
                              />
                              <span>Radiobox 3</span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Unstyled Select</legend>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Select
                          </label>
                          <div className="col-md-10">
                            <select
                              className="form-control"
                              disabled="disabled"
                            >
                              <option>Amsterdam</option>
                              <option>Atlanta</option>
                              <option>Baltimore</option>
                              <option>Boston</option>
                              <option>Buenos Aires</option>
                              <option>Calgary</option>
                              <option>Chicago</option>
                              <option>Denver</option>
                              <option>Dubai</option>
                              <option>Frankfurt</option>
                              <option>Hong Kong</option>
                              <option>Honolulu</option>
                              <option>Houston</option>
                              <option>Kuala Lumpur</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>Melbourne</option>
                              <option>Mexico City</option>
                              <option>Miami</option>
                              <option>Minneapolis</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 control-label">
                            Multiple select
                          </label>
                          <div className="col-md-10">
                            <select
                              multiple="multiple"
                              disabled="disabled"
                              className="form-control custom-scroll"
                              title="Click to Select a City"
                              defaultValue={["Atlanta", "Honolulu"]}
                            >
                              <option value="Amsterdam">Amsterdam</option>
                              <option value="Atlanta">Atlanta</option>
                              <option value="Baltimore">Baltimore</option>
                              <option value="Boston">Boston</option>
                              <option value="Buenos Aires">Buenos Aires</option>
                              <option value="Calgary">Calgary</option>
                              <option value="Chicago">Chicago</option>
                              <option value="Denver">Denver</option>
                              <option value="Dubai">Dubai</option>
                              <option value="Frankfurt">Frankfurt</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Honolulu">Honolulu</option>
                              <option value="Houston">Houston</option>
                              <option value="Kuala Lumpur">Kuala Lumpur</option>
                              <option value="London">London</option>
                              <option value="Los Angeles">Los Angeles</option>
                              <option value="Melbourne">Melbourne</option>
                              <option value="Mexico City">Mexico City</option>
                              <option value="Miami">Miami</option>
                              <option value="Minneapolis">Minneapolis</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>
                          Input States <small>(disabled)</small>
                        </legend>
                        <div className="form-group has-warning">
                          <label className="col-md-2 control-label">
                            Input warning
                          </label>
                          <div className="col-md-10">
                            <div className="input-group">
                              <input
                                className="form-control"
                                disabled="disabled"
                                type="text"
                              />
                              <span className="input-group-addon">
                                <i className="fa fa-warning" />
                              </span>
                            </div>
                            <span className="help-block">
                              Something may have gone wrong
                            </span>
                          </div>
                        </div>
                        <div className="form-group has-error">
                          <label className="col-md-2 control-label">
                            Input error
                          </label>
                          <div className="col-md-10">
                            <div className="input-group">
                              <input
                                className="form-control"
                                disabled="disabled"
                                type="text"
                              />
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-remove-circle" />
                              </span>
                            </div>
                            <span className="help-block">
                              <i className="fa fa-warning" /> Please correct the
                              error
                            </span>
                          </div>
                        </div>
                        <div className="form-group has-success">
                          <label className="col-md-2 control-label">
                            Input success
                          </label>
                          <div className="col-md-10">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="fa fa-dollar" />
                              </span>
                              <input
                                className="form-control"
                                disabled="disabled"
                                type="text"
                              />
                              <span className="input-group-addon">
                                <i className="fa fa-check" />
                              </span>
                            </div>
                            <span className="help-block">
                              Something may have gone wrong
                            </span>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>
                          Input sizes <small>(disabled)</small>
                        </legend>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Extra Small Input
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control input-xs"
                              disabled="disabled"
                              placeholder=".input-xs"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Small Input
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control input-sm"
                              disabled="disabled"
                              placeholder=".input-sm"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Default Input
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              disabled="disabled"
                              placeholder="Default input"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Large Input
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control input-lg"
                              disabled="disabled"
                              placeholder=".input-lg"
                              type="text"
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>
                          Select Sizes <small>(disabled)</small>
                        </legend>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Small Select
                          </label>
                          <div className="col-md-10">
                            <select
                              className="form-control input-sm"
                              disabled="disabled"
                            >
                              <option>Amsterdam</option>
                              <option>Atlanta</option>
                              <option>Baltimore</option>
                              <option>Boston</option>
                              <option>Buenos Aires</option>
                              <option>Calgary</option>
                              <option>Chicago</option>
                              <option>Denver</option>
                              <option>Dubai</option>
                              <option>Frankfurt</option>
                              <option>Hong Kong</option>
                              <option>Honolulu</option>
                              <option>Houston</option>
                              <option>Kuala Lumpur</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>Melbourne</option>
                              <option>Mexico City</option>
                              <option>Miami</option>
                              <option>Minneapolis</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Default Select
                          </label>
                          <div className="col-md-10">
                            <select
                              className="form-control"
                              disabled="disabled"
                            >
                              <option>Amsterdam</option>
                              <option>Atlanta</option>
                              <option>Baltimore</option>
                              <option>Boston</option>
                              <option>Buenos Aires</option>
                              <option>Calgary</option>
                              <option>Chicago</option>
                              <option>Denver</option>
                              <option>Dubai</option>
                              <option>Frankfurt</option>
                              <option>Hong Kong</option>
                              <option>Honolulu</option>
                              <option>Houston</option>
                              <option>Kuala Lumpur</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>Melbourne</option>
                              <option>Mexico City</option>
                              <option>Miami</option>
                              <option>Minneapolis</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Large Select
                          </label>
                          <div className="col-md-10">
                            <select
                              className="form-control input-lg"
                              disabled="disabled"
                            >
                              <option>Amsterdam</option>
                              <option>Atlanta</option>
                              <option>Baltimore</option>
                              <option>Boston</option>
                              <option>Buenos Aires</option>
                              <option>Calgary</option>
                              <option>Chicago</option>
                              <option>Denver</option>
                              <option>Dubai</option>
                              <option>Frankfurt</option>
                              <option>Hong Kong</option>
                              <option>Honolulu</option>
                              <option>Houston</option>
                              <option>Kuala Lumpur</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>Melbourne</option>
                              <option>Mexico City</option>
                              <option>Miami</option>
                              <option>Minneapolis</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>
                          Prepend &amp; Append <small>(disabled)</small>
                        </legend>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Prepended Input
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <span className="input-group-addon">@</span>
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    placeholder="Username"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="append"
                          >
                            Appended Input
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    type="text"
                                  />
                                  <span className="input-group-addon">.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            W/ input &amp; radios
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <span className="checkbox">
                                      <label>
                                        <input
                                          type="checkbox"
                                          disabled="disabled"
                                          className="checkbox style-0"
                                          defaultChecked="checked"
                                        />
                                        <span />
                                      </label>
                                    </span>
                                  </span>
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2" />
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    placeholder="With switch"
                                    type="text"
                                  />
                                  <span className="input-group-addon">
                                    <span className="onoffswitch">
                                      <input
                                        type="checkbox"
                                        name="start_interval"
                                        disabled="disabled"
                                        className="onoffswitch-checkbox"
                                        id="st3a"
                                      />
                                      <label
                                        className="onoffswitch-label"
                                        htmlFor="st3a"
                                      >
                                        <span
                                          className="onoffswitch-inner"
                                          data-swchon-text="YES"
                                          data-swchoff-text="NO"
                                        />
                                        <span className="onoffswitch-switch" />
                                      </label>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2" />
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <span className="radio">
                                      <label>
                                        <input
                                          type="radio"
                                          disabled="disabled"
                                          className="radiobox style-0"
                                          name="style-0t2a"
                                        />
                                        <span> Left</span>
                                      </label>
                                    </span>
                                  </span>
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    type="text"
                                  />
                                  <span className="input-group-addon">
                                    <span className="radio">
                                      <label>
                                        <input
                                          type="radio"
                                          disabled="disabled"
                                          className="radiobox style-0"
                                          name="style-0t2a"
                                        />
                                        <span> Right</span>
                                      </label>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Combined
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <span className="input-group-addon">$</span>
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    type="text"
                                  />
                                  <span className="input-group-addon">.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="appendbutton"
                          >
                            With buttons
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    type="text"
                                  />
                                  <div className="input-group-btn">
                                    <button
                                      className="btn btn-default"
                                      disabled="disabled"
                                      type="button"
                                    >
                                      Search
                                    </button>
                                    <button
                                      className="btn btn-default"
                                      disabled="disabled"
                                      type="button"
                                    >
                                      Options
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            With dropdowns
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled="disabled"
                                  />
                                  <div className="input-group-btn">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                      tabIndex={-1}
                                      disabled="disabled"
                                    >
                                      Action
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default dropdown-toggle"
                                      data-toggle="dropdown"
                                      tabIndex={-1}
                                      disabled="disabled"
                                    >
                                      <span className="caret" />
                                    </button>
                                    <ul
                                      className="dropdown-menu pull-right"
                                      role="menu"
                                    >
                                      <li>
                                        <a href="#/" onClick={this.onClick}>Action</a>
                                      </li>
                                      <li>
                                        <a href="#/" onClick={this.onClick}>
                                          Another action
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#/" onClick={this.onClick}>
                                          Something else here
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#/" onClick={this.onClick}>Cancel</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2" />
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-group">
                                  <div className="input-group-btn">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                      disabled="disabled"
                                      tabIndex={-1}
                                    >
                                      Action
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default dropdown-toggle"
                                      disabled="disabled"
                                      data-toggle="dropdown"
                                      tabIndex={-1}
                                    >
                                      <span className="caret" />
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                      <li>
                                        <a href="#/" onClick={this.onClick}>Action</a>
                                      </li>
                                      <li>
                                        <a href="#/" onClick={this.onClick}>
                                          Another action
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#/" onClick={this.onClick}>
                                          Something else here
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#/" onClick={this.onClick}>Cancel</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled="disabled"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Flexible Input fields with icons</legend>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Addon Large
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-lg">
                              <input
                                type="text"
                                placeholder="Email"
                                className="form-control"
                                disabled="disabled"
                              />
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Addon Medium
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-md">
                              <input
                                type="text"
                                placeholder="Email"
                                className="form-control"
                                disabled="disabled"
                              />
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Addon Small
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-sm">
                              <input
                                type="text"
                                placeholder="Email"
                                className="form-control"
                                disabled="disabled"
                              />
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Select Large
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-lg">
                              <select
                                className="form-control"
                                disabled="disabled"
                              >
                                <option>Select Option</option>
                                <option>Sample</option>
                                <option>Sample</option>
                              </select>
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Select Medium
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-md">
                              <select
                                className="form-control"
                                disabled="disabled"
                              >
                                <option>Select Option</option>
                                <option>Sample</option>
                                <option>Sample</option>
                              </select>
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Select Small
                          </label>
                          <div className="col-md-10">
                            <div className="icon-addon addon-sm">
                              <select
                                className="form-control"
                                disabled="disabled"
                              >
                                <option>Select Option</option>
                                <option>Sample</option>
                                <option>Sample</option>
                              </select>
                              <label
                                htmlFor="email"
                                className="glyphicon glyphicon-search"
                                rel="tooltip"
                                title="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Prepended Large
                          </label>
                          <div className="col-md-10">
                            <div className="input-group input-group-lg">
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-filter" />
                              </span>
                              <div className="icon-addon addon-lg">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="form-control"
                                  disabled="disabled"
                                />
                                <label
                                  htmlFor="email"
                                  className="glyphicon glyphicon-search"
                                  rel="tooltip"
                                  title="email"
                                />
                              </div>
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default"
                                  type="button"
                                  disabled="disabled"
                                >
                                  Go!
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Prepended Medium
                          </label>
                          <div className="col-md-10">
                            <div className="input-group input-group-md">
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-filter" />
                              </span>
                              <div className="icon-addon addon-md">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="form-control"
                                  disabled="disabled"
                                />
                                <label
                                  htmlFor="email"
                                  className="glyphicon glyphicon-search"
                                  rel="tooltip"
                                  title="email"
                                />
                              </div>
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default"
                                  type="button"
                                  disabled="disabled"
                                >
                                  Go!
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-md-2"
                            htmlFor="prepend"
                          >
                            Prepended Small
                          </label>
                          <div className="col-md-10">
                            <div className="input-group input-group-sm">
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-filter" />
                              </span>
                              <div className="icon-addon addon-sm">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="form-control"
                                  disabled="disabled"
                                />
                                <label
                                  htmlFor="email"
                                  className="glyphicon glyphicon-search"
                                  rel="tooltip"
                                  title="email"
                                />
                              </div>
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default"
                                  type="button"
                                  disabled="disabled"
                                >
                                  Go!
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Simple input with icons (disabled)</legend>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Input with icon
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-icon-left">
                                  <i className="fa fa-microphone" />
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    placeholder="Left Icon"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            With right icon
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input-icon-right">
                                  <i className="fa fa-microphone" />
                                  <input
                                    className="form-control"
                                    disabled="disabled"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-2">
                            Input with spinner
                          </label>
                          <div className="col-md-10">
                            <div className="row">
                              <div className="col-sm-12">
                                <input
                                  className="form-control ui-autocomplete-loading"
                                  disabled="disabled"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="form-actions">
                        <div className="row">
                          <div className="col-md-12">
                            <button
                              className="btn btn-primary"
                              disabled="disabled"
                              type="submit"
                            >
                              <i className="fa fa-save" />
                              Submit
                            </button>
                            <button
                              className="btn btn-default"
                              disabled="disabled"
                              type="submit"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-eye-slash" />
                  </span>
                  <h2>Disabled Horizontal Form</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <form>
                      <fieldset>
                        <input name="authenticity_token" type="hidden" />
                        <div className="form-group">
                          <label>Text field</label>
                          <input
                            className="form-control"
                            disabled="disabled"
                            placeholder="Text field"
                            type="text"
                          />
                        </div>
                        <div className="form-group">
                          <label>Password field</label>
                          <input
                            className="form-control"
                            disabled="disabled"
                            placeholder="Password"
                            type="password"
                            defaultValue="mypassword"
                          />
                        </div>
                        <div className="form-group">
                          <label>Textarea</label>
                          <textarea
                            className="form-control"
                            disabled="disabled"
                            placeholder="Textarea"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <label>Readonly</label>
                          <span className="form-control">Read only text</span>
                        </div>
                      </fieldset>
                      <div className="form-actions">
                        <button
                          className="btn btn-primary btn-lg"
                          disabled="disabled"
                        >
                          <i className="fa fa-save" />
                          Submit
                        </button>
                      </div>
                    </form>
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
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-eye-slash" />
                  </span>
                  <h2>Inline Form Disabled</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <div
                      className="alert adjusted alert-warning fade in"
                      data-dismiss="alert"
                    >
                      <i className="fa fa-fw fa-lg fa-exclamation" />
                      <strong>Hey hey!</strong> I am disabled!
                    </div>
                    <form className="form-inline">
                      <fieldset>
                        <div className="form-group">
                          <label className="sr-only">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            disabled="disabled"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="form-group">
                          <label className="sr-only">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            disabled="disabled"
                            placeholder="Password"
                          />
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox"
                              disabled="disabled"
                            />
                            <span>Remember me </span>
                          </label>
                        </div>
                        <button
                          type="submit"
                          disabled="disabled"
                          className="btn btn-primary"
                        >
                          Sign in
                        </button>
                      </fieldset>
                    </form>
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
            <article className="col-sm-12">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-8"
                colorbutton={false}
                editbutton={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-columns" />
                  </span>
                  <h2>Column sizing</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-12"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-6"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-6"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-6"
                        />
                      </div>
                      <div className="col-sm-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-3"
                        />
                      </div>
                      <div className="col-sm-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-3"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-3"
                        />
                      </div>
                      <div className="col-sm-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-3"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-6"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-4"
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-4"
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-4"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-2"
                        />
                      </div>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-2"
                        />
                      </div>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-2"
                        />
                      </div>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-2"
                        />
                      </div>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-2"
                        />
                      </div>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-2"
                        />
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
          {/* end row */}
          {/* row */}
          <div className="row">
            {/* NEW WIDGET START */}
            <article className="col-sm-12 col-md-12 col-lg-6">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-9"
                colorbutton={false}
                editbutton={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-columns" />
                  </span>
                  <h2>Right Aligned</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <div className="row">
                      <div className="col-sm-2 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-2"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-3"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-4 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-4"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-5 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-5"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-6"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-7 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-7"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-8 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-8"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-9 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-9"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-10 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-10"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-11 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-11"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12 pull-right">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-12"
                        />
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
                id="wid-id-10"
                colorbutton={false}
                editbutton={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-columns" />
                  </span>
                  <h2>Left Align</h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <div className="row">
                      <div className="col-sm-2 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-2"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-3"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-4 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-4"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-5 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-5"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-6"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-7 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-7"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-8 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-8"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-9 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-9"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-10 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-10"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-11 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-11"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12 pull-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-sm-12"
                        />
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
