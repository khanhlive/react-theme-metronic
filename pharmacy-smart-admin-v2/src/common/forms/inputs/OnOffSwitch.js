import React from "react";
import { newid } from "../../utils";

export default class OnOffSwitch extends React.Component {
  render() {
    const props = this.props;
    const id = props.id || newid("on-off-switch");
    const title = props.title ? (
      <span className="onoffswitch-title">{props.title}</span>
    ) : null;
    const onText = props.onText || "ON";
    const offText = props.offText || "OFF";
    return (
      <div className="onoffswitch-container">
        {title}
        <span className="onoffswitch">
          <input
            type="checkbox"
            className="onoffswitch-checkbox"
            id={id}
            {...props}
          />
          <label className="onoffswitch-label" htmlFor={id}>
            <span
              className="onoffswitch-inner"
              data-swchon-text={onText}
              data-swchoff-text={offText}
            />
            <span className="onoffswitch-switch" />
          </label>
        </span>
      </div>
    );
  }
}
