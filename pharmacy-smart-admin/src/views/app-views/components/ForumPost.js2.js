import React from "react";

import { BigBreadcrumbs, Stats } from "../../../common";

export default class ForumPost extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Forum", "Post"]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="well">
              <table className="table table-striped table-forum">
                <thead>
                  <tr>
                    <th colSpan={2}>
                      <a href="#/views/forum-general"> Projects </a> &gt;
                      <a href="#/views/forum-topic">
                        Business Requirement Docs
                      </a>
                      &gt; Nam quam nunc blandit vel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Post */}
                  <tr>
                    <td className="text-center">
                      <a href="#/views/profile">
                        <img alt="" src="assets/img/flags/us.png" /> &nbsp;
                        <strong>John Doe</strong>
                      </a>
                    </td>
                    <td>
                      on <em>Jan 1, 2014 - 12:00am</em>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" style={{ width: "12%" }}>
                      <div className="push-bit">
                        <a href="#/views/profile">
                          <img
                            src="assets/img/avatars/sunny.png"
                            width={50}
                            alt="avatar"
                            className="online"
                          />
                        </a>
                      </div>
                      <small>473 Posts</small>
                    </td>
                    <td>
                      <p>
                        Donec pede justo, fringilla vel, aliquet nec, vulputate
                        eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                        venenatis vitae, justo. Nullam dictum felis eu pede
                        mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                        elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae,
                        eleifend ac, enim. Aliquam lorem ante, dapibus in,
                        viverra quis, feugiat a, tellus. Phasellus viverra nulla
                        ut metus varius laoreet. Quisque rutrum. Aenean
                        imperdiet.
                      </p>
                      <h5>Forecast Pie</h5>
                      <span
                        className="sparkline display-inline margin-bottom-10"
                        data-sparkline-type="pie"
                        data-sparkline-offset={90}
                        data-sparkline-piesize="150px"
                      >
                        33,20,10
                      </span>
                      <p>
                        Fringilla vel, aliquet nec, vulputate eget, arcu. In
                        enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                        justo. Nullam dictum felis eu pede mollis pretium.
                        Integer tincidunt. Cras dapibus. Vivamus elementum
                        semper nisi. Aenean vulputate eleifend tellus. Aenean
                        leo ligula, porttitor eu, consequat vitae, eleifend ac,
                        enim. Aliquam lorem ante, dapibus in, viv.
                      </p>
                      <em>
                        - John Doe
                        <br />
                        CEO, SmartAdmin
                      </em>
                    </td>
                  </tr>
                  {/* end Post */}
                  {/* Post */}
                  <tr>
                    <td className="text-center">
                      <a href="#/views/profile">
                        <img alt="" src="assets/img/flags/es.png" /> &nbsp;
                        <strong>Sadi Orlaf</strong>
                      </a>
                    </td>
                    <td>
                      on <em>Jan 1, 2014 - 12:00am</em>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" style={{ width: "12%" }}>
                      <div className="push-bit">
                        <a href="#/views/profile">
                          <img
                            src="assets/img/avatars/5.png"
                            width={50}
                            alt="avatar"
                            className="offline"
                          />
                        </a>
                      </div>
                      <small>473 Posts</small>
                    </td>
                    <td>
                      <p>
                        Donec pede justo, fringilla vel, aliquet nec, vulputate
                        eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                        venenatis vitae, justo. Nullam dictum felis eu pede
                        mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                        elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae,
                        eleifend ac, enim. Aliquam lorem ante, dapibus in,
                        viverra quis, feugiat a, tellus. Phasellus viverra nulla
                        ut metus varius laoreet. Quisque rutrum. Aenean
                        imperdiet.
                      </p>
                      <em>
                        - Sadi Orlaf
                        <br />
                        Executive, SmartAdmin
                      </em>
                      <div className="forum-attachment">
                        2 attachment(s) —
                        <a href="#/" onClick={this.onClick}> Download all attachments</a>
                        <ul className="list-inline margin-top-10">
                          <li className="well well-sm padding-5">
                            <strong>rocketlaunch.jpg</strong>
                            <br />
                            400 kb
                            <br />
                            <a href="#/" onClick={this.onClick}> Download</a> |
                            <a href="#/" onClick={this.onClick}> View</a>
                          </li>
                          <li className="well well-sm padding-5">
                            <strong>budget.xsl</strong>
                            <br />
                            400 kb
                            <br />
                            <a href="#/" onClick={this.onClick}> Download</a> |
                            <a href="#/" onClick={this.onClick}> Share</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  {/* end Post */}
                  {/* Post */}
                  <tr>
                    <td className="text-center">
                      <a href="#/views/profile">
                        <img alt="" src="assets/img/flags/us.png" /> &nbsp;
                        <strong>Me</strong>
                      </a>
                    </td>
                    <td>
                      <em>Today</em>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" style={{ width: "12%" }}>
                      <div className="push-bit">
                        <a href="#/views/profile">
                          <img
                            src="assets/img/avatars/sunny.png"
                            width={50}
                            alt="avatar"
                            className="online"
                          />
                        </a>
                      </div>
                      <small>473 Posts</small>
                    </td>
                    <td>
                      <div
                        id="forumPost"
                        data-smart-summernote-editor
                        data-height={180}
                      />
                      <button className="btn btn-primary margin-top-10">
                        Post
                      </button>
                      <button className="btn btn-success margin-top-10">
                        Save for later
                      </button>
                    </td>
                  </tr>
                  {/* end Post */}
                </tbody>
              </table>
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
          </div>
        </div>
      </div>
    );
  }
}
