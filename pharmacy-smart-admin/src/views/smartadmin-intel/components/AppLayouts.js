import React from "react";

export default class AppLayouts extends React.Component {
  render() {
    return (
      <div id="content" className="animated fadeInUp">
        {/* Bread crumb is created dynamically */}
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1 className="page-title txt-color-blueDark text-center well">
              {/* PAGE HEADER */}
              SmartAdmin Layout Options
              <br />
              <small className="text-success">
                Morph SmartAdmin to your need! The layout of SmartAdmin is
                extreamly flexible
              </small>
            </h1>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
        {/*
      The ID "widget-grid" will start to initialize all Widgets below
      You do not need to use Widgets if you dont want to. Simply remove
      the <section></section> and you can use wells or panels instead
      */}
        {/* widget grid */}
        <section id="widget-grid">
          {/* row */}
          <div className="row">
            {/* a blank row to get started */}
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Layout type "<strong>Navigation Minified</strong>" <br />
                  <small>
                    Add the following class(s) to body tag
                    <code>.minified</code>
                  </small>
                </h5>
                <h5>
                  <small>
                    <i>Avalible options</i>
                  </small>
                </h5>
                <span className="label label-default">.fixed-navigation</span>
                <span className="label label-default">.container</span>
                <span className="label label-default">.fixed-page-footer</span>
                <span className="label label-default">.fixed-header</span>
                <span className="label label-default">.fixed-ribbon</span>
                <span className="label label-default">.smart-rtl</span>
                <br />
                <br />
                <img
                  alt="layout"
                  src="assets/img/demo/layout-skins/layout-collapse.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Layout type "<strong>Hidden Navigation</strong>" <br />
                  <small>
                    Add the following class(s) to body tag{" "}
                    <code>.hidden-menu</code>
                  </small>
                </h5>
                <h5>
                  <small>
                    <i>Avalible options</i>
                  </small>
                </h5>
                <span className="label label-default">.fixed-navigation</span>
                <span className="label label-default">.container</span>
                <span className="label label-default">.fixed-page-footer</span>
                <span className="label label-default">.fixed-header</span>
                <span className="label label-default">.fixed-ribbon</span>
                <span className="label label-default">.smart-rtl</span>
                <br />
                <br />
                <img
                  alt="layout"
                  src="assets/img/demo/layout-skins/layout-hidden.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            {/* a blank row to get started */}
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Layout type "<strong>Menu on Top with center content</strong>"{" "}
                  <br />
                  <small>
                    Add the following class(s) to body tag{" "}
                    <code>.top-navigation .container</code>
                  </small>
                </h5>
                <h5>
                  <small>
                    <i>Avalible options</i>
                  </small>
                </h5>
                <span className="label label-default">.fixed-navigation</span>
                <span className="label label-default">.fixed-page-footer</span>
                <span className="label label-default">.fixed-header</span>
                <span className="label label-default">.fixed-ribbon</span>
                <span className="label label-default">.smart-rtl</span>
                <br />
                <br />
                <img
                  alt="layout"
                  src="assets/img/demo/layout-skins/layout-menutop.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Layout type "<strong>Center content with minified nav</strong>
                  " <br />
                  <small>
                    Add the following class(s) to body tag{" "}
                    <code>.minified .container</code>
                  </small>
                </h5>
                <h5>
                  <small>
                    <i>Avalible options</i>
                  </small>
                </h5>
                <span className="label label-default">.top-navigation</span>
                <span className="label label-default">.fixed-navigation</span>
                <span className="label label-default">.fixed-page-footer</span>
                <span className="label label-default">.fixed-header</span>
                <span className="label label-default">.fixed-ribbon</span>
                <span className="label label-default">.smart-rtl</span>
                <br />
                <br />
                <img
                  alt="layout"
                  src="assets/img/demo/layout-skins/layout-collapse-minified.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            {/* a blank row to get started */}
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Layout type "<strong>RTL Layout</strong>" <br />
                  <small>
                    Add the following class(s) to body tag{" "}
                    <code>.smart-rtl</code>
                  </small>
                </h5>
                <h5>
                  <small>
                    <i>Avalible options</i>
                  </small>
                </h5>
                <span className="label label-default">.container</span>
                <span className="label label-default">.hidden-menu</span>
                <span className="label label-default">.fixed-page-footer</span>
                <span className="label label-default">.fixed-header</span>
                <span className="label label-default">.fixed-ribbon</span>
                <span className="label label-default">.minified</span>
                <br />
                <br />
                <img
                  alt="layout"
                  src="assets/img/demo/layout-skins/layout-rtl.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Layout type "<strong>RTL with Menu on Top</strong>" <br />
                  <small>
                    Add the following class(s) to body tag{" "}
                    <code>.smart-rtl .top-navigation</code>
                  </small>
                </h5>
                <h5>
                  <small>
                    <i>Avalible options</i>
                  </small>
                </h5>
                <span className="label label-default">.fixed-navigation</span>
                <span className="label label-default">.container</span>
                <span className="label label-default">.fixed-page-footer</span>
                <span className="label label-default">.fixed-header</span>
                <span className="label label-default">.fixed-ribbon</span>
                <br />
                <br />
                <img
                  alt="layout"
                  src="assets/img/demo/layout-skins/layout-rtl-menutop.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
          </div>
          {/* end row */}
        </section>
        {/* end widget grid */}
      </div>
    );
  }
}
