import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <input
        type="range"
        min={0}
        max={300}
        value={this.props.salesValue}
        className="slider"
        onChange={this.props.handleSalesOnChange}
      />
    );
  }
}

export default Child;
