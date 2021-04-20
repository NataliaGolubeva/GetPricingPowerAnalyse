import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";

class SalesSlider extends Component {
  render() {
    return (
      <>
        <div className="sliderLegend">Sales increase</div>
        <Flex>
          <input
            type="range"
            min={0}
            max={300}
            value={this.props.salesValue}
            className="slider"
            onChange={this.props.handleSalesOnChange}
          />
          <div className="valueBox">
            <p className="sliderValue">{this.props.salesValue}</p>
          </div>
        </Flex>
      </>
    );
  }
}

export default SalesSlider;
