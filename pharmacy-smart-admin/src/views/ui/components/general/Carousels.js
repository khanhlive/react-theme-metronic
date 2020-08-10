import React from "react";

import { Carousel } from "react-bootstrap";

export class Carousels extends React.Component {
  render() {
    return (
      <div className="row">
        <h2 className="row-seperator-header">
          <i className="glyphicon glyphicon-picture" /> Carousel Slide / Fade
        </h2>

        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              {/* well */}
              <div className="well">
                <h3>Carousel sliding</h3>
                <p>
                  Default sliding carousel. <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://react-bootstrap.github.io/components/carousel/"
                  >
                    React Bootstrap Carousel
                  </a>
                </p>

                <Carousel>
                  <Carousel.Item>
                    <img
                      width={900}
                      height={500}
                      alt="900x500"
                      src="assets/img/demo/m3.jpg"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      width={900}
                      height={500}
                      alt="900x500"
                      src="assets/img/demo/m1.jpg"
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      width={900}
                      height={500}
                      alt="900x500"
                      src="assets/img/demo/m2.jpg"
                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              {/* end well*/}
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              {/* well */}
              <div className="well">
                <h3>Carousel fading</h3>
                <p>
                  To make the carasoul fade,
                  <br /> wrap your &lt;Carousel&gt; with &lt;div
                  className="carousel-fade"&gt;
                </p>

                <div className="carousel-fade">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src="assets/img/demo/m3.jpg"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src="assets/img/demo/m1.jpg"
                      />
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src="assets/img/demo/m2.jpg"
                      />
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              {/* end well */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
