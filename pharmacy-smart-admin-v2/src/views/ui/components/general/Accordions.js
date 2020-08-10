import React from "react";

import { JarvisWidget } from "../../../../common";

import { Collapse } from "react-bootstrap";

export class Accordions extends React.Component {
  state = {
    firstAcordionActiveSlide: 1,
    secondAcordionActiveSlide: 1
  };

  handleFirstAccordion = panelID => {
    this.setState(prevState => ({
      firstAcordionActiveSlide:
        prevState.firstAcordionActiveSlide === panelID ? 0 : panelID
    }));
  };

  handleSecondAccordion = panelID => {
    this.setState(prevState => ({
      secondAcordionActiveSlide:
        prevState.secondAcordionActiveSlide === panelID ? 0 : panelID
    }));
  };

  render() {
    return (
      <div className="row">
        <h2 className="row-seperator-header">
          <i className="fa fa-th-list" /> Accordions
        </h2>

        {/* NEW WIDGET START */}
        <article className="col-sm-12 col-md-12 col-lg-6">
          <JarvisWidget
            id="accordion-widget-0"
            className=" well transparent"
            colorbutton={false}
            editbutton={false}
            togglebutton={false}
            deletebutton={false}
            fullscreenbutton={false}
            custombutton={false}
            sortable={false}
          >
            <header>
              <span className="widget-icon">
                <i className="fa fa-comments" />
              </span>
              <h2>Accordions </h2>
            </header>

            {/* widget div*/}
            <div>
              {/* widget edit box */}
              <div className="jarviswidget-editbox">
                {/* This area used as dropdown edit box */}
              </div>
              {/* end widget edit box */}

              {/* widget content */}
              <div className="widget-body">
                <div
                  className="panel-group smart-accordion-default"
                  id="accordion"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#/"
                          onClick={() => this.handleFirstAccordion(1)}
                          className={
                            this.state.firstAcordionActiveSlide === 1
                              ? ""
                              : "collapsed"
                          }
                        >
                          <i className="fa fa-lg fa-angle-down pull-right" />
                          <i className="fa fa-lg fa-angle-up pull-right" />
                          Collapsible Group Item #1
                        </a>
                      </h4>
                    </div>

                    <Collapse in={this.state.firstAcordionActiveSlide === 1}>
                      <div id="collapseOne" className="panel-collapse">
                        <div className="panel-body no-padding">
                          <table className="table table-bordered table-condensed">
                            <thead>
                              <tr>
                                <th>Column name</th>
                                <th>Column name</th>
                                <th>Column name</th>
                                <th>Column name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                              </tr>
                              <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                              </tr>
                              <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Collapse>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#/"
                          onClick={() => this.handleFirstAccordion(2)}
                          className={
                            this.state.firstAcordionActiveSlide === 2
                              ? ""
                              : "collapsed"
                          }
                        >
                          <i className="fa fa-lg fa-angle-down pull-right" />
                          <i className="fa fa-lg fa-angle-up pull-right" />
                          Collapsible Group Item #2
                        </a>
                      </h4>
                    </div>
                    <Collapse in={this.state.firstAcordionActiveSlide === 2}>
                      <div id="collapseTwo" className="panel-collapse">
                        <div className="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </Collapse>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#/"
                          onClick={() => this.handleFirstAccordion(3)}
                          className={
                            this.state.firstAcordionActiveSlide === 3
                              ? ""
                              : "collapsed"
                          }
                        >
                          <i className="fa fa-lg fa-angle-down pull-right" />
                          <i className="fa fa-lg fa-angle-up pull-right" />
                          Collapsible Group Item #3
                        </a>
                      </h4>
                    </div>

                    <Collapse in={this.state.firstAcordionActiveSlide === 3}>
                      <div id="collapseThree" className="panel-collapse">
                        <div className="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
              {/* end widget content */}
            </div>
            {/* end widget div */}
          </JarvisWidget>
        </article>

        <article className="col-sm-12 col-md-12 col-lg-6">
          {/* Widget ID (each widget will need unique ID)*/}
          <JarvisWidget
            id="accordion-widget-1"
            colorbutton={false}
            editbutton={false}
            togglebutton={false}
            deletebutton={false}
            fullscreenbutton={false}
            custombutton={false}
            sortable={false}
            color="blueLight"
          >
            <header>
              <span className="widget-icon">
                <i className="fa fa-list-alt" />
              </span>
              <h2>Inside a widget </h2>

              <div className="widget-toolbar hidden-phone">
                <div className="smart-form">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Add Padding
                  </label>
                </div>
              </div>
            </header>

            {/* widget div*/}
            <div>
              {/* widget edit box */}
              <div className="jarviswidget-editbox">
                {/* This area used as dropdown edit box */}
              </div>
              {/* end widget edit box */}

              {/* widget content */}
              <div className="widget-body no-padding">
                <div
                  className="panel-group smart-accordion-default"
                  id="accordion-2"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#/"
                          onClick={() => this.handleSecondAccordion(1)}
                          className={
                            this.state.secondAcordionActiveSlide === 1
                              ? ""
                              : "collapsed"
                          }
                        >
                          <i className="fa fa-fw fa-plus-circle txt-color-green" />
                          <i className="fa fa-fw fa-minus-circle txt-color-red" />
                          Collapsible Group Item #1
                        </a>
                      </h4>
                    </div>

                    <Collapse in={this.state.secondAcordionActiveSlide === 1}>
                      <div id="collapseOne-1" className="panel-collapse">
                        <div className="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </div>
                      </div>
                    </Collapse>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#/"
                          onClick={() => this.handleSecondAccordion(2)}
                          className={
                            this.state.secondAcordionActiveSlide === 2
                              ? ""
                              : "collapsed"
                          }
                        >
                          <i className="fa fa-fw fa-plus-circle txt-color-green" />
                          <i className="fa fa-fw fa-minus-circle txt-color-red" />
                          Collapsible Group Item #2
                        </a>
                      </h4>
                    </div>
                    <Collapse in={this.state.secondAcordionActiveSlide === 2}>
                      <div id="collapseTwo-1" className="panel-collapse">
                        <div className="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </div>
                      </div>
                    </Collapse>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#/"
                          onClick={() => this.handleSecondAccordion(3)}
                          className={
                            this.state.secondAcordionActiveSlide === 3
                              ? ""
                              : "collapsed"
                          }
                        >
                          <i className="fa fa-fw fa-plus-circle txt-color-green" />
                          <i className="fa fa-fw fa-minus-circle txt-color-red" />
                          Collapsible Group Item #3
                        </a>
                      </h4>
                    </div>

                    <Collapse in={this.state.secondAcordionActiveSlide === 3}>
                      <div id="collapseThree-1" className="panel-collapse">
                        <div className="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
              {/* end widget content */}
            </div>
            {/* end widget div */}

            {/* end widget */}
          </JarvisWidget>
        </article>
      </div>
    );
  }
}
