import React from "react";

export default class Typography extends React.Component {
  render() {
    return (
      <div id="content">
        <div className="row">
          {/* NEW WIDGET START */}
          <div className="col-sm-6">
            {/* widget content */}
            <div className="bs-example bs-example-type">
              <h3 className="text-primary" style={{ margin: "20px 0" }}>
                Headers and leads
              </h3>
              <table className="table eg-1">
                <tbody>
                  <tr>
                    <td>
                      <h1>h1. SmartAdmin heading</h1>
                      <p className="lead">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                        dolor auctor. Duis mollis, est non commodo luctus.
                      </p>
                    </td>
                    <td className="info">'Open Sans' 26px Light</td>
                  </tr>
                  <tr>
                    <td>
                      <h2>h2. SmartAdmin heading</h2>
                      <p>
                        SmartAdmins's global default <code>font-size</code> is{" "}
                        <strong>13px</strong>, with a <code>line-height</code>{" "}
                        of <strong>1.428</strong>. This is applied to the{" "}
                        <code>&lt;body&gt;</code> and all paragraphs. In
                        addition, <code>&lt;p&gt;</code> (paragraphs) receive a
                        bottom margin of half their computed line-height (10px
                        by default).
                      </p>
                    </td>
                    <td className="info">'Open Sans' 22px Light</td>
                  </tr>
                  <tr>
                    <td>
                      <h3>h3. SmartAdmin heading</h3>
                      <p>
                        An abbreviation of the word attribute is{" "}
                        <abbr title="attribute">attr</abbr>.
                      </p>
                      <pre>
                        <code className="html">
                          <span className="nt">&lt;abbr</span>{" "}
                          <span className="na">title=</span>
                          <span className="s">"attribute"</span>
                          <span className="nt">&gt;</span>attr
                          <span className="nt">&lt;/abbr&gt;</span>
                        </code>
                      </pre>
                    </td>
                    <td className="info">'Open Sans' 18px Light</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>h4. SmartAdmin heading</h4>
                    </td>
                    <td className="info">'Open Sans' 17px Light</td>
                  </tr>
                  <tr>
                    <td>
                      <h5>h5. SmartAdmin heading</h5>
                    </td>
                    <td className="info">'Open Sans' 16px Light</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>h6. SmartAdmin heading</h6>
                    </td>
                    <td className="info">'Open Sans' 14px Bold</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="highlight">
              <pre>
                <code className="html">
                  <span className="nt">&lt;h1&gt;</span>h1. SmartAdmin heading
                  <span className="nt">&lt;/h1&gt;</span>
                  <br />
                  <span className="nt">&lt;h2&gt;</span>h2. SmartAdmin heading
                  <span className="nt">&lt;/h2&gt;</span>
                  <br />
                  <span className="nt">&lt;h3&gt;</span>h3. SmartAdmin heading
                  <span className="nt">&lt;/h3&gt;</span>
                  <br />
                  <span className="nt">&lt;h4&gt;</span>h4. SmartAdmin heading
                  <span className="nt">&lt;/h4&gt;</span>
                  <br />
                  <span className="nt">&lt;h5&gt;</span>h5. SmartAdmin heading
                  <span className="nt">&lt;/h5&gt;</span>
                  <br />
                  <span className="nt">&lt;h6&gt;</span>h6. SmartAdmin heading
                  <span className="nt">&lt;/h6&gt;</span>
                  <br />
                </code>
              </pre>
            </div>
            <div className="bs-example bs-example-type">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <h1>
                        h1. SmartAdmin heading <small>Secondary text</small>
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>
                        h2. SmartAdmin heading <small>Secondary text</small>
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>
                        h3. SmartAdmin heading <small>Secondary text</small>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>
                        h4. SmartAdmin heading <small>Secondary text</small>
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>
                        h5. SmartAdmin heading <small>Secondary text</small>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>
                        h6. SmartAdmin heading <small>Secondary text</small>
                      </h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="highlight">
              <pre>
                <code className="html">
                  <span className="nt">&lt;h1&gt;</span>h1. SmartAdmin heading{" "}
                  <span className="nt">&lt;small&gt;</span>Secondary text
                  <span className="nt">&lt;/small&gt;&lt;/h1&gt;</span>
                  <br />
                  <span className="nt">&lt;h2&gt;</span>h2. SmartAdmin heading{" "}
                  <span className="nt">&lt;small&gt;</span>Secondary text
                  <span className="nt">&lt;/small&gt;&lt;/h2&gt;</span>
                  <br />
                  <span className="nt">&lt;h3&gt;</span>h3. SmartAdmin heading{" "}
                  <span className="nt">&lt;small&gt;</span>Secondary text
                  <span className="nt">&lt;/small&gt;&lt;/h3&gt;</span>
                  <br />
                  <span className="nt">&lt;h4&gt;</span>h4. SmartAdmin heading{" "}
                  <span className="nt">&lt;small&gt;</span>Secondary text
                  <span className="nt">&lt;/small&gt;&lt;/h4&gt;</span>
                  <br />
                  <span className="nt">&lt;h5&gt;</span>h5. SmartAdmin heading{" "}
                  <span className="nt">&lt;small&gt;</span>Secondary text
                  <span className="nt">&lt;/small&gt;&lt;/h5&gt;</span>
                  <br />
                  <span className="nt">&lt;h6&gt;</span>h6. SmartAdmin heading{" "}
                  <span className="nt">&lt;small&gt;</span>Secondary text
                  <span className="nt">&lt;/small&gt;&lt;/h6&gt;</span>
                  <br />
                </code>
              </pre>
            </div>
            {/* end widget content */}
            {/* Widget ID (each widget will need unique ID)*/}
            <div className="well well-sm">
              <h3 className="text-primary">Text and BG color options</h3>
              <table className="table table-bordered">
                <tbody>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-green">
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        nibh.{" "}
                        <span className="label bg-color-green pull-right">
                          .bg-color-green
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-green</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-greenDark">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.{" "}
                        <span className="label bg-color-greenDark pull-right">
                          .bg-color-greenDark
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-greenDark</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-greenLight">
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.{" "}
                        <span className="label bg-color-greenLight pull-right">
                          .bg-color-greenLight
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-greenLight</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-purple">
                        Maecenas sed diam eget risus varius blandit sit amet non
                        magna.{" "}
                        <span className="label bg-color-purple pull-right">
                          .bg-color-purple
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-purple</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-magenta">
                        Etiam porta sem malesuada magna mollis euismod.{" "}
                        <span className="label bg-color-magenta pull-right">
                          .bg-color-magenta
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-magenta</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-pink">
                        Donec ullamcorper nulla non metus auctor fringilla.{" "}
                        <span className="label bg-color-pink pull-right">
                          .bg-color-pink
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-pink</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-pinkDark">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                        <span className="label bg-color-pinkDark pull-right">
                          .bg-color-pinkDark
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-pinkDark</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-blue">
                        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                        id, lorem.{" "}
                        <span className="label bg-color-blue pull-right">
                          .bg-color-blue
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-blue</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-blueLight">
                        Maecenas nec odio et ante tincidunt tempus. Donec vitae
                        sapien.{" "}
                        <span className="label bg-color-blueLight pull-right">
                          bg-color-blueLight
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-blueLight</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-blueDark">
                        Libero venenatis faucibus. Nullam quis ante. Etiam sit
                        amet orci eget eros.{" "}
                        <span className="label bg-color-blueDark pull-right">
                          .bg-color-blueDark
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-blueDark</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-teal">
                        Donec sodales sagittis magna. Sed consequat.{" "}
                        <span className="label bg-color-teal pull-right">
                          .bg-color-teal
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-teal</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-yellow">
                        Leo eget bibendum sodales, augue velit cursus nunc.{" "}
                        <span className="label bg-color-yellow pull-right">
                          .bg-color-yellow
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-yellow</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-orange">
                        Sed ut perspiciatis unde omnis iste natus error.{" "}
                        <span className="label bg-color-orange pull-right">
                          .bg-color-orange
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-orange</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-orangeDark">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur.{" "}
                        <span className="label bg-color-orangeDark pull-right">
                          .bg-color-orangeDark
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-orangeDark</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-red">
                        Qui dolorem ipsum quia dolor sit amet, consectetur.{" "}
                        <span className="label bg-color-red pull-right">
                          .bg-color-red
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-red</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="txt-color-redLight">
                        Nam libero tempore, cum soluta nobis est eligendi optio.{" "}
                        <span className="label bg-color-redLight pull-right">
                          .bg-color-redLight
                        </span>
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.txt-color-redLight</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="text-muted">
                        Cumque nihil impedit quo minus id quod maxime placeat
                        facere.
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.text-muted</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="text-primary">
                        Qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit.
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.text-primary</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="text-success">
                        Ducimus qui blanditiis praesentium voluptatum deleniti.
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.text-success</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="text-danger">
                        Aolorem eum fugiat quo voluptas nulla pariatur?
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.text-danger</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="text-warning">
                        Ut enim ad minima veniam, quis nostrum exercitationem.
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.text-warning</code>
                    </td>
                  </tr>
                  {/* new tr */}
                  <tr>
                    <td>
                      <p className="text-info">
                        Tempora incidunt ut labore et dolore magnam aliquam
                        quaerat.
                      </p>
                    </td>
                    <td>
                      <code className="pull-right">.text-info</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* end widget */}
          </div>
          {/* WIDGET END */}
          {/* NEW WIDGET START */}
          <div className="col-sm-6">
            {/* widget content */}
            <div className="well well-sm">
              <h3 className="text-primary">All Lists</h3>
              <div className="row">
                <div className="col-sm-6">
                  <div className="bs-example">
                    <ul>
                      <li>Unordered List Item </li>
                      <li>
                        <strong>I am inside a strong tag</strong>
                      </li>
                      <li>
                        <i>I am Italic!</i>
                        <ul>
                          <li className="text-danger">We can also be red</li>
                          <li className="text-success">Or green</li>
                          <li className="txt-color-purple">Even purple!</li>
                        </ul>
                      </li>
                      <li>
                        <strong>
                          <i>
                            I am inside a strong and Italic tag, I may also
                            break into a new line if <u>squized</u>
                          </i>
                        </strong>
                      </li>
                      <li>
                        <small>I am inside a small tag</small>
                      </li>
                    </ul>
                  </div>
                  <div className="highlight">
                    <pre>
                      <code className="html">
                        <span className="nt">&lt;ul&gt;</span>
                        <br />
                        <span className="nt">&lt;li&gt;</span>...
                        <span className="nt">&lt;/li&gt;</span>
                        <br />
                        <span className="nt">&lt;/ul&gt;</span>
                        <br />
                      </code>
                    </pre>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bs-example">
                    <ol>
                      <li>Ordered List Item </li>
                      <li>
                        <u>Ordered List Item</u>
                      </li>
                      <li>
                        <strong>Ordered List Item</strong>
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa fa-bell text-danger" /> Unstyled
                            list with custom icon
                          </li>
                          <li className="text-success">
                            <i className="fa fa-check" />{" "}
                            <strong>
                              <u>Unstyled list</u> with custom icon
                            </strong>
                          </li>
                          <li>
                            <i className="fa fa-warning text-warning" />{" "}
                            <i>Unstyled list with custom icon</i>
                          </li>
                        </ul>
                      </li>
                      <li className="text-info">
                        <strong>
                          <i>
                            I am inside a strong and Italic tag, I may also
                            break into a new line if squized
                          </i>
                        </strong>
                      </li>
                      <li>
                        <span className="label label-danger">I am a label</span>
                      </li>
                    </ol>
                  </div>
                  <div className="highlight">
                    <pre>
                      <code className="html">
                        <span className="nt">&lt;ol&gt;</span>
                        <br />
                        <span className="nt">&lt;li&gt;</span>...
                        <span className="nt">&lt;/li&gt;</span>
                        <br />
                        <span className="nt">&lt;/ol&gt;</span>
                        <br />
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="bs-example">
                    <ul className="list-inline">
                      <li className="text-success">
                        <strong>Inline List Item #1</strong>
                      </li>
                      <li className="text-danger">
                        <strong>
                          <u>Inline List Item #2</u>
                        </strong>
                      </li>
                      <li className="text-primary">
                        <strong>
                          <i>Inline List Item #3</i>
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="highlight">
                    <pre>
                      <code className="html">
                        <span className="nt">&lt;ul</span>{" "}
                        <span className="na">class=</span>
                        <span className="s">"list-inline"</span>
                        <span className="nt">&gt;</span>
                        <br />
                        <span className="nt">&lt;li&gt;</span>...
                        <span className="nt">&lt;/li&gt;</span>
                        <br />
                        <span className="nt">&lt;/ul&gt;</span>
                        <br />
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            {/* end widget content */}
            <div className="well well-sm">
              <h3 className="text-primary">Quotes</h3>
              <div className="bs-example">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <small>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </blockquote>
              </div>
              <div className="highlight">
                <pre>
                  <code className="html">
                    <span className="nt">&lt;blockquote&gt;</span>
                    <br />
                    <span className="nt">&lt;p&gt;</span>Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.<span className="nt">&lt;/p&gt;</span>
                    <br />
                    <span className="nt">&lt;small&gt;</span>Someone famous in{" "}
                    <span className="nt">&lt;cite</span>{" "}
                    <span className="na">title=</span>
                    <span className="s">"Source Title"</span>
                    <span className="nt">&gt;</span>Source Title
                    <span className="nt">&lt;/cite&gt;&lt;/small&gt;</span>
                    <br />
                    <span className="nt">&lt;/blockquote&gt;</span>
                    <br />
                  </code>
                </pre>
              </div>
              <div className="bs-example" style={{ overflow: "hidden" }}>
                <blockquote className="pull-right">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <small>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </blockquote>
              </div>
              <div className="highlight">
                <pre>
                  <code className="html">
                    <span className="nt">&lt;blockquote</span>{" "}
                    <span className="na">class=</span>
                    <span className="s">"pull-right"</span>
                    <span className="nt">&gt;</span>
                    <br />
                    ...
                    <br />
                    <span className="nt">&lt;/blockquote&gt;</span>
                    <br />
                  </code>
                </pre>
              </div>
            </div>
            {/* widget content */}
            <div className="well well-sm">
              <h3 className="text-primary">Discription Lists</h3>
              <div className="bs-example">
                <dl>
                  <dt>Description lists</dt>
                  <dd>A description list is perfect for defining terms.</dd>
                  <dt>Euismod</dt>
                  <dd>
                    Vestibulum id ligula porta felis euismod semper eget lacinia
                    odio sem nec elit.
                  </dd>
                  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                  <dt>Malesuada porta</dt>
                  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                </dl>
              </div>
              <div className="highlight">
                <pre>
                  <code className="html">
                    <span className="nt">&lt;dl&gt;</span>
                    <br />
                    <span className="nt">&lt;dt&gt;</span>...
                    <span className="nt">&lt;/dt&gt;</span>
                    <br />
                    <span className="nt">&lt;dd&gt;</span>...
                    <span className="nt">&lt;/dd&gt;</span>
                    <br />
                    <span className="nt">&lt;/dl&gt;</span>
                    <br />
                  </code>
                </pre>
              </div>
              <div className="bs-example">
                <dl className="dl-horizontal">
                  <dt>Description lists</dt>
                  <dd>A description list is perfect for defining terms.</dd>
                  <dt>Euismod</dt>
                  <dd>
                    Vestibulum id ligula porta felis euismod semper eget lacinia
                    odio sem nec elit.
                  </dd>
                  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                  <dt>Malesuada porta</dt>
                  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                  <dt>Felis euismod semper eget lacinia</dt>
                  <dd>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                  </dd>
                </dl>
              </div>
              <div className="highlight">
                <pre>
                  <code className="html">
                    <span className="nt">&lt;dl</span>{" "}
                    <span className="na">class=</span>
                    <span className="s">"dl-horizontal"</span>
                    <span className="nt">&gt;</span>
                    <br />
                    <span className="nt">&lt;dt&gt;</span>...
                    <span className="nt">&lt;/dt&gt;</span>
                    <br />
                    <span className="nt">&lt;dd&gt;</span>...
                    <span className="nt">&lt;/dd&gt;</span>
                    <br />
                    <span className="nt">&lt;/dl&gt;</span>
                    <br />
                  </code>
                </pre>
              </div>
            </div>
            {/* end widget content */}
            {/* widget content */}
            <div className="bs-example">
              <h3 className="text-primary">Address</h3>
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                795 Folsom Ave, Suite 600
                <br />
                San Francisco, CA 94107
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
              <address>
                <strong>Full Name</strong>
                <br />
                <a href="mailto:#">first.last@example.com</a>
              </address>
            </div>
            <div className="highlight">
              <pre>
                <code className="html">
                  <span className="nt">&lt;address&gt;</span>
                  <br />
                  <span className="nt">&lt;strong&gt;</span>Twitter, Inc.
                  <span className="nt">&lt;/strong&gt;&lt;br&gt;</span>
                  <br />
                  795 Folsom Ave, Suite 600
                  <span className="nt">&lt;br&gt;</span>
                  <br />
                  San Francisco, CA 94107
                  <span className="nt">&lt;br&gt;</span>
                  <br />
                  <span className="nt">&lt;abbr</span>{" "}
                  <span className="na">title=</span>
                  <span className="s">"Phone"</span>
                  <span className="nt">&gt;</span>P:
                  <span className="nt">&lt;/abbr&gt;</span> (123) 456-7890
                  <br />
                  <span className="nt">&lt;/address&gt;</span>
                  <br />
                  <br />
                  <span className="nt">&lt;address&gt;</span>
                  <br />
                  <span className="nt">&lt;strong&gt;</span>Full Name
                  <span className="nt">&lt;/strong&gt;&lt;br&gt;</span>
                  <br />
                  <span className="nt">&lt;a</span>{" "}
                  <span className="na">href=</span>
                  <span className="s">"mailto:#"</span>
                  <span className="nt">&gt;</span>first.last@example.com
                  <span className="nt">&lt;/a&gt;</span>
                  <br />
                  <span className="nt">&lt;/address&gt;</span>
                  <br />
                </code>
              </pre>
            </div>
            <hr />
            <div className="bs-example">
              <h3 className="text-primary">Alignment</h3>
              <p className="text-left">Left aligned text.</p>
              <p className="text-center">Center aligned text.</p>
              <p className="text-right">Right aligned text.</p>
            </div>
            <div className="highlight">
              <pre>
                <code className="html">
                  <span className="nt">&lt;p</span>{" "}
                  <span className="na">class=</span>
                  <span className="s">"text-left"</span>
                  <span className="nt">&gt;</span>Left aligned text.
                  <span className="nt">&lt;/p&gt;</span>
                  <br />
                  <span className="nt">&lt;p</span>{" "}
                  <span className="na">class=</span>
                  <span className="s">"text-center"</span>
                  <span className="nt">&gt;</span>Center aligned text.
                  <span className="nt">&lt;/p&gt;</span>
                  <br />
                  <span className="nt">&lt;p</span>{" "}
                  <span className="na">class=</span>
                  <span className="s">"text-right"</span>
                  <span className="nt">&gt;</span>Right aligned text.
                  <span className="nt">&lt;/p&gt;</span>
                  <br />
                </code>
              </pre>
            </div>
            {/* end widget content */}
            {/* widget content */}
            <div className="well well-sm">
              <h3 className="text-primary">Text sizes</h3>
              <p className="alert alert-info">
                Take full control over the font by controling the size with the
                following CSS
              </p>
              <ul className="list-inline">
                <li>
                  <span className="font-xl">.font-xl</span>
                </li>
                <li>
                  <span className="font-lg">.font-lg</span>
                </li>
                <li>
                  <span className="font-md">.font-md</span>
                </li>
                <li>
                  <span className="font-sm">.font-sm</span>
                </li>
                <li>
                  <span className="font-xs">.font-xs</span>
                </li>
              </ul>
            </div>
            {/* end widget content */}
          </div>
          {/* WIDGET END */}
        </div>
      </div>
    );
  }
}
