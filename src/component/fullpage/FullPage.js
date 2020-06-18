import React, { Component } from "react";
export default class Fullpage extends Component {
  render() {
    const { children } = this.props;
    return <div className={`fullpage ${this.props.className || ''}`}>
        {children}
    </div>
  }
}