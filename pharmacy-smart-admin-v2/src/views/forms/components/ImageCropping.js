import React from "react";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  ButtonGroup,
  Button
} from "react-bootstrap";

import { BigBreadcrumbs, Stats } from "../../../common";

export default class ImageCropping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aspectRatios: [
        { name: "16:9", val: 16 / 9 },
        { name: "4:3", val: 4 / 3 },
        { name: "1:1", val: 1 / 1 },
        { name: "2:3", val: 2 / 3 }
      ],
      images: [
        "/assets/img/superbox/superbox-full-7.jpg",
        "/assets/img/superbox/superbox-full-9.jpg",
        "/assets/img/superbox/superbox-full-10.jpg",
        "/assets/img/superbox/superbox-full-11.jpg",
        "/assets/img/superbox/superbox-full-13.jpg",
        "/assets/img/superbox/superbox-full-16.jpg",
        "/assets/img/superbox/superbox-full-18.jpg",
        "/assets/img/superbox/superbox-full-19.jpg",
        "/assets/img/superbox/superbox-full-23.jpg",
        "/assets/img/superbox/superbox-full-1.jpg",
        "/assets/img/superbox/superbox-full-2.jpg",
        "/assets/img/superbox/superbox-full-3.jpg",
        "/assets/img/superbox/superbox-full-4.jpg",
        "/assets/img/superbox/superbox-full-12.jpg",
        "/assets/img/superbox/superbox-full-14.jpg",
        "/assets/img/superbox/superbox-full-15.jpg",
        "/assets/img/superbox/superbox-full-17.jpg",
        "/assets/img/superbox/superbox-full-20.jpg",
        "/assets/img/superbox/superbox-full-6.jpg",
        "/assets/img/superbox/superbox-full-8.jpg",
        "/assets/img/superbox/superbox-full-22.jpg",
        "/assets/img/superbox/superbox-full-24.jpg"
      ],
      selectedImage: "/assets/img/superbox/superbox-full-7.jpg",

      crop: {
        x: null,
        y: null,
        width: null,
        height: null,
        rotate: null,
        scaleX: 1,
        scaleY: 1
      },

      options: {
        aspectRatio: 16 / 9,
        viewMode: 0,
        responsive: true,
        restore: true,
        checkCrossOrigin: true,
        checkOrientation: true,
        modal: true,
        guides: true,
        center: true,
        highlight: true,
        background: true,
        autoCrop: true,
        movable: true,
        rotatable: true,
        scalable: true,
        zoomable: true,
        zoomOnTouch: true,
        zoomOnWheel: true,
        cropBoxMovable: true,
        cropBoxResizable: true,
        toggleDragModeOnDblclick: true
      }
    };
  }

  selectImage = selectedImage => {
    this.setState({
      selectedImage
    });
  };
  setOption = (name, value) => {
    const options = this.state.options;
    options[name] = value;
    this.setState({
      options
    });
  };

  onCrop = e => {
    this.setState({
      crop: this.refs.cropper.getData()
    });
  };
  render() {
    const thumbs = this.state.images.map((image, idx) => {
      const isActive = this.state.selectedImage === image;
      return (
        <div
          className="col-xs-12 col-md-6"
          key={idx}
          onClick={() => this.selectImage(image)}
        >
          <div
            className="thumbnail"
            style={{
              backgroundColor: isActive ? "transparent" : "#fff",
              borderColor: isActive ? "transparent" : "#ddd"
            }}
          >
            <img src={image} alt={image} />
          </div>
        </div>
      );
    });
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Forms", "Image Cropping"]}
            icon="fa fa-image"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <div className="row">{thumbs}</div>
          </div>

          <div className="col-sm-9">
            <div className="row">
              <div className="col-xs-12">
                <Cropper
                  ref="cropper"
                  src={this.state.selectedImage}
                  style={{ height: 400, width: "100%" }}
                  preview={".cropper-preview"}
                  // Cropper.js options
                  viewMode={this.state.options.viewMode}
                  aspectRatio={this.state.options.aspectRatio}
                  guides={false}
                  crop={this.onCrop}
                />
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col-xs-6">
                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="radio"
                    name="aspectRatios"
                    defaultValue={"16:9"}
                  >
                    {this.state.aspectRatios.map(ratio => {
                      return (
                        <ToggleButton
                          key={ratio.name}
                          value={ratio.name}
                          onClick={() =>
                            this.setOption("aspectRatio", ratio.val)
                          }
                        >
                          {ratio.name}
                        </ToggleButton>
                      );
                    })}
                  </ToggleButtonGroup>
                </ButtonToolbar>

                <br />

                <ButtonGroup>
                  <Button onClick={() => this.refs.cropper.reset()}>
                    Reset
                  </Button>
                  <Button onClick={() => this.refs.cropper.clear()}>
                    Clear
                  </Button>
                </ButtonGroup>
              </div>

              <div className="col-xs-6">
                <div className="cropper-preview-container">
                  <div className="cropper-preview cropper-preview-lg" />
                  <div className="cropper-preview cropper-preview-md" />
                  <div className="cropper-preview cropper-preview-sm" />
                  <div className="cropper-preview cropper-preview-xs" />
                </div>
                <textarea
                  className="col-sm-12"
                  style={{ marginTop: "1.75rem" }}
                  rows={9}
                  readOnly={true}
                  value={JSON.stringify(this.state.crop, null, 2)}
                  onChange={e => {}}
                />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
