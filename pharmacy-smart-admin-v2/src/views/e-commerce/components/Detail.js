import React from "react";
import { Carousel } from "react-bootstrap";
import { Stats, BigBreadcrumbs, WidgetGrid } from "../../../common";

export default class Datatables extends React.Component {
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
            items={["E-Commerce", "Product Detail"]}
            icon="fa fa-fw fa-shopping-cart"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <WidgetGrid>
          {/* row */}
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              {/* product */}
              <div className="product-content product-wrap clearfix product-deatil">
                <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12 ">
                    <div className="product-image">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            width={900}
                            height={500}
                            alt=""
                            src="/assets/img/demo/e-comm/detail-1.png"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            width={900}
                            height={500}
                            alt=""
                            src="/assets/img/demo/e-comm/detail-2.png"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            width={900}
                            height={500}
                            alt=""
                            src="/assets/img/demo/e-comm/detail-3.png"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h2 className="name">
                      Product Name Title Here
                      <small>
                        Product by
                        <a href="#/" onClick={this.onClick}>Adeline</a>
                      </small>
                      <i className="fa fa-star fa-2x text-primary" />
                      <i className="fa fa-star fa-2x text-primary" />
                      <i className="fa fa-star fa-2x text-primary" />
                      <i className="fa fa-star fa-2x text-primary" />
                      <i className="fa fa-star fa-2x text-muted" />
                      <span className="fa fa-2x">
                        <h5>(109) Votes</h5>
                      </span>
                      <a href="#/" onClick={this.onClick}>109 customer reviews</a>
                    </h2>
                    <hr />
                    <h3 className="price-container">
                      $129.54
                      <small>*includes tax</small>
                    </h3>
                    <div className="certified">
                      <ul>
                        <li>
                          <a href="#/" onClick={this.onClick}>
                            Delivery time<span>7 Working Days</span>
                          </a>
                        </li>
                        <li>
                          <a href="#/" onClick={this.onClick}>
                            Certified<span>Quality Assured</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="description description-tabs">
                      <ul id="myTab" className="nav nav-pills">
                        <li className="active">
                          <a
                            href="#more-information"
                            data-toggle="tab"
                            className="no-margin"
                          >
                            Product Description
                          </a>
                        </li>
                        <li>
                          <a href="#specifications" data-toggle="tab">
                            Specifications
                          </a>
                        </li>
                        <li>
                          <a href="#reviews" data-toggle="tab">
                            Reviews
                          </a>
                        </li>
                      </ul>
                      <div id="myTabContent" className="tab-content">
                        <div
                          className="tab-pane fade active in"
                          id="more-information"
                        >
                          <br />
                          <strong>Description Title</strong>
                          <p>
                            Integer egestas, orci id condimentum eleifend, nibh
                            nisi pulvinar eros, vitae ornare massa neque ut
                            orci. Nam aliquet lectus sed odio eleifend, at
                            iaculis dolor egestas. Nunc elementum pellentesque
                            augue sodales porta. Etiam aliquet rutrum turpis,
                            feugiat sodales ipsum consectetur nec.
                          </p>
                        </div>
                        <div className="tab-pane fade" id="specifications">
                          <br />
                          <dl>
                            <dt>Gravina</dt>
                            <dd>
                              Etiam porta sem malesuada magna mollis euismod.
                            </dd>
                            <dd>
                              Donec id elit non mi porta gravida at eget metus.
                            </dd>
                            <dd>Eget lacinia odio sem nec elit.</dd>
                            <br />
                            <dt>Test lists</dt>
                            <dd>
                              A description list is perfect for defining terms.
                            </dd>
                            <br />
                            <dt>Altra porta</dt>
                            <dd>
                              Vestibulum id ligula porta felis euismod semper
                            </dd>
                          </dl>
                        </div>
                        <div className="tab-pane fade" id="reviews">
                          <br />
                          <form
                            method="post"
                            className="well padding-bottom-10"
                            onSubmit={this.onSubmit}
                          >
                            <textarea
                              rows={2}
                              className="form-control"
                              placeholder="Write a review"
                              defaultValue={""}
                            />
                            <div className="margin-top-10">
                              <button
                                type="submit"
                                className="btn btn-sm btn-primary pull-right"
                              >
                                Submit Review
                              </button>
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-link profile-link-btn"
                                rel="tooltip"
                                data-placement="bottom"
                                data-original-title="Add Location"
                              >
                                <i className="fa fa-location-arrow" />
                              </a>
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-link profile-link-btn"
                                rel="tooltip"
                                data-placement="bottom"
                                data-original-title="Add Voice"
                              >
                                <i className="fa fa-microphone" />
                              </a>
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-link profile-link-btn"
                                rel="tooltip"
                                data-placement="bottom"
                                data-original-title="Add Photo"
                              >
                                <i className="fa fa-camera" />
                              </a>
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-link profile-link-btn"
                                rel="tooltip"
                                data-placement="bottom"
                                data-original-title="Add File"
                              >
                                <i className="fa fa-file" />
                              </a>
                            </div>
                          </form>
                          <div className="chat-body no-padding profile-message">
                            <ul>
                              <li className="message">
                                <img
                                  alt=""
                                  src="assets/img/avatars/1.png"
                                  className="online"
                                />
                                <span className="message-text">
                                  <a href="#/"
                                    onClick={this.onClick}
                                    className="username"
                                  >
                                    Alisha Molly
                                    <span className="badge">
                                      Purchase Verified
                                    </span>
                                    <span className="pull-right">
                                      <i className="fa fa-star fa-2x text-primary" />
                                      <i className="fa fa-star fa-2x text-primary" />
                                      <i className="fa fa-star fa-2x text-primary" />
                                      <i className="fa fa-star fa-2x text-primary" />
                                      <i className="fa fa-star fa-2x text-muted" />
                                    </span>
                                  </a>
                                  Can't divide were divide fish forth fish to.
                                  Was can't form the, living life grass darkness
                                  very image let unto fowl isn't in blessed fill
                                  life yielding above all moved
                                </span>
                                <ul className="list-inline font-xs">
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-info"
                                    >
                                      <i className="fa fa-thumbs-up" /> This was
                                      helpful (22)
                                    </a>
                                  </li>
                                  <li className="pull-right">
                                    <small className="text-muted pull-right ultra-light">
                                      Posted 1 year ago
                                    </small>
                                  </li>
                                </ul>
                              </li>
                              <li className="message">
                                <img
                                  alt=""
                                  src="assets/img/avatars/2.png"
                                  className="online"
                                />
                                <span className="message-text">
                                  <a href="#/"
                                    onClick={this.onClick}
                                    className="username"
                                  >
                                    Aragon Zarko
                                    <span className="badge">
                                      Purchase Verified
                                    </span>
                                    <span className="pull-right">
                                      <i className="fa fa-star fa-2x text-primary" />
                                      <i className="fa fa-star fa-2x text-primary" />
                                      <i className="fa fa-star fa-2x text-primary" />
                                      <i className="fa fa-star fa-2x text-primary" />
                                      <i className="fa fa-star fa-2x text-primary" />
                                    </span>
                                  </a>
                                  Excellent product, love it!
                                </span>
                                <ul className="list-inline font-xs">
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-info"
                                    >
                                      <i className="fa fa-thumbs-up" /> This was
                                      helpful (22)
                                    </a>
                                  </li>
                                  <li className="pull-right">
                                    <small className="text-muted pull-right ultra-light">
                                      Posted 1 year ago
                                    </small>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-success btn-lg"
                        >
                          Add to cart ($129.54)
                        </a>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="btn-group pull-right">
                          <button className="btn btn-white btn-default">
                            <i className="fa fa-star" /> Add to wishlist
                          </button>
                          <button className="btn btn-white btn-default">
                            <i className="fa fa-envelope" /> Contact Seller
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end product */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              {/* product */}
              <div className="product-content product-wrap clearfix product-deatil">
                <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12 ">
                    <div className="product-image">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            width={900}
                            height={500}
                            alt=""
                            src="/assets/img/demo/e-comm/detail-1.png"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            width={900}
                            height={500}
                            alt=""
                            src="/assets/img/demo/e-comm/detail-2.png"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            width={900}
                            height={500}
                            alt=""
                            src="/assets/img/demo/e-comm/detail-3.png"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h2 className="name">
                      Product Name Title Here
                      <small>
                        Product by
                        <a href="#/" onClick={this.onClick}>Adeline</a>
                      </small>
                      <i className="fa fa-star fa-2x text-primary" />
                      <i className="fa fa-star fa-2x text-primary" />
                      <i className="fa fa-star fa-2x text-primary" />
                      <i className="fa fa-star fa-2x text-primary" />
                      <i className="fa fa-star fa-2x text-muted" />
                      <span className="fa fa-2x">
                        <h5>(109) Votes</h5>
                      </span>
                      <a href="#/" onClick={this.onClick}>109 customer reviews</a>
                    </h2>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6">
                        <h3 className="price-container">
                          $129.54
                          <small>*includes tax</small>
                        </h3>
                      </div>
                      <div className="col-sm-6 text-right">
                        <a href="#/" onClick={this.onClick} className="btn btn-primary">
                          Add to cart ($129.54)
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="description description-tabs">
                      <ul id="myTab2" className="nav nav-tabs">
                        <li className="active">
                          <a
                            href="#more-information2"
                            data-toggle="tab"
                            className="no-margin"
                          >
                            Product Description
                          </a>
                        </li>
                        <li>
                          <a href="#specifications2" data-toggle="tab">
                            Specifications
                          </a>
                        </li>
                        <li>
                          <a href="#reviews2" data-toggle="tab">
                            Reviews
                          </a>
                        </li>
                      </ul>
                      <div id="myTabContent2" className="tab-content">
                        <div
                          className="tab-pane fade active in"
                          id="more-information2"
                        >
                          <br />
                          <strong>Description Title</strong>
                          <p>
                            Integer egestas, orci id condimentum eleifend, nibh
                            nisi pulvinar eros, vitae ornare massa neque ut
                            orci. Nam aliquet lectus sed odio eleifend, at
                            iaculis dolor egestas. Nunc elementum pellentesque
                            augue sodales porta. Etiam aliquet rutrum turpis,
                            feugiat sodales ipsum consectetur nec.
                          </p>
                        </div>
                        <div className="tab-pane fade" id="specifications2">
                          <br />
                          <dl>
                            <dt>Gravina</dt>
                            <dd>
                              Etiam porta sem malesuada magna mollis euismod.
                            </dd>
                            <dd>
                              Donec id elit non mi porta gravida at eget metus.
                            </dd>
                            <dd>Eget lacinia odio sem nec elit.</dd>
                            <br />
                            <dt>Test lists</dt>
                            <dd>
                              A description list is perfect for defining terms.
                            </dd>
                            <br />
                            <dt>Altra porta</dt>
                            <dd>
                              Vestibulum id ligula porta felis euismod semper
                            </dd>
                          </dl>
                        </div>
                        <div className="tab-pane fade" id="reviews2">
                          <br />
                          <form
                            method="post"
                            className="well padding-bottom-10"
                            onSubmit={this.onSubmit}
                          >
                            <textarea
                              rows={2}
                              className="form-control"
                              placeholder="Write a review"
                              defaultValue={""}
                            />
                            <div className="margin-top-10">
                              <button
                                type="submit"
                                className="btn btn-sm btn-primary pull-right"
                              >
                                Submit Review
                              </button>
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-link profile-link-btn"
                                rel="tooltip"
                                data-placement="bottom"
                                data-original-title="Add Location"
                              >
                                <i className="fa fa-location-arrow" />
                              </a>
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-link profile-link-btn"
                                rel="tooltip"
                                data-placement="bottom"
                                data-original-title="Add Voice"
                              >
                                <i className="fa fa-microphone" />
                              </a>
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-link profile-link-btn"
                                rel="tooltip"
                                data-placement="bottom"
                                data-original-title="Add Photo"
                              >
                                <i className="fa fa-camera" />
                              </a>
                              <a href="#/"
                                onClick={this.onClick}
                                className="btn btn-link profile-link-btn"
                                rel="tooltip"
                                data-placement="bottom"
                                data-original-title="Add File"
                              >
                                <i className="fa fa-file" />
                              </a>
                            </div>
                          </form>
                          <div className="chat-body no-padding profile-message">
                            <ul>
                              <li className="message">
                                <img
                                  alt=""
                                  src="assets/img/avatars/1.png"
                                  className="online"
                                />
                                <span className="message-text">
                                  <a href="#/"
                                    onClick={this.onClick}
                                    className="username"
                                  >
                                    John Doe
                                    <small className="text-muted pull-right ultra-light">
                                      2 Minutes ago
                                    </small>
                                  </a>
                                  Can't divide were divide fish forth fish to.
                                  Was can't form the, living life grass darkness
                                  very image let unto fowl isn't in blessed fill
                                  life yielding above all moved
                                </span>
                                <ul className="list-inline font-xs">
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-info"
                                    >
                                      <i className="fa fa-reply" /> Reply
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-danger"
                                    >
                                      <i className="fa fa-thumbs-up" /> Like
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-muted"
                                    >
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
                                  alt=""
                                  src="assets/img/avatars/3.png"
                                  className="online"
                                />
                                <span className="message-text">
                                  <a href="#/"
                                    onClick={this.onClick}
                                    className="username"
                                  >
                                    Serman Syla
                                  </a>
                                  eget lacinia odio sem nec eliteget lacinia
                                  odio sem nec elit.
                                  <i className="fa fa-smile-o txt-color-orange" />
                                </span>
                                <ul className="list-inline font-xs">
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-muted"
                                    >
                                      1 minute ago
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-danger"
                                    >
                                      <i className="fa fa-thumbs-up" /> Like
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="message message-reply">
                                <img
                                  alt=""
                                  src="assets/img/avatars/4.png"
                                  className="online"
                                />
                                <span className="message-text">
                                  <a href="#/"
                                    onClick={this.onClick}
                                    className="username"
                                  >
                                    Sadi Orlaf
                                  </a>
                                  Eet lacinia odio sem nec elit.
                                  <i className="fa fa-smile-o txt-color-orange" />
                                </span>
                                <ul className="list-inline font-xs">
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-muted"
                                    >
                                      a moment ago
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#/"
                                      onClick={this.onClick}
                                      className="text-danger"
                                    >
                                      <i className="fa fa-thumbs-up" /> Like
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="btn-group">
                          <button className="btn btn-white btn-default">
                            <i className="fa fa-star" /> Add to wishlist
                          </button>
                          <button className="btn btn-white btn-default">
                            <i className="fa fa-envelope" /> Contact Seller
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end product */}
            </div>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
