import React from "react";

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import { getJSON } from "../../../common/utils";

// replace this with your GoogleMaps API key
const API_KEY = `AIzaSyDd8YW8k_J-Jkti-W4QNk5dL8O_5_2QUWY`;

const SmartMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultOptions={{ styles: props.styles }}
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
  );
});

export default class MapView extends React.Component {
  currentStyleId = null;
  currentStyles = null;

  componentDidMount() {
    this.fetchStyle(this.props.match.params.style);
  }

  fetchStyle = style => {
    getJSON("assets/api/maps/" + style + ".json").then(styles => {
      this.currentStyleId = style;
      this.currentStyles = styles;
      this.forceUpdate();
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.currentStyleId !== nextProps.match.params.style) {
      this.fetchStyle(nextProps.match.params.style);
    }

    return this.currentStyleId !== nextProps.match.params.style;
  }

  render() {
    return this.currentStyles ? (
      <SmartMap key={this.currentStyleId} styles={this.currentStyles} />
    ) : null;
  }
}
