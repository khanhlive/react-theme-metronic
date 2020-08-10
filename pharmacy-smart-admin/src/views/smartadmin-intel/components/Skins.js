import React from "react";

export default class Skins extends React.Component {
  render() {
    return (
      <div id="content" className="animated fadeInUp">
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1 className="page-title txt-color-blueDark text-center well">
              {/* PAGE HEADER */}
              SmartAdmin Pre-built Skins
              <br />
              <small className="text-primary">
                Don't like the default look of SmartAdmin? Not a problem!
                SmartAdmin comes with 6 prebuilt skins to choose from.
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
                  Skin name "<strong>Glass</strong>" <br />
                  <small>
                    Add the following class to body tag
                    <code>.smart-style-5</code>
                  </small>
                </h5>
                <img
                  alt="smartadmin skin"
                  src="assets/img/demo/layout-skins/skin-glass.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Skin name "<strong>Google</strong>" <br />
                  <small>
                    Add the following class to body tag
                    <code>.smart-style-3</code>
                  </small>
                </h5>
                <img
                  alt="smartadmin skin"
                  src="assets/img/demo/layout-skins/skin-google.png"
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
                  Skin name "<strong>PixelSmash</strong>" <br />
                  <small>
                    Add the following class to body tag
                    <code>.smart-style-4</code>
                  </small>
                </h5>
                <img
                  alt="smartadmin skin"
                  src="assets/img/demo/layout-skins/skin-pixel.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Skin name "<strong>Dark Elegance</strong>" <br />
                  <small>
                    Add the following class to body tag
                    <code>.smart-style-1</code>
                  </small>
                </h5>
                <img
                  alt="smartadmin skin"
                  src="assets/img/demo/layout-skins/skin-dark.png"
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
                  Skin name "<strong>Default</strong>" <br />
                  <small>
                    Add the following class to body tag
                    <code>.smart-style-0</code>
                  </small>
                </h5>
                <img
                  alt="smartadmin skin"
                  src="assets/img/demo/layout-skins/skin-default.png"
                  className="img-responsive center-block"
                  style={{ boxShadow: "0px 0px 3px 0px #919191" }}
                />
              </div>
            </div>
            <div className="col-sm-6">
              {/* your contents here */}
              <div className="well text-center">
                <h5>
                  Skin name "<strong>Ultra Light</strong>" <br />
                  <small>
                    Add the following class to body tag
                    <code>.smart-style-2</code>
                  </small>
                </h5>
                <img
                  alt="smartadmin skin"
                  src="assets/img/demo/layout-skins/skin-ultralight.png"
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
