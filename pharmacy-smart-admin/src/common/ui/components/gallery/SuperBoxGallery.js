import React from "react";

import $ from "jquery";

import "./SuperBoxGallery.plugin";

export default class SuperBoxGallery extends React.Component {
  componentDidMount() {
    let element = $(this.refs.galleryContainer);
    element.SuperBox();
  }

  render() {
    let items = this.props.items || [];
    return (
      <div>
        <div ref="galleryContainer" className={this.props.className}>
          {items.map(function(item, idx) {
            return (
              <div className="superbox-list" key={idx}>
                <img
                  src={item.src}
                  data-img={item.img}
                  alt={item.alt}
                  title={item.title}
                  className="superbox-img"
                />
              </div>
            );
          })}

          <div className="superbox-float" />
        </div>
      </div>
    );
  }
}
