import React from "react";

import { Stats, BigBreadcrumbs, WidgetGrid } from "../../../common";

export default () => (
  <div id="content">
    <div className="row">
      <BigBreadcrumbs
        items={["E-Commerce", "Products View"]}
        icon="fa fa-fw fa-shopping-cart"
        className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
      />
      <Stats />
    </div>

    <WidgetGrid>
      {/* row */}
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          {/* product */}
          <div className="product-content product-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img
                    src="assets/img/demo/e-comm/1.png"
                    alt="194x228"
                    className="img-responsive"
                  />
                  <span className="tag2 hot">HOT</span>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#/e-commerce/products-detail">
                      Product Name Title Here <span>Category</span>
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$99</span>
                  </p>
                  <span className="tag1" />
                </div>
                <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
                <div className="product-info smart-form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <button className="btn btn-success">Add to cart</button>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <div className="rating">
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-5"
                        />
                        <label htmlFor="stars-rating-5">
                          <i className="fa fa-star" />
                        </label>
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-4"
                        />
                        <label htmlFor="stars-rating-4">
                          <i className="fa fa-star" />
                        </label>
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-3"
                        />
                        <label htmlFor="stars-rating-3">
                          <i className="fa fa-star text-primary" />
                        </label>
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-2"
                        />
                        <label htmlFor="stars-rating-2">
                          <i className="fa fa-star text-primary" />
                        </label>
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-1"
                        />
                        <label htmlFor="stars-rating-1">
                          <i className="fa fa-star text-primary" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          {/* product */}
          <div className="product-content product-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img
                    src="assets/img/demo/e-comm/2.png"
                    alt="194x228"
                    className="img-responsive"
                  />
                  <span className="tag2 sale">Sale</span>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#/e-commerce/products-detail">
                      Product Name Title Here <span>Category</span>
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$109</span>
                  </p>
                  <span className="tag1" />
                </div>
                <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
                <div className="product-info smart-form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <button className="btn btn-success">Add to cart</button>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <div className="rating">
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-5"
                        />
                        <label htmlFor="stars-rating-5">
                          <i className="fa fa-star" />
                        </label>
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-4"
                        />
                        <label htmlFor="stars-rating-4">
                          <i className="fa fa-star" />
                        </label>
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-3"
                        />
                        <label htmlFor="stars-rating-3">
                          <i className="fa fa-star text-primary" />
                        </label>
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-2"
                        />
                        <label htmlFor="stars-rating-2">
                          <i className="fa fa-star text-primary" />
                        </label>
                        <input
                          type="radio"
                          name="stars-rating"
                          id="stars-rating-1"
                        />
                        <label htmlFor="stars-rating-1">
                          <i className="fa fa-star text-primary" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          {/* product */}
          <div className="product-content product-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img
                    src="assets/img/demo/e-comm/3.png"
                    alt="194x228"
                    className="img-responsive"
                  />
                  <span className="tag2 hot">HOT</span>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#/e-commerce/products-detail">
                      Product Name Title Here <span>Category</span>
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$399</span>
                  </p>
                  <span className="tag1" />
                </div>
                <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          {/* product */}
          <div className="product-content product-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img
                    src="assets/img/demo/e-comm/4.png"
                    alt="194x228"
                    className="img-responsive"
                  />
                  <span className="tag2 sale">Sale</span>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#/e-commerce/products-detail">
                      Product Name Title Here <span>Category</span>
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$19</span>
                  </p>
                  <span className="tag1" />
                </div>
                <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          {/* product */}
          <div className="product-content product-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img
                    src="assets/img/demo/e-comm/5.png"
                    alt="194x228"
                    className="img-responsive"
                  />
                  <span className="tag2 sale">Sale</span>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#/e-commerce/products-detail">
                      Product Name Title Here <span>Category</span>
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$195</span>
                  </p>
                  <span className="tag1" />
                </div>
                <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          {/* product */}
          <div className="product-content product-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img
                    src="assets/img/demo/e-comm/7.png"
                    alt="194x228"
                    className="img-responsive"
                  />
                  <span className="tag2 sale">Sale</span>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#/e-commerce/products-detail">
                      Product Name Title Here <span>Category</span>
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$99</span>
                  </p>
                  <span className="tag1" />
                </div>
                <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          {/* product */}
          <div className="product-content product-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img
                    src="assets/img/demo/e-comm/8.png"
                    alt="194x228"
                    className="img-responsive"
                  />
                  <span className="tag2 sale">Sale</span>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#/e-commerce/products-detail">
                      Product Name Title Here <span>Category</span>
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$109</span>
                  </p>
                  <span className="tag1" />
                </div>
                <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          {/* product */}
          <div className="product-content product-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img
                    src="assets/img/demo/e-comm/9.png"
                    alt="194x228"
                    className="img-responsive"
                  />
                  <span className="tag2 sale">Sale</span>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#/e-commerce/products-detail">
                      Product Name Title Here <span>Category</span>
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$399</span>
                  </p>
                  <span className="tag1" />
                </div>
                <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum</p>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
        <div className="col-sm-12 text-center">
          <button className="btn btn-primary btn-lg">
            Load more <i className="fa fa-arrow-down" />
          </button>
        </div>
      </div>
    </WidgetGrid>
  </div>
);
