import React from "react";

import { BigBreadcrumbs, Stats, WidgetGrid } from "../../../common";

export default class Blog extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["App views", "Stats"]}
            icon="home"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <WidgetGrid>
          <div className="row">
            <div className="col-sm-9">
              <div className="well padding-10">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="assets/img/superbox/superbox-full-15.jpg"
                      className="img-responsive"
                      alt="assets/img"
                    />
                    <ul className="list-inline padding-10">
                      <li>
                        <i className="fa fa-calendar" />
                        <a href="#/" onClick={this.onClick}> March 12, 2015 </a>
                      </li>
                      <li>
                        <i className="fa fa-comments" />
                        <a href="#/" onClick={this.onClick}> 38 Comments </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 padding-left-0">
                    <h3 className="margin-top-0">
                      <a href="#/" onClick={this.onClick}>
                        Why Should You Make A Separate Mobile Website for your
                        Business?
                      </a>
                      <br />
                      <small className="font-xs">
                        <i>
                          Published by <a href="#/" onClick={this.onClick}>John Doe</a>
                        </i>
                      </small>
                    </h3>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.
                      <br />
                      <br />
                      Et harum quidem rerum facilis est et expedita distinctio
                      lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut non libero consectetur adipiscing elit magna. Sed et
                      quam lacus. Fusce condimentum eleifend enim a feugiat.
                      Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Ut non libero
                      magna. Sed et quam lacus. Fusce condimentum eleifend enim
                      a feugiat.
                      <br />
                      <br />
                    </p>
                    <a href="#/" className="btn btn-primary" onClick={this.onClick}>
                      Read more
                    </a>
                    <a href="#/" className="btn btn-warning" onClick={this.onClick}>
                      Edit
                    </a>
                    <a href="#/" className="btn btn-success" onClick={this.onClick}>
                      Publish
                    </a>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="assets/img/superbox/superbox-full-19.jpg"
                      className="img-responsive"
                      alt="assets/img"
                    />
                    <ul className="list-inline padding-10">
                      <li>
                        <i className="fa fa-calendar" />
                        <a href="#/" onClick={this.onClick}> March 12, 2015 </a>
                      </li>
                      <li>
                        <i className="fa fa-comments" />
                        <a href="#/" onClick={this.onClick}> 38 Comments </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 padding-left-0">
                    <h3 className="margin-top-0">
                      <a href="#/" onClick={this.onClick}>
                        {" "}
                        Mums favorite shopping malls in USA{" "}
                      </a>
                      <br />
                      <small className="font-xs">
                        <i>
                          Published by <a href="#/" onClick={this.onClick}>John Doe</a>
                        </i>
                      </small>
                    </h3>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.
                      <br />
                      <br />
                      Et harum quidem rerum facilis est et expedita distinctio
                      lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut non libero consectetur adipiscing elit magna. Sed et
                      quam lacus. Fusce condimentum eleifend enim a feugiat.
                      Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Ut non libero
                      magna. Sed et quam lacus. Fusce condimentum eleifend enim
                      a feugiat.
                      <br />
                      <br />
                    </p>
                    <a href="#/" className="btn btn-primary" onClick={this.onClick}>
                      Read more
                    </a>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="assets/img/superbox/superbox-full-24.jpg"
                      className="img-responsive"
                      alt="assets/img"
                    />
                    <ul className="list-inline padding-10">
                      <li>
                        <i className="fa fa-calendar" />
                        <a href="#/" onClick={this.onClick}> March 12, 2015 </a>
                      </li>
                      <li>
                        <i className="fa fa-comments" />
                        <a href="#/" onClick={this.onClick}> 38 Comments </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 padding-left-0">
                    <h3 className="margin-top-0">
                      <a href="#/" onClick={this.onClick}>
                        Best (and Basic) Practices of Mobile Web Design
                      </a>
                      <br />
                      <small className="font-xs">
                        <i>
                          Published by <a href="#/" onClick={this.onClick}>John Doe</a>
                        </i>
                      </small>
                    </h3>
                    <p>
                      With the plethora of smartphones, mobile phones, and
                      tablets available on the market today, research suggests
                      that mobile devices will soon overtake PCs and laptops in
                      a year. More and more,different platforms are made
                      available for all types of consumers to access the web,
                      even including TVs and gaming consoles.
                      <br />
                      <br />
                      And all this in rapid-fire turnover—new models and
                      technologies quickly coming and going like fashion trends.
                      So much so that any website that is not mobile friendly
                      cannot claim to be user-friendly anymore. Increasingly,
                      web developers and designers utilize fluid layouts
                      allowing users to browse across different platforms.
                      <br />
                      <br />
                    </p>
                    <a href="#/" className="btn btn-primary" onClick={this.onClick}>
                      Read more
                    </a>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="assets/img/superbox/superbox-full-7.jpg"
                      className="img-responsive"
                      alt="assets/img"
                    />
                    <ul className="list-inline padding-10">
                      <li>
                        <i className="fa fa-calendar" />
                        <a href="#/" onClick={this.onClick}> March 12, 2015 </a>
                      </li>
                      <li>
                        <i className="fa fa-comments" />
                        <a href="#/" onClick={this.onClick}> 38 Comments </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 padding-left-0">
                    <h3 className="margin-top-0">
                      <a href="#/" onClick={this.onClick}>
                        Responsive Design: Best Practices for Designing a
                        Website
                      </a>
                      <br />
                      <small className="font-xs">
                        <i>
                          Published by <a href="#/" onClick={this.onClick}>John Doe</a>
                        </i>
                      </small>
                    </h3>
                    <p>
                      The term Responsive design means developing a website in a
                      way that adapts all the computer screen resolutions.
                      Particularly this concept allows a 4 column layout that is
                      1292px wide, on 1025px wide screen that is divided into 2
                      columns automatically. It is adaptable for android phones
                      and tablet screens. This designing method is known as
                      “responsive web design”
                      <br />
                      <br />
                      Responsive designing is a different concept from
                      traditional web designing, so the question arises how you
                      should build a good responsive website. Here is a general
                      practices that can help you to build a responsive website
                      design.
                      <br />
                      <br />
                    </p>
                    <a href="#/" className="btn btn-primary" onClick={this.onClick}>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="well padding-10">
                <h5 className="margin-top-0">
                  <i className="fa fa-search" /> Blog Search...
                </h5>
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
                {/* /input-group */}
              </div>
              {/* /well */}
              <div className="well padding-10">
                <h5 className="margin-top-0">
                  <i className="fa fa-tags" /> Popular Tags:
                </h5>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge badge-info">Windows 8</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge badge-info">C#</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge badge-info">
                            Windows Forms
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge badge-info">WPF</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge badge-info">Bootstrap</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge badge-info">Joomla!</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge badge-info">CMS</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge badge-info">Java</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /well */}
              <div className="well padding-10">
                <h5 className="margin-top-0">
                  <i className="fa fa-thumbs-o-up" /> Follow Us!
                </h5>
                <ul className="no-padding no-margin">
                  <p className="no-margin">
                    <a href="#/" title="Facebook" onClick={this.onClick}>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square-o fa-stack-2x" />
                        <i className="fa fa-facebook fa-stack-1x" />
                      </span>
                    </a>
                    <a href="#/" title="Twitter" onClick={this.onClick}>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square-o fa-stack-2x" />
                        <i className="fa fa-twitter fa-stack-1x" />
                      </span>
                    </a>
                    <a href="#/" title="Google+" onClick={this.onClick}>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square-o fa-stack-2x" />
                        <i className="fa fa-google-plus fa-stack-1x" />
                      </span>
                    </a>
                    <a href="#/" title="Linkedin" onClick={this.onClick}>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square-o fa-stack-2x" />
                        <i className="fa fa-linkedin fa-stack-1x" />
                      </span>
                    </a>
                    <a href="#/" title="GitHub" onClick={this.onClick}>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square-o fa-stack-2x" />
                        <i className="fa fa-github fa-stack-1x" />
                      </span>
                    </a>
                    <a href="#/" title="Bitbucket" onClick={this.onClick}>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square-o fa-stack-2x" />
                        <i className="fa fa-bitbucket fa-stack-1x" />
                      </span>
                    </a>
                  </p>
                </ul>
              </div>
              {/* /well */}
              {/* /well */}
              <div className="well padding-10">
                <h5 className="margin-top-0">
                  <i className="fa fa-fire" /> Popular Posts:
                </h5>
                <ul className="no-padding list-unstyled">
                  <li>
                    <a href="#/" onClick={this.onClick} className="margin-top-0">
                      WPF vs. Windows Forms-Which is better?
                    </a>
                  </li>
                  <li>
                    <a href="#/"
                      onClick={this.onClick}
                      className="padding-top-5 display-block"
                    >
                      How to create responsive website with Bootstrap?
                    </a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick} className="margin-top-5">
                      The best Joomla! templates 2014
                    </a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick} className="margin-top-5">
                      ASP .NET cms list
                    </a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick} className="margin-top-5">
                      C# Hello, World! program
                    </a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick} className="margin-top-5">
                      Java random generator
                    </a>
                  </li>
                </ul>
              </div>
              {/* /well */}
              {/* /well */}
              <div className="well padding-10">
                <h5 className="margin-top-0">
                  <i className="fa fa-video-camera" /> Featured Videos:
                </h5>
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="list-group no-margin">
                      <li className="list-group-item">
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge pull-right">15</span>
                          Photograph
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge pull-right">30</span> Life
                          style
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge pull-right">9</span> Food
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#/" onClick={this.onClick}>
                          <span className="badge pull-right">4</span> Travel
                          world
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <div className="margin-top-10">
                      <iframe
                        title="Vimeo Example"
                        frameBorder={0}
                        height={210}
                        src="http://player.vimeo.com/video/87025094"
                        width="100%"
                        allowFullScreen={true}
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /well */}
            </div>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
