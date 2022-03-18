import React, { Component } from "react";
import "./button.css";

export default class Button extends Component {
  render() {
    return (
      <button
        className={`btn ${this.props.btnColor}`}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}
