import React from "react";

import {
  BigBreadcrumbs,
  Stats,
  WidgetGrid,
  JarvisWidget
} from "../../../common";

export default class BlankPage extends React.Component {
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Forms", "Form Validation"]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <div className="alert alert-block alert-info" data-dismiss="alert">
          <h4 className="alert-heading">Please Note!</h4>
          <p>
            This page only shows various form element states for error and
            success. For a full list of error validations and examples click on
            the link below to go to the <strong>Smart Form Layouts</strong> page
          </p>
          <br />
          <a href="#/forms/layouts" className="btn btn-primary">
            <strong>
              <i className="fa fa-arrow-circle-right" /> Form Layouts Page
            </strong>
          </a>
        </div>

        <WidgetGrid>
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
                    <i className="fa fa-exclamation txt-color-red" />
                  </span>
                  <h2>Error States </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body no-padding">
                    {/* Error states for elements */}
                    <form className="smart-form" onSubmit={this.onSubmit}>
                      <header>Error states for elements</header>
                      <fieldset>
                        <section>
                          <label className="label">Text input</label>
                          <label className="input state-error">
                            <input type="text" />
                          </label>
                          <div className="note note-error">
                            This is a required field.
                          </div>
                        </section>
                        <section>
                          <label className="label">File input</label>
                          <div className="input input-file state-error">
                            <span className="button">
                              <input type="file" id="file2" />
                              Browse
                            </span>
                            <input type="text" readOnly />
                          </div>
                          <div className="note note-error">
                            File size must be less than 3Mb.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <section>
                          <label className="label">Select</label>
                          <label className="select state-error">
                            <select>
                              <option value={0}>Choose name</option>
                              <option value={1}>Alexandra</option>
                              <option value={2}>Alice</option>
                              <option value={3}>Anastasia</option>
                              <option value={4}>Avelina</option>
                            </select>
                            <i />
                          </label>
                          <div className="note note-error">
                            You must select an option.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <section>
                          <label className="label">Textarea</label>
                          <label className="textarea state-error">
                            <textarea rows={3} defaultValue={""} />
                          </label>
                          <div className="note note-error">
                            This is a required field.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <section>
                          <label className="label">Radios</label>
                          <div className="row">
                            <div className="col col-4">
                              <label className="radio state-error">
                                <input type="radio" name="radio" />
                                <i />
                                Alexandra
                              </label>
                              <label className="radio state-error">
                                <input type="radio" name="radio" />
                                <i />
                                Alice
                              </label>
                            </div>
                            <div className="col col-4">
                              <label className="radio state-error">
                                <input type="radio" name="radio" />
                                <i />
                                Avelina
                              </label>
                              <label className="radio state-error">
                                <input type="radio" name="radio" />
                                <i />
                                Basilia
                              </label>
                            </div>
                            <div className="col col-4">
                              <label className="radio state-error">
                                <input type="radio" name="radio" />
                                <i />
                                Cassandra
                              </label>
                              <label className="radio state-error">
                                <input type="radio" name="radio" />
                                <i />
                                Clemencia
                              </label>
                            </div>
                          </div>
                          <div className="note note-error">
                            You must select one option.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <section>
                          <label className="label">Checkboxes</label>
                          <div className="row">
                            <div className="col col-4">
                              <label className="checkbox state-error">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Alexandra
                              </label>
                              <label className="checkbox state-error">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Alice
                              </label>
                            </div>
                            <div className="col col-4">
                              <label className="checkbox state-error">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Avelina
                              </label>
                              <label className="checkbox state-error">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Basilia
                              </label>
                            </div>
                            <div className="col col-4">
                              <label className="checkbox state-error">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Cassandra
                              </label>
                              <label className="checkbox state-error">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Clemencia
                              </label>
                            </div>
                          </div>
                          <div className="note note-error">
                            You must select at least one option.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <div className="row">
                          <section className="col col-5">
                            <label className="label">
                              Toggles based on radios
                            </label>
                            <label className="toggle state-error">
                              <input type="radio" name="radio-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Alexandra
                            </label>
                            <label className="toggle state-error">
                              <input type="radio" name="radio-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Anastasia
                            </label>
                            <label className="toggle state-error">
                              <input type="radio" name="radio-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Avelina
                            </label>
                            <div className="note note-error">
                              You must select one option.
                            </div>
                          </section>
                          <div className="col col-2" />
                          <section className="col col-5">
                            <label className="label">
                              Toggles based on checkboxes
                            </label>
                            <label className="toggle state-error">
                              <input type="checkbox" name="checkbox-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Cassandra
                            </label>
                            <label className="toggle state-error">
                              <input type="checkbox" name="checkbox-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Clemencia
                            </label>
                            <label className="toggle state-error">
                              <input type="checkbox" name="checkbox-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Desiderata
                            </label>
                            <div className="note note-error">
                              You must select at least one option.
                            </div>
                          </section>
                        </div>
                      </fieldset>
                      <footer>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                        <button type="button" className="btn btn-default">
                          Back
                        </button>
                      </footer>
                    </form>
                    {/*/ Error states for elements */}
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
                id="wid-id-2"
                colorbutton={false}
                editbutton={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-check txt-color-green" />
                  </span>
                  <h2>Success States </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body no-padding">
                    {/* Success states for elements */}
                    <form className="smart-form" onSubmit={this.onSubmit}>
                      <header>Success states for elements</header>
                      <fieldset>
                        <section>
                          <label className="label">Text input</label>
                          <label className="input state-success">
                            <input type="text" />
                          </label>
                          <div className="note note-success">
                            This is a required field.
                          </div>
                        </section>
                        <section>
                          <label className="label">File input</label>
                          <div className="input input-file state-success">
                            <span className="button">
                              <input type="file" id="file" />
                              Browse
                            </span>
                            <input type="text" readOnly />
                          </div>
                          <div className="note note-success">
                            This is a required field.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <section>
                          <label className="label">Select</label>
                          <label className="select state-success">
                            <select defaultValue={3}>
                              <option value={0}>Choose name</option>
                              <option value={1}>Alexandra</option>
                              <option value={2}>Alice</option>
                              <option value={3}>Anastasia</option>
                              <option value={4}>Avelina</option>
                            </select>
                            <i />
                          </label>
                          <div className="note note-success">
                            Thanks for your selection.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <section>
                          <label className="label">Textarea</label>
                          <label className="textarea state-success">
                            <textarea rows={3} defaultValue={""} />
                          </label>
                          <div className="note note-success">
                            Thanks for your text.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <section>
                          <label className="label">Radios</label>
                          <div className="row">
                            <div className="col col-4">
                              <label className="radio state-success">
                                <input type="radio" name="radio" />
                                <i />
                                Alexandra
                              </label>
                              <label className="radio state-success">
                                <input type="radio" name="radio" />
                                <i />
                                Alice
                              </label>
                            </div>
                            <div className="col col-4">
                              <label className="radio state-success">
                                <input
                                  type="radio"
                                  name="radio"
                                  defaultChecked
                                />
                                <i />
                                Avelina
                              </label>
                              <label className="radio state-success">
                                <input type="radio" name="radio" />
                                <i />
                                Basilia
                              </label>
                            </div>
                            <div className="col col-4">
                              <label className="radio state-success">
                                <input type="radio" name="radio" />
                                <i />
                                Cassandra
                              </label>
                              <label className="radio state-success">
                                <input type="radio" name="radio" />
                                <i />
                                Clemencia
                              </label>
                            </div>
                          </div>
                          <div className="note note-success">
                            Thanks for your selection.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <section>
                          <label className="label">Checkboxes</label>
                          <div className="row">
                            <div className="col col-4">
                              <label className="checkbox state-success">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Alexandra
                              </label>
                              <label className="checkbox state-success">
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  defaultChecked
                                />
                                <i />
                                Alice
                              </label>
                            </div>
                            <div className="col col-4">
                              <label className="checkbox state-success">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Avelina
                              </label>
                              <label className="checkbox state-success">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Basilia
                              </label>
                            </div>
                            <div className="col col-4">
                              <label className="checkbox state-success">
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  defaultChecked
                                />
                                <i />
                                Cassandra
                              </label>
                              <label className="checkbox state-success">
                                <input type="checkbox" name="checkbox" />
                                <i />
                                Clemencia
                              </label>
                            </div>
                          </div>
                          <div className="note note-success">
                            Thanks for your selection.
                          </div>
                        </section>
                      </fieldset>
                      <fieldset>
                        <div className="row">
                          <section className="col col-5">
                            <label className="label">
                              Toggles based on radios
                            </label>
                            <label className="toggle state-success">
                              <input
                                type="radio"
                                name="radio-toggle"
                                defaultChecked
                              />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Alexandra
                            </label>
                            <label className="toggle state-success">
                              <input type="radio" name="radio-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Anastasia
                            </label>
                            <label className="toggle state-success">
                              <input type="radio" name="radio-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Avelina
                            </label>
                            <div className="note note-success">
                              Thanks for your selection.
                            </div>
                          </section>
                          <div className="col col-2" />
                          <section className="col col-5">
                            <label className="label">
                              Toggles based on checkboxes
                            </label>
                            <label className="toggle state-success">
                              <input
                                type="checkbox"
                                name="checkbox-toggle"
                                defaultChecked
                              />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Cassandra
                            </label>
                            <label className="toggle state-success">
                              <input type="checkbox" name="checkbox-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Clemencia
                            </label>
                            <label className="toggle state-success">
                              <input type="checkbox" name="checkbox-toggle" />
                              <i
                                data-swchon-text="ON"
                                data-swchoff-text="OFF"
                              />
                              Desiderata
                            </label>
                            <div className="note note-success">
                              Thanks for your selection.
                            </div>
                          </section>
                        </div>
                      </fieldset>
                      <footer>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                        <button type="button" className="btn btn-default">
                          Back
                        </button>
                      </footer>
                    </form>
                    {/*/ Success states for elements */}
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
        </WidgetGrid>
      </div>
    );
  }
}
